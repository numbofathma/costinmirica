export const LangVars = {
  Metadata: {
    name: 'Costin Mirică',
    title: 'Costin Mirică - Full Stack Developer',
    description: 'Just another software developer trying to build the future, one line of code at a time.',
    keywords: 'cv, resume, personal website, portfolio, full stack developer, indie game developer',
  },
  Labels: {
    contactForm: {
      name: 'Your Name',
      email: 'Your Email',
      phone: 'Your Phone',
      text: 'Your Message',
    },
  },
  Placeholders: {
    contactForm: {
      name: 'Name',
      email: 'Email',
      phone: 'Phone',
      text: 'Hello, Costin!',
    },
  },
  Buttons: {
    contactForm: {
      actionButtonText: 'SEND',
    },
  },
  Profile: {
    name: 'COSTIN MIRICĂ',
    position: 'Full Stack Developer',
    location: 'Bucharest, Romania',
    description:
      'I am ambitious and committed to creating awesome projects, passionate about coding web apps and mobile games, eager to learn new technologies, an avid gamer, and a specialty coffee aficionado.',
  },
  ProjectsList: {
    sectionTitle: 'Some of my personal projects',
    itemAlt: 'Check our awesome game',
    itemTitle: 'Check out some in-game screenshots of',
    itemActionText: 'IN-GAME SCREENSHOTS',
  },
  CookieBanner: {
    agreementText: 'We use cookies to collect anonymous analytics data to improve our site.\nDo you consent to tracking?',
    buttonTextAccept: 'Accept',
    buttonTextReject: 'Reject',
  },
  Contact: {
    sectionTitle: 'Getting in touch is easy',
    itemTitle: `Interested in working together or hire me? Drop me a line and let's start to create awesome stuff!`,
  },
  Validation: {
    General: {
      mock: 'Good luck, bro!',
      general: 'Error occured while sending your message!',
    },
    Recaptcha: {
      recaptchaInitFailure: 'reCAPTCHA could not be initialized. Please refresh the page or try again later.',
      verificationFailure: 'reCAPTCHA verification failed. If this is a mistake, please contact us directly at ###{contactEmail}###.',
      missingToken: 'reCAPTCHA verification failed. Please refresh the page or try again later.',
    },
    DomainValidator: {
      notFound: 'Domain could not be extracted',
      couldNotResolve: 'Unknown DNS resolve',
    },
    EmailValidator: {
      invalidEmail: 'Please type a valid email address.',
      exampleEmail: 'Please provide a different email address.',
      tempEmail: 'Please do not use a temp mail address. Thanks!',
    },
    NameValidator: {
      shortName: "Ooops! Is this really your name? It's a bit short.",
      longName: "Ooops! Is this really your name? It's a bit long.",
      invalidName: 'Ooops! Is this really your name?',
    },
  },
  Constraints: {
    TextValidator: {
      Default: {
        min: 'The input should be at least ###{min}### characters.',
        max: 'The input should have a maximum of ###{max}### characters.',
      },
    },
    ContactFormValidator: {
      TextValidator: {
        min: "Don't be shy, say more than just 'Hello!'.",
        max: 'Wow! Your message is a bit long. Maybe we should schedule a meeting.',
      },
    },
  },
  Alerts: {
    emailSuccess: {
      title: 'Email sent! ',
      value: 'I will get back to you shortly!',
    },
    emailFailure: {
      title: 'Oops...',
      value: "Couldn't send your message! Please try again later or try using another email address!",
    },
  },
};
