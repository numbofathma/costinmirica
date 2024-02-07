import { IEmail } from '@/interfaces/app';

class EmailService {
  static sendEmail = async (data: IEmail) => {
    try {
      const response = await fetch('/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      return await response.json();
    } catch (error) {
      return { ok: false, error };
    }
  };
}

export default EmailService;
