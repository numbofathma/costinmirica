import { IContactFormErrors, IContactForm, IValidator } from '@/interfaces/general';

class ContactFormValidator implements IValidator {
  private errors: IContactFormErrors;

  constructor() {
    this.errors = {};
  }

  public getErrors(): IContactFormErrors {
    return this.errors;
  }

  public validate(data: IContactForm): boolean {
    this.errors = {};

    if (data.fullName.length < 3) {
      this.errors.fullName = "Ooops is this really your name? It's a bit short.";
    }

    if (data.fullName.length > 250) {
      this.errors.fullName = "Ooops is this really your name? It's a bit long.";
    }

    if (data.email.length < 7 || data.email.length > 250 || !this.validateEmail(data.email)) {
      this.errors.email = 'Please type a valid email address.';
    }

    if (data.message.length < 10) {
      this.errors.message = "Don't be shy, say more than just 'Hello!'.";
    } else if (data.message.length > 10000) {
      this.errors.message = 'Wow! Your message si a bit too long. Maybe we should schedule a meeting.';
    }

    return Object.keys(this.errors).length === 0;
  }

  private validateEmail = (email: string): boolean => {
    const re1 = '^(([^<>()[\\]\\.,;:\\s@\\"]+(\\.[^<>()[\\]\\.,;:\\s@\\"]+)*)';
    const re2 = '|(\\".+\\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$';
    const re = new RegExp(re1 + re2);

    return re.test(email);
  };
}

export default ContactFormValidator;
