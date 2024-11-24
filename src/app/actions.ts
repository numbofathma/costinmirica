'use server';

import { ReactElement } from 'react';
import { Resend } from 'resend';
import { ContactEmailTemplate } from '@/templates/contact';
import { IEmail } from '@/interfaces/api';
import { IContactFormErrors, IContactFromResponse } from '@/interfaces/app';
import { DomainCheckTypes } from '@/constants/enums';
import { LangVars } from '@/constants/lang';
import ContactFormValidator from '@/validators/ContactFormValidator';
import DomainValidator from '@/validators/DomainValidator';

const getFormDataValue = <T extends string>(formData: FormData, key: T): string => {
  const value = formData.get(key);
  if (typeof value !== 'string') {
    return '';
  }
  return value;
};

const extractFormData = (formData: FormData): IEmail => {
  return {
    email: getFormDataValue(formData, 'email').toLowerCase(),
    text: getFormDataValue(formData, 'text'),
    name: getFormDataValue(formData, 'name'),
    phone: getFormDataValue(formData, 'phone'),
  };
};

export const sendEmail = async (_prevState: IContactFromResponse, formData: FormData): Promise<IContactFromResponse> => {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const emailFrom = String(process.env.RESEND_EMAIL_FROM);
  const contactFormValidator = new ContactFormValidator();
  const domainValidator = new DomainValidator(DomainCheckTypes.MX);
  const { mock, general } = LangVars.Validation.General;

  const { email, text, name, phone } = extractFormData(formData);

  let errors: IContactFormErrors = {};

  if (phone) {
    return { errors: { mock }, ok: false };
  }

  if (!contactFormValidator.validate({ name: name.trim(), email: email.trim(), text: text.trim() })) {
    errors = { ...errors, ...contactFormValidator.getErrors() };
  }

  if (!(await domainValidator.validate(email.trim()))) {
    errors = { ...errors, ...domainValidator.getErrors() };
  }

  if (Object.keys(errors).length > 0) {
    return { errors, ok: false };
  }

  try {
    const { data, error } = await resend.emails.send({
      from: `Contact <${emailFrom}>`,
      to: [emailFrom],
      subject: 'New message!',
      react: ContactEmailTemplate({
        name,
        email,
        text,
      }) as ReactElement,
    });

    if (error) {
      return { errors: { general }, ok: false };
    }

    return { data: data?.id, ok: true };
  } catch (error) {
    return { errors: { general }, ok: false };
  }
};
