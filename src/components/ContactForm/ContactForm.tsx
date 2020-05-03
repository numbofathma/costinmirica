import * as React from 'react';
import { MoonLoader } from 'react-spinners';
import Swal from 'sweetalert2';
import { Column, Row, Form } from '../Skeleton';
import { LoaderStyled } from './style';
import FormInput from '../FormInput';
import FormTextarea from '../FormTextarea';
import FormButton from '../FormButton';
import { ContactFormErrors } from '../../interfaces/interfaces';
import ContactFormValidator from '../../services/ContactFormValidator';
import EmailService from '../../services/EmailService';

interface ContactFormState {
  name: string;
  email: string;
  message: string;
  isSending: boolean;
  isSuccess: boolean;
  errors: ContactFormErrors;
}

class ContactFrom extends React.Component<unknown, ContactFormState> {
  private contactFormValidator: ContactFormValidator;

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      message: '',
      isSending: false,
      isSuccess: false,
      errors: {},
    };

    this.contactFormValidator = new ContactFormValidator();
  }

  private handleChange = (e) => {
    const contactFormFieldsValues = {};
    contactFormFieldsValues[e.target.name] = e.target.value;

    this.setState(contactFormFieldsValues);
  };

  private sendEmail = async (e) => {
    e.preventDefault();

    this.setState({
      isSending: true,
      errors: {},
    });

    if (this.contactFormValidator.validate(this.state)) {
      if (await EmailService.sendEmail(this.state)) {
        this.setState({
          name: '',
          email: '',
          message: '',
          errors: {},
          isSending: false,
          isSuccess: true,
        });

        await Swal({
          type: 'success',
          title: 'Email sent',
          text: 'We will get back to you shortly!',
        });
      } else {
        this.setState({
          errors: {},
          isSending: false,
          isSuccess: false,
        });

        await Swal({
          type: 'error',
          title: 'Oops...',
          text: 'Something went wrong! Please try again later!',
        });
      }
    } else {
      this.setState({
        errors: this.contactFormValidator.getErrors(),
        isSending: false,
        isSuccess: false,
      });
    }
  };

  public render() {
    const {
      name, email, message, errors,
    } = this.state;

    const contactForm = (
      <Form onSubmit={this.sendEmail}>
        <Row>
          <h1>Getting in touch is easy!</h1>
          <p>
            Interested in working together or hire me? Drop me a line and let's
            start to create awesome stuff!
          </p>
        </Row>
        <Row>
          <Column cols={6}>
            <FormInput
              type="text"
              id="name"
              name="name"
              value={name}
              placeholder="Name"
              label="Your Name"
              error={errors.name}
              onChange={this.handleChange}
            />
          </Column>
          <Column cols={6}>
            <FormInput
              type="email"
              id="email"
              name="email"
              value={email}
              placeholder="Email"
              label="Your Email"
              error={errors.email}
              onChange={this.handleChange}
            />
          </Column>
        </Row>
        <Row>
          <Column cols={12}>
            <FormTextarea
              id="message"
              name="message"
              value={message}
              placeholder="Hello, Costin!"
              error={errors.message}
              onChange={this.handleChange}
            />
          </Column>
        </Row>
        <Row>
          <Column cols={12}>
            <FormButton text="Send" onClick={this.sendEmail} />
          </Column>
        </Row>
      </Form>
    );

    if (this.state.isSending) {
      return (
        <Row>
          <Column cols={12}>
            <LoaderStyled>
              <MoonLoader
                sizeUnit="px"
                size={100}
                color="#FFFFFF"
                loading={true}
              />
            </LoaderStyled>
          </Column>
        </Row>
      );
    }

    return contactForm;
  }
}

export default ContactFrom;
