export interface IProjectItem {
  title: string;
  url: string;
  icon: string;
  text: string;
}

export interface ISocialItem {
  id: string;
  title: string;
  icon: string;
  url: string;
}

export enum AlertTypes {
  INFO = 'info',
  DANGER = 'danger',
  SUCCESS = 'success',
  WARNING = 'warning',
  DEFAULT = 'default',
}

export enum SvgIcons {
  plane = 'plane',
  follow = 'follow',
  alert = 'alert',
}

export interface IEmail {
  name: string;
  email: string;
  text: string;
}

export interface IContactForm extends IEmail {
  phone?: string;
}

export interface IContactFormErrors {
  name?: string;
  email?: string;
  text?: string;
  phone?: string;
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
