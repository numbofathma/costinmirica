import { LangVars } from '@/constants/lang';
import { IValidator, IField, INumericRange, IStringRange } from '@/interfaces/app';

class TextValidator implements IValidator<string, IField<string>> {
  private errors: IField<string>;
  private range: INumericRange = {
    min: 0,
    max: Infinity,
  };
  private messages: IStringRange;

  constructor(range: INumericRange, messages?: IStringRange) {
    const { min, max } = LangVars.Constraints.TextValidator.Default;
    const defaultMessage = {
      min,
      max,
    };
    this.errors = {};
    this.range = range ? range : this.range;
    this.messages = messages ? messages : defaultMessage;

    Object.keys(this.messages).forEach((key: string) => {
      this.messages[key as keyof IStringRange].replace(`###{${key}}###`, this.range[key as keyof INumericRange].toString());
    });
  }

  public getErrors() {
    return this.errors;
  }

  public validate(text: string, range = this.range, message = this.messages): boolean {
    this.errors = {};

    if (text.length < range.min) {
      this.errors = { text: message.min };
    } else if (text.length > range.max) {
      this.errors = { text: message.max };
    }

    return Object.keys(this.errors).length === 0;
  }
}

export default TextValidator;
