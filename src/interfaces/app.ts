export interface FetchState<T> {
  data: T | undefined;
  error: unknown;
  isLoading: boolean;
}

export interface IProject {
  title: string;
  url: string;
  icon: string;
  text: string;
}

export interface ISocial {
  id: string;
  title: string;
  icon: string;
  url: string;
}

export interface IEmail {
  name: string;
  email: string;
  text: string;
  phone?: string;
}

export interface IContactForm extends IEmail {
  phone?: string;
}

export interface IContactFromResponse {
  ok: boolean | null;
  data?: string | null;
  errors?: IContactFormErrors;
}

export interface IContactFormErrors {
  [field: string]: string | undefined;
}

export interface IValidator<I, O> {
  validate: (field: I) => Promise<boolean> | boolean;
  getErrors: () => O;
}

export interface IField<T> {
  [key: string]: T;
}

export enum DomainCheckTypes {
  MX = 'mx',
  LOOKUP = 'lookup',
  NS = 'ns',
}

interface IRange {
  min: unknown;
  max: unknown;
}

export interface INumericRange extends IRange {
  min: number;
  max: number;
}

export interface IStringRange extends IRange {
  min: string;
  max: string;
}
