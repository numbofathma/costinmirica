import {IconDefinition} from "@fortawesome/fontawesome-svg-core";

export interface ProjectItemInterface {
    title: string;
    url: string;
    icon: string;
    text: string;
}

export interface SocialItemInterface {
    id: string;
    title: string;
    icon: IconDefinition
    url: string
}

export interface ContactFormInterface {
    name: string;
    email: string;
    message: string;
}

export interface ContactFormErrorsInterface {
    name?: string;
    email?: string;
    message?: string;
}

export interface ValidatorInterface {
    validate: (data: any) => boolean;
    getErrors: () => ContactFormErrorsInterface;
}