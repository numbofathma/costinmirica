import * as emailjs from 'emailjs-com';
import {ContactFormInterface} from "../interfaces/interfaces";

class EmailService {
    public static sendEmail = async (data: ContactFormInterface) => {
        return await emailjs.send("costinmirica", "template_XxCJnsh1", {
            name: data.name,
            email: data.email,
            message: data.message
        }, 'user_YyZP08WWVTxIiq0gnfkAm').then(
            () => true,
            () => false
        );
    };
}

export default EmailService;