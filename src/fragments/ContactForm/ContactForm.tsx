'use client';

import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { useFormState } from 'react-dom';
import Alert from '@/components/Alert';
import CustomInput from '@/components/CustomInput';
import CustomTextarea from '@/components/CustomTextarea';
import CustomButton from '@/components/CustomButton';
import Header from '@/components/Header';
import SvgIcon from '@/components/SvgIcon';
import { IContactForm, IContactFormErrors, IContactFromResponse, IField } from '@/interfaces/app';
import ContactFormValidator from '@/validators/ContactFormValidator';
import { sendEmail } from '@/app/actions';
import { AlertTypes, SvgIcons } from '@/constants/enums';
import { LangVars } from '@/constants/lang';

interface IContactFormState {
  name: string;
  email: string;
  text: string;
  phone: string;
  errors: IContactFormErrors;
}

interface IContactFromResponseState {
  type: AlertTypes;
  title: string;
  value: string;
}

const contactFormValidator: ContactFormValidator = new ContactFormValidator();

const initialState: IContactFormState = {
  name: '',
  email: '',
  text: '',
  phone: '',
  errors: {},
};

const initialFormState: IContactFromResponse = {
  ok: null,
  data: null,
  errors: {},
};

const ContactFrom = () => {
  const [state, setState] = useState<IContactFormState>(initialState);
  const { name, email, text, phone, errors } = state;
  const [formState, formAction] = useFormState(sendEmail, initialFormState);
  const [responseMessage, setResponseMessage] = useState<IContactFromResponseState | null>(null);
  const { type, title, value } = responseMessage || {};
  const { sectionTitle, itemTitle } = LangVars.Contact;
  const { emailSuccess, emailFailure } = LangVars.Alerts;
  const { contactForm: contactFormLabels } = LangVars.Labels;
  const { contactForm: contactFormPlaceholders } = LangVars.Placeholders;
  const { contactForm: contactFormButtons } = LangVars.Buttons;

  useEffect(() => {
    const { ok, errors = {} } = formState;

    if (ok !== null) {
      setState(
        ok
          ? initialState
          : (prevState) => ({
              ...prevState,
              phone: '',
              email: errors?.domain ? '' : prevState.email,
              isPending: false,
              errors,
            }),
      );
      setResponseMessage({
        type: ok ? AlertTypes.SUCCESS : AlertTypes.WARNING,
        ...(ok ? emailSuccess : emailFailure),
      });
    }
  }, [formState, emailSuccess, emailFailure]);

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
        [field]: prevState[field].trim(),
        phone: '',
        errors: {
          ...prevState.errors,
          [field]: state[field].trim() ? fieldError : undefined,
        },
      }));
    },
    [state],
  );

  const handleFormSubmit = useCallback(
    (data: FormData) => {
      setState((prevState) => ({
        ...prevState,
        isPending: true,
      }));

      if (contactFormValidator.validate(state) && !state.phone) {
        formAction(data);
      } else {
        setState((prevState) => ({
          ...prevState,
          phone: '',
          isPending: false,
          errors: contactFormValidator.getErrors(),
        }));
      }
    },
    [formAction, state],
  );

  return (
    <div className='my-5'>
      <form action={handleFormSubmit}>
        <div>
          <Header level={2} className='my-5 text-xl md:text-2xl'>
            {sectionTitle}
            <span className='text-teal-700'>
              <i className='text-blink'>_</i>
            </span>
          </Header>
          <p>{itemTitle}</p>
          {formState.ok !== null && type && (
            <Alert type={type} className='mt-5'>
              <span className='font-bold'>{title} </span>
              <span className=''>{value}</span>
            </Alert>
          )}
        </div>
        <div className='-mx-3 my-4 flex flex-wrap'>
          <div className='mb-3 w-full px-3 md:mb-0 md:w-1/2'>
            <CustomInput
              type='text'
              id='name'
              name='name'
              value={name}
              placeholder={contactFormPlaceholders.name}
              label={contactFormLabels.name}
              error={errors.name}
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
            onChange={handleOnChange}
            onBlur={handleOnBlur('text')}
          />
        </div>
        <div className='my-4'>
          <CustomButton type='submit' text={contactFormButtons.actionButtonText}>
            <SvgIcon icon={SvgIcons.plane} className='h-5 w-5' />
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default ContactFrom;
