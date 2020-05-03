import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface ProjectItem {
  title: string;
  url: string;
  icon: string;
  text: string;
}

export interface SocialItem {
  id: string;
  title: string;
  icon: IconDefinition;
  url: string;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export interface ContactFormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export interface Validator {
  validate: (data: unknown) => boolean;
  getErrors: () => ContactFormErrors;
}
