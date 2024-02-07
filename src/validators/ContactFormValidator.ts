import NameValidator from './NameValidator';
import EmailValidator from './EmailValidator';
import TextValidator from './TextValidator';
import { LangVars } from '@/constants/lang';
import { IContactFormErrors, IContactForm, IValidator } from '@/interfaces/app';

class ContactFormValidator implements IValidator<IContactForm, IContactFormErrors> {
  private errors: IContactFormErrors;
  public nameValidator: NameValidator;
  public emailValidator: EmailValidator;
  public textValidator: TextValidator;

  constructor() {
    const { min, max } = LangVars.Constraints.ContactFormValidator.TextValidator;
    this.errors = {};
    this.nameValidator = new NameValidator();
    this.emailValidator = new EmailValidator();
    this.textValidator = new TextValidator(
      { min: 10, max: 10000 },
      {
        min,
        max,
      },
    );
  }

  public getErrors() {
    return this.errors;
  }

  public validate(data: IContactForm): boolean {
    const { name, email, text } = data;
    this.errors = {};

    if (!this.nameValidator.validate(name)) {
      this.errors = { ...this.errors, ...this.nameValidator.getErrors() };
    }

    if (!this.emailValidator.validate(email)) {
      this.errors = { ...this.errors, ...this.emailValidator.getErrors() };
    }

    if (!this.textValidator.validate(text)) {
      this.errors = { ...this.errors, ...this.textValidator.getErrors() };
    }

    return Object.keys(this.errors).length === 0;
  }
}

export default ContactFormValidator;
