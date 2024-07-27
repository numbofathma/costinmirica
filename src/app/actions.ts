'use server';

import { ReactElement } from 'react';
import { Resend } from 'resend';
import { DomainCheckTypes, IContactFormErrors, IContactFromResponse } from '@/interfaces/app';
import { LangVars } from '@/constants/lang';
import ContactFormValidator from '@/validators/ContactFormValidator';
import DomainValidator from '@/validators/DomainValidator';
import { ContactEmailTemplate } from '@/templates/contact';

export const sendEmail = async (_prevState: IContactFromResponse, formData: FormData): Promise<IContactFromResponse> => {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const emailFrom = String(process.env.RESEND_EMAIL_FROM);
  const contactFormValidator = new ContactFormValidator();
  const domainValidator = new DomainValidator(DomainCheckTypes.MX);
  const { mock, general } = LangVars.Validation.General;

  const email = formData.get('email') as string;
  const text = formData.get('text') as string;
  const name = formData.get('name') as string;
  const phone = formData.get('phone') as string;

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
