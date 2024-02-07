import React, { FC } from 'react';

interface IContactEmaiTemplatelProps {
  name: string;
  email: string;
  text: string;
}

export const ContactEmailTemplate: FC<Readonly<IContactEmaiTemplatelProps>> = ({ name, email, text }) => (
  <div>
    <p>You have new contact message from your personal site!</p>
    <p>Name: {name}</p>
    <p>Email {email}</p>
    <div>Message:</div>
    <p>{text}</p>
  </div>
);

export default ContactEmailTemplate;
