'use client';

import React, { ChangeEvent, useState, useCallback } from 'react';
import Alert from '@/components/Alert';
import CustomInput from '@/components/CustomInput';
import CustomTextarea from '@/components/CustomTextarea';
import CustomButton from '@/components/CustomButton';
import Header from '@/components/Header';
import Loader from '@/components/Loader';
import SvgIcon from '@/components/SvgIcon';
import { AlertTypes, IContactForm, IContactFormErrors, IField, SvgIcons } from '@/interfaces/app';
import ContactFormValidator from '@/validators/ContactFormValidator';
import EmailService from '@/services/EmailService';
import { LangVars } from '@/constants/lang';

interface IContactFormState {
  name: string;
  email: string;
  text: string;
  phone: string;
  isSending: boolean;
  isSuccess: boolean;
  errors: IContactFormErrors;
}

interface IContactFromResponseState {
  type: AlertTypes;
  title: string;
  value: string;
}

const contactFormValidator: ContactFormValidator = new ContactFormValidator();

const ContactFrom = () => {
  const initialState: IContactFormState = {
    name: '',
    email: '',
    text: '',
    phone: '',
    isSending: false,
    isSuccess: false,
    errors: {},
  };
  const [state, setState] = useState<IContactFormState>(initialState);
  const { name, email, text, phone, errors, isSending } = state;
  const [responseMessage, setResponseMessage] = useState<IContactFromResponseState | null>(null);
  const { type, title, value } = responseMessage || {};
  const { sectionTitle, itemTitle } = LangVars.Contact;
  const { emailSuccess, emailFailure } = LangVars.Alerts;
  const { contactForm: contactFormLabels } = LangVars.Labels;
  const { contactForm: contactFormPlaceholders } = LangVars.Placeholders;
  const { contactForm: contactFormButtons } = LangVars.Buttons;

  const handleOnChange = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void => {
      const contactFormFieldsValues: IField<unknown> = {};
      const { name, type } = e.target;

      if (type !== 'checkbox') {
        contactFormFieldsValues[name as keyof IContactForm] = (e.target as HTMLTextAreaElement | HTMLInputElement).value;
      }

      setState((prevState) => ({ ...prevState, ...contactFormFieldsValues }));

      if (responseMessage) {
        setResponseMessage(null);
      }
    },
    [responseMessage],
  );

  const handleOnBlur = useCallback(
    (field: keyof IContactForm) => (): void => {
      contactFormValidator.validate(state);
      const fieldError = contactFormValidator.getErrors()[field];

      setState((prevState) => ({
        ...prevState,
        [field]: state[field].trim(),
        phone: '',
        errors: {
          ...prevState.errors,
          [field]: fieldError,
        },
        isSending: false,
        isSuccess: false,
      }));
    },
    [state],
  );

  const handleOnSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setState((prevState) => ({
      ...prevState,
      isSending: true,
      errors: {},
    }));

    if (contactFormValidator.validate(state) && !state.phone) {
      const { ok, error = {} } = await EmailService.sendEmail(state);

      if (ok) {
        setState({
          ...initialState,
          isSuccess: true,
        });

        setResponseMessage({
          type: AlertTypes.SUCCESS,
          ...emailSuccess,
        });
      } else {
        setState((prevState) => ({
          ...prevState,
          phone: '',
          email: error?.domain ? '' : prevState.email,
          errors: {},
          isSending: false,
          isSuccess: false,
        }));

        setResponseMessage({
          type: AlertTypes.WARNING,
          ...emailFailure,
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
          <Header level={2} className='my-5 text-xl md:text-2xl'>
            {sectionTitle}
            <span className='text-teal-700'>
              <i className='text-blink'>_</i>
            </span>
          </Header>
          <p>{itemTitle}</p>
          {type && (
            <Alert type={type} className='mt-5'>
              <span className='font-bold'>{title} </span>
              <span className=''>{value}</span>
            </Alert>
          )}
        </div>
        <div className='-mx-3 my-5 mb-6 flex flex-wrap'>
          <div className='mb-3 w-full px-3 md:mb-0 md:w-1/2'>
            <CustomInput
              type='text'
              id='name'
              name='name'
              value={name}
              placeholder={contactFormPlaceholders.name}
              label={contactFormLabels.name}
              error={errors.name}
              disabled={isSending}
              onChange={handleOnChange}
              onBlur={handleOnBlur('name')}
            />
          </div>
          <div className='w-full px-3 md:w-1/2'>
            <CustomInput
              type='text'
              id='email'
              name='email'
              value={email}
              placeholder={contactFormPlaceholders.email}
              label={contactFormLabels.email}
              error={errors.email}
              disabled={isSending}
              onChange={handleOnChange}
              onBlur={handleOnBlur('email')}
            />
            <CustomInput
              type='text'
              id='phone'
              name='phone'
              className='hidden'
              value={phone}
              placeholder={contactFormPlaceholders.phone}
              label={contactFormLabels.phone}
              error={errors.phone}
              onChange={handleOnChange}
            />
          </div>
        </div>
        <div>
          <CustomTextarea
            id='text'
            name='text'
            value={text}
            placeholder={contactFormPlaceholders.text}
            label={contactFormLabels.text}
            error={errors.text}
            disabled={isSending}
            onChange={handleOnChange}
            onBlur={handleOnBlur('text')}
          />
        </div>
        <div className='my-5'>
          <CustomButton type='submit' text={contactFormButtons.actionButtonText} disabled={isSending}>
            {isSending ? <Loader width={5} height={5} /> : <SvgIcon icon={SvgIcons.plane} className='h-5 w-5' />}
          </CustomButton>
        </div>
      </form>
    </div>
  );

  return contactForm;
};

export default ContactFrom;
