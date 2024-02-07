import isEmail from 'validator/es/lib/isEmail';
import { IValidator, IField } from '@/interfaces/app';
import { temporaryEmails } from '@/constants/deny';
import { LangVars } from '@/constants/lang';

class EmailValidator implements IValidator<string, IField<string>> {
  private errors: IField<string>;
  private validators: IValidator<string, IField<string>>[];

  constructor(validators?: IValidator<string, IField<string>>[]) {
    this.validators = validators || [];
    this.errors = {};
  }

  public getErrors() {
    return this.errors;
  }

  public validate(email: string): boolean {
    const { invalidEmail, exampleEmail, tempEmail } = LangVars.Validation.EmailValidator;
    const domain = this.extractDomain(email);
    this.errors = {};

    if (!isEmail(email)) {
      this.errors = { email: invalidEmail };
    } else if (domain.includes('example')) {
      this.errors = { email: exampleEmail };
    } else if (temporaryEmails.indexOf(domain) >= 0) {
      this.errors = { email: tempEmail };
    } else if (this.validators.length > 0) {
      const validatorErrorsPromises = this.validators.map(async (validator) => {
        await validator.validate(email);

        return validator.getErrors();
      });

      Promise.allSettled(validatorErrorsPromises).then((results) => results.forEach((result) => ({ ...this.errors, ...result })));
    }

    return Object.keys(this.errors).length === 0;
  }

  private extractDomain = (email: string): string => {
    return email.split('@')[1];
  };
}

export default EmailValidator;
