import React, { FC } from 'react';
import ContactFrom from '@/fragments/ContactForm';
import ProjectsList from '@/components/ProjectsList';
import SocialList from '@/components/SocialList';
import Profile from '@/components/Profile';
import ProfileDescription from '@/components/ProfileDescription';
import ProjectRepository from '@/repositories/ProjectRepository';
import SocialRepository from '@/repositories/SocialRepository';

const HomePage: FC = () => {
  const projects = new ProjectRepository().getAll();
  const socials = new SocialRepository().getAll();

  return (
    <div className='container m-auto grid max-w-screen-xl gap-5 border border-gray-300 bg-white p-5 font-light shadow-xl lg:my-2 lg:p-10'>
      <div className='grid-cols-12'>
        <Profile />
        <SocialList socials={socials} />
      </div>

      <div className='grid-cols-12'>
        <ProfileDescription />
      </div>

      <div className='mt-5 grid-cols-12'>
        <ProjectsList projects={projects} />
      </div>
      <div className='grid-cols-12'>
        <ContactFrom />
      </div>
    </div>
  );
};

export default HomePage;
