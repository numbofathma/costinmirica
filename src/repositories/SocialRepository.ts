import { ISocialItem } from '@/interfaces/general';
import { IRepository } from '@/interfaces/api';
import { socials } from '@/constants';

class SocialRepository implements IRepository<ISocialItem> {
  public getAll(): ISocialItem[] {
    return socials;
  }
}

export default SocialRepository;
