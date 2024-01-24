import React, { FC } from 'react';

interface IContactEmaiTemplatelProps {
  name: string;
  email: string;
  message: string;
}

export const ContactEmailTemplate: FC<Readonly<IContactEmaiTemplatelProps>> = ({ name, email, message }) => (
  <div>
    <p>You have new contact message from your personal site!</p>
    <p>Name: {name}</p>
    <p>Email {email}</p>
    <div>Message:</div>
    <p>{message}</p>
  </div>
);

export default ContactEmailTemplate;
