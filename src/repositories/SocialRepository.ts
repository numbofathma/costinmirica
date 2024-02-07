import { ISocialItem } from '@/interfaces/app';
import { IRepository } from '@/interfaces/api';
import { socials } from '@/constants/mock';

class SocialRepository implements IRepository<ISocialItem> {
  public getAll(): ISocialItem[] {
    return socials;
  }
}

export default SocialRepository;
