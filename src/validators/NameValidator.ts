import { IValidator, IField } from '@/interfaces/app';
import { LangVars } from '@/constants/lang';

class NameValidator implements IValidator<string, IField<string>> {
  private errors: IField<string>;

  constructor() {
    this.errors = {};
  }

  public getErrors() {
    return this.errors;
  }

  public validate(name: string): boolean {
    const { shortName, longName, invalidName } = LangVars.Validation.NameValidator;
    this.errors = {};

    if (name.length < 3) {
      this.errors = { name: shortName };
    } else if (name.length > 250) {
      this.errors = { name: longName };
    } else if (!this.regexpName(name)) {
      this.errors = { name: invalidName };
    }

    return Object.keys(this.errors).length === 0;
  }

  private regexpName = (fullName: string): boolean => {
    const re = new RegExp(
      /^(?!.*\d)(?!.*[!@#$%^&*()_+=[\]{};:"\\|,.<>/?~`])(?!.*\s{2,})[a-zA-ZÀ-ÖØ-öø-ÿ\u0100-\u017F\u1E00-\u1EFF\u0400-\u04FF\u0600-\u06FF\u0750-\u077F\u4E00-\u9FFF\uAC00-\uD7AF\u3040-\u30FF\u1100-\u11FF\u3130-\u318F\uA960-\uA97F\u0E00-\u0E7F\s'-]+$/,
      'i',
    );

    return re.test(fullName);
  };
}

export default NameValidator;
