'use client';

import React, { ChangeEvent, useState, useCallback } from 'react';
import Alert from '@/components/Alert';
import CustomInput from '@/components/CustomInput';
import CustomTextarea from '@/components/CustomTextarea';
import CustomButton from '@/components/CustomButton';
import Header from '@/components/Header';
import Loader from '@/components/Loader';
import { AlertTypes, IContactFormErrors } from '@/interfaces/general';
import ContactFormValidator from '@/services/ContactFormValidator';
import EmailService from '@/services/EmailService';

interface IContactFormState {
  fullName: string;
  email: string;
  message: string;
  phone: string;
  isSending: boolean;
  isSuccess: boolean;
  errors: IContactFormErrors;
}
interface IContactFromResponseState {
  type: AlertTypes;
  title: string;
  text: string;
}

const contactFormValidator: ContactFormValidator = new ContactFormValidator();

const ContactFrom = () => {
  const initialState: IContactFormState = {
    fullName: '',
    email: '',
    message: '',
    phone: '',
    isSending: false,
    isSuccess: false,
    errors: {},
  };
  const [state, setState] = useState<IContactFormState>(initialState);
  const { fullName, email, message, phone, errors, isSending } = state;
  const [responseMessage, setResponseMessage] = useState<IContactFromResponseState | null>(null);
  const { type, title, text } = responseMessage || {};

  const handleOnChange = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void => {
      const contactFormFieldsValues: any = {};
      const { name, type, value } = e.target;

      if (type !== 'checkbox') {
        contactFormFieldsValues[name as keyof typeof contactFormFieldsValues] = (e.target as HTMLTextAreaElement | HTMLInputElement).value;
      }

      setState((prevState) => ({ ...prevState, ...contactFormFieldsValues }));

      if (responseMessage) {
        setResponseMessage(null);
      }
    },
    [responseMessage],
  );

  const handleOnSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setState((prevState) => ({
      ...prevState,
      isSending: true,
      errors: {},
    }));

    if (contactFormValidator.validate(state) && !state.phone) {
      if (await EmailService.sendEmail(state)) {
        setState({
          fullName: '',
          email: '',
          message: '',
          phone: '',
          errors: {},
          isSending: false,
          isSuccess: true,
        });

        setResponseMessage({
          type: AlertTypes.SUCCESS,
          title: 'Email sent',
          text: 'We will get back to you shortly!',
        });
      } else {
        setState((prevState) => ({
          ...prevState,
          phone: '',
          errors: {},
          isSending: false,
          isSuccess: false,
        }));

        setResponseMessage({
          type: AlertTypes.WARNING,
          title: 'Oops...',
          text: 'Something went wrong! Please try again later!',
        });
      }
    } else {
      setState((prevState) => ({
        ...prevState,
        phone: '',
        errors: contactFormValidator.getErrors(),
        isSending: false,
        isSuccess: false,
      }));
    }
  };

  const contactForm = (
    <div className='my-5'>
      <form autoComplete='off' onSubmit={handleOnSubmit}>
        <div>
          <Header level={2} className='my-5 text-base sm:text-lg md:text-2xl'>
            {`Getting in touch is easy!`}{' '}
            <span className='text-teal-700'>
              <i className='text-blink'>_</i>
            </span>
          </Header>
          <p>{`Interested in working together or hire me? Drop me a line and let's start to create awesome stuff!`}</p>
          {type && (
            <Alert type={type} className='mt-5'>
              <span className='font-bold'>{title} </span>
              <span className=''>{text}</span>
            </Alert>
          )}
        </div>
        <div className='-mx-3 my-5 mb-6 flex flex-wrap'>
          <div className='mb-6 w-full px-3 md:mb-0 md:w-1/2'>
            <CustomInput
              type='text'
              id='fullName'
              name='fullName'
              value={fullName}
              placeholder='Name'
              label='Your Name'
              error={errors.fullName}
              disabled={isSending}
              onChange={handleOnChange}
            />
          </div>
          <div className='w-full px-3 md:w-1/2'>
            <CustomInput
              type='text'
              id='email'
              name='email'
              value={email}
              placeholder='Email'
              label='Your Email'
              error={errors.email}
              disabled={isSending}
              onChange={handleOnChange}
            />
            <CustomInput
              type='text'
              id='phone'
              name='phone'
              className='hidden'
              value={phone}
              placeholder='Phone'
              label='Your Phone'
              error={errors.phone}
              onChange={handleOnChange}
            />
          </div>
        </div>
        <div>
          <CustomTextarea
            id='message'
            name='message'
            value={message}
            placeholder='Hello, Costin!'
            label='Your Mesage'
            error={errors.message}
            disabled={isSending}
            onChange={handleOnChange}
          />
        </div>
        <div className='my-5'>
          <CustomButton type='submit' text='SEND' disabled={isSending}>
            {isSending ? (
              <Loader width={5} height={5} />
            ) : (
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='h-5 w-5'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5'
                />
              </svg>
            )}
          </CustomButton>
        </div>
      </form>
    </div>
  );

  return contactForm;
};

export default ContactFrom;
