import { ReactElement } from 'react';
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { DomainCheckTypes } from '@/interfaces/app';
import ContactFormValidator from '@/validators/ContactFormValidator';
import DomainValidator from '@/validators/DomainValidator';
import { ContactEmailTemplate } from '@/templates/contact';
import { LangVars } from '@/constants/lang';

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const emailFrom = String(process.env.RESEND_EMAIL_FROM);
  const contactFormValidator = new ContactFormValidator();
  const domainValidator = new DomainValidator(DomainCheckTypes.MX);

  const { email = '', text = '', name = '', phone = '' } = await req.json();

  if (phone) {
    return NextResponse.json({ error: LangVars.Validation.General.mock, ok: false }, { status: 403 });
  }

  if (!contactFormValidator.validate({ name: name.trim(), email: email.trim(), text: text.trim() })) {
    return NextResponse.json({ error: contactFormValidator.getErrors(), ok: false }, { status: 400 });
  }

  if (!(await domainValidator.validate(email.trim()))) {
    return NextResponse.json({ error: domainValidator.getErrors(), ok: false }, { status: 400 });
  }

  try {
    const response = await resend.emails.send({
      from: `Contact <${emailFrom}>`,
      to: [emailFrom],
      subject: 'New message!',
      react: ContactEmailTemplate({
        name,
        email,
        text,
      }) as ReactElement,
    });

    if (response.error) {
      return NextResponse.json({ error: response.error, ok: false }, { status: 400 });
    }

    return NextResponse.json({ ...response, ok: true });
  } catch (error) {
    return NextResponse.json({ error, ok: false }, { status: 400 });
  }
}
