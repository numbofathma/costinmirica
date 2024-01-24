import { IContactForm } from '@/interfaces/general';

class EmailService {
  public static sendEmail = async (data: IContactForm) => {
    try {
      const response = await fetch('/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      return response.ok;
    } catch (e) {
      return false;
    }
  };
}

export default EmailService;
