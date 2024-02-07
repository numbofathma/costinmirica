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
    const re = new RegExp(/^[\p{L}'][ \p{L}'-]*[\p{L}]$/, 'iu');

    return re.test(fullName);
  };
}

export default NameValidator;
