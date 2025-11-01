'use server';

import { ReactElement } from 'react';
import { Resend } from 'resend';
import { ContactEmailTemplate } from '@/templates/contact';
import { IContactFormErrors, IContactFromResponse } from '@/interfaces/app';
import { IEmail } from '@/interfaces/api';
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

const extractFormData = (formData: FormData): IEmail & { recaptchaToken: string } => {
  return {
    email: getFormDataValue(formData, 'email').toLowerCase().trim(),
    text: getFormDataValue(formData, 'text').trim(),
    name: getFormDataValue(formData, 'name').trim(),
    phone: getFormDataValue(formData, 'phone'),
    recaptchaToken: getFormDataValue(formData, 'recaptchaToken'),
  };
};

export const sendEmail = async (_prevState: IContactFromResponse, formData: FormData): Promise<IContactFromResponse> => {
  const { email, text, name, phone, recaptchaToken } = extractFormData(formData);

  const resend = new Resend(process.env.RESEND_API_KEY);
  const emailFrom = String(process.env.RESEND_EMAIL_FROM);

  const contactFormValidator = new ContactFormValidator();
  const domainValidator = new DomainValidator(DomainCheckTypes.MX);

  const { mock, general } = LangVars.Validation.General;
  const { verificationFailure } = LangVars.Validation.Recaptcha;
  const recaptcha = verificationFailure.replace('###{contactEmail}###', emailFrom.replace('@', '[at]'));

  let errors: IContactFormErrors = {};

  // Honeypot spam check
  if (phone) {
    return { errors: { mock }, ok: false };
  }

  // Form validation
  if (!contactFormValidator.validate({ name, email, text })) {
    errors = { ...errors, ...contactFormValidator.getErrors() };
  }

  // Domain validation
  if (!(await domainValidator.validate(email))) {
    errors = { ...errors, ...domainValidator.getErrors() };
  }

  // reCAPTCHA validation
  if (!recaptchaToken) {
    errors = { ...errors, recaptcha };
  } else {
    try {
      const secretKey = process.env.RECAPTCHA_SECRET_KEY;
      const response = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${recaptchaToken}`, {
        method: 'POST',
      });
      const data = await response.json();

      if (!data.success || data.score < 0.7) {
        errors = { ...errors, recaptcha };
      }
    } catch (_) {
      errors = { ...errors, recaptcha };
    }
  }

  if (Object.keys(errors).length > 0) {
    return { errors, ok: false };
  }

  // Send email
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
  } catch (_) {
    return { errors: { general }, ok: false };
  }
};
