import { ReactElement } from 'react';
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { ContactEmailTemplate } from '@/templates/contact';

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { email, message, fullName, phone } = await req.json();

  if (phone) {
    return NextResponse.json({ error: 'Good luck, bro!', ok: false }, { status: 403 });
  }

  try {
    const response = await resend.emails.send({
      from: 'Contact <contact@costinmirica.com>',
      to: ['contact@costinmirica.com'],
      subject: 'New message!',
      react: ContactEmailTemplate({
        name: fullName,
        email,
        message,
      }) as ReactElement,
    });

    if (response.error) {
      return NextResponse.json({ error: response.error, ok: false }), { status: 400 };
    }

    return NextResponse.json({ ...response });
  } catch (error) {
    return NextResponse.json({ error, ok: false }), { status: 400 };
  }
}
