import {ContactFormErrors, ContactForm, Validator} from '../interfaces/interfaces';

class ContactFormValidator implements Validator {
    private errors: ContactFormErrors;

    constructor() {
        this.errors = {};
    }

    public getErrors(): ContactFormErrors {
        return this.errors;
    }

    public validate(data: ContactForm): boolean {
        this.errors = {};

        if (data.name.length < 3) {
            this.errors.name = 'Please type your name.';
        }

        if (data.email.length < 7 || !this.validateEmail(data.email)) {
            this.errors.email = 'Please type your email address.';
        }

        if (data.message.length < 10) {
            this.errors.message = 'Please type your message.';
        }

        return Object.keys(this.errors).length === 0;
    }

    private validateEmail = (email: string): boolean => {
        const re1 = '^(([^<>()[\\]\\\.,;:\\s@\\"]+(\\.[^<>()[\\]\\\.,;:\\s@\\"]+)*)';
        const re2 = '|(\\".+\\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$';
        const re = new RegExp(re1 + re2);

        return re.test(email);
    }
}

export default ContactFormValidator;
