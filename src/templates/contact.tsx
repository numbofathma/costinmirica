import React, { FC } from 'react';

interface IContactEmaiTemplatelProps {
  name: string;
  email: string;
  text: string;
}

export const ContactEmailTemplate: FC<Readonly<IContactEmaiTemplatelProps>> = ({ name, email, text }) => (
  <div>
    <strong>You have new contact message from your personal site!</strong>
    <br />
    <br />
    <div>
      <strong>Name:</strong>
      <br />
      {name}
    </div>
    <br />

    <div>
      <strong>Email:</strong>
      <br />
      {email}
    </div>
    <br />
    <div>
      <strong>Message:</strong>
      <br />
      <pre>{text}</pre>
    </div>
    <br />
  </div>
);

export default ContactEmailTemplate;
