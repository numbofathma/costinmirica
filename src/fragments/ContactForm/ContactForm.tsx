'use client';

import React, { ChangeEvent, useCallback, useEffect, useState, useActionState, startTransition } from 'react';
import Alert from '@/components/Alert';
import CustomInput from '@/components/CustomInput';
import CustomTextarea from '@/components/CustomTextarea';
import FormButton from '@/components/FormButton';
import Header from '@/components/Header';
import SvgIcon from '@/components/SvgIcon';
import { IContactForm, IContactFormErrors, IContactFromResponse, IField } from '@/interfaces/app';
import ContactFormValidator from '@/validators/ContactFormValidator';
import { sendEmail } from '@/app/actions';
import { AlertTypes, SvgIcons } from '@/constants/enums';
import { LangVars } from '@/constants/lang';
import { RECAPTCHA_SITE_KEY } from '@/constants';

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
  const [formState, formAction] = useActionState(sendEmail, initialFormState);
  const [responseMessage, setResponseMessage] = useState<IContactFromResponseState | null>(null);
  const [recaptchaToken, setRecaptchaToken] = useState<string>('');
  const { type, title, value } = responseMessage || {};
  const { sectionTitle, itemTitle } = LangVars.Contact;
  const { emailSuccess, emailFailure } = LangVars.Alerts;
  const { recaptchaInitFailure, missingToken } = LangVars.Validation.Recaptcha;
  const { contactForm: contactFormLabels } = LangVars.Labels;
  const { contactForm: contactFormPlaceholders } = LangVars.Placeholders;
  const { contactForm: contactFormButtons } = LangVars.Buttons;

  // Load reCAPTCHA script
  useEffect(() => {
    if (!document.getElementById('recaptcha-v3')) {
      const script = document.createElement('script');
      script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`;
      script.async = true;
      script.defer = true;
      script.id = 'recaptcha-v3';
      document.body.appendChild(script);
    }
  }, []);

  const executeRecaptcha = useCallback(async () => {
    if (window.grecaptcha) {
      try {
        const token = await window.grecaptcha.execute(RECAPTCHA_SITE_KEY, { action: 'contact_form' });
        setRecaptchaToken(token);
        setState((prevState) => ({
          ...prevState,
          errors: { recaptcha: undefined },
        }));
      } catch (_) {
        setRecaptchaToken('');
        setState((prevState) => ({
          ...prevState,
          errors: { recaptcha: recaptchaInitFailure },
        }));
      }
    }
  }, [recaptchaInitFailure]);

  // Auto-execute reCAPTCHA and refresh every 2 minutes
  useEffect(() => {
    let interval: string | number | NodeJS.Timeout | undefined;

    const waitForGrecaptcha = () => {
      if (window.grecaptcha) {
        executeRecaptcha();
        interval = setInterval(executeRecaptcha, 2 * 60 * 1000);
      } else {
        setTimeout(waitForGrecaptcha, 500);
      }
    };

    waitForGrecaptcha();

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [executeRecaptcha]);

  useEffect(() => {
    const { ok, errors = {} } = formState;

    if (ok !== null) {
      executeRecaptcha();
      setState(
        ok
          ? initialState
          : (prevState) => ({
              ...prevState,
              phone: '',
              email: errors?.domain ? '' : prevState.email,
              errors: {
                ...errors,
                recaptcha: undefined,
              },
            }),
      );
      const failureMessage = { ...emailFailure, value: errors?.recaptcha || emailFailure.value };

      setResponseMessage({
        type: ok ? AlertTypes.SUCCESS : AlertTypes.WARNING,
        ...(ok ? emailSuccess : failureMessage),
      });
    }
  }, [formState, emailSuccess, emailFailure, executeRecaptcha]);

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

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);

    if (!recaptchaToken) {
      setState((prevState) => ({
        ...prevState,
        errors: { recaptcha: missingToken },
      }));
      return;
    }

    if (!contactFormValidator.validate(state) || state.phone) {
      setState((prevState) => ({
        ...prevState,
        phone: '',
        errors: {
          recaptcha: undefined,
          ...contactFormValidator.getErrors(),
        },
      }));
      return;
    }

    data.set('recaptchaToken', recaptchaToken);

    startTransition(() => {
      formAction(data);
    });
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <div>
          <Header level={2} className='mb-10 text-xl md:text-2xl'>
            {sectionTitle}
            <span className='text-teal-700'>
              <i className='text-blink'>_</i>
            </span>
          </Header>
          <p className='my-5'>{itemTitle}</p>
          {formState.ok !== null && type && (
            <Alert type={type} className='mt-5'>
              <span className='font-bold'>{title} </span>
              <span className=''>{value}</span>
            </Alert>
          )}
        </div>

        <div className='-mx-3 my-4 flex flex-wrap'>
          <div className='mb-3 w-full px-3'>
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
          <div className='w-full px-3'>
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
          <FormButton type='submit' text={contactFormButtons.actionButtonText}>
            <SvgIcon icon={SvgIcons.send} className='h-5 w-5' />
          </FormButton>
          {errors.recaptcha && <div className='bold my-2 text-xs text-red-700'>{errors.recaptcha}</div>}
        </div>
      </form>
    </div>
  );
};

export default ContactFrom;
