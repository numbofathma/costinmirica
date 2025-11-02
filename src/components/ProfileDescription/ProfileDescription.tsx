import { LangVars } from '@/constants/lang';

const ProfileDescription = () => (
  <div>
    <p className='m-auto text-center md:w-3/4 lg:w-2/3'>
      ”<span className='italic'>{LangVars.Profile.description}</span>”
    </p>
  </div>
);

export default ProfileDescription;
