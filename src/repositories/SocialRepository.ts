import {SocialItemInterface} from "../interfaces/interfaces";
import * as Brand from "@fortawesome/free-brands-svg-icons";
import * as Icon from "@fortawesome/free-regular-svg-icons";
import resume from "../assets/cv/resume.pdf";

const socials: SocialItemInterface[] = [
    {
        id: 'github',
        title: 'Github',
        icon: Brand.faGithub,
        url: 'https://github.com/numbofathma'
    },
    {
        id: 'linkedin',
        title: 'Linkedin',
        icon: Brand.faLinkedin,
        url: 'http://linkedin.com/in/costinmirica'
    },
    {
        id: 'facebook',
        title: 'Facebook',
        icon: Brand.faFacebook,
        url: 'https://www.facebook.com/constantin.mirica'
    },
    {
        id: 'twitter',
        title: 'Twitter',
        icon: Brand.faTwitter,
        url: 'https://twitter.com/costinmirica'
    },
    {
        id: 'email',
        title: 'Email',
        icon: Icon.faEnvelope,
        url: 'mailto:hi@costinmirica.com'
    },
    {
        id: 'resume',
        title: 'Resume',
        icon: Icon.faIdCard,
        url: resume
    }
];

class SocialRepository implements RepositoryInterface<SocialItemInterface> {
    public getAll(): SocialItemInterface[] {
        return socials;
    }
}

export default SocialRepository;