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
}

export interface IContactForm {
  fullName: string;
  email: string;
  message: string;
}

export interface IContactFormErrors {
  fullName?: string;
  email?: string;
  message?: string;
  phone?: string;
}

export interface IValidator {
  validate: (data: any) => boolean;
  getErrors: () => {};
}
