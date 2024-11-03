import React from 'react';
import ContactFrom from '@/fragments/ContactForm';
import ProjectsList from '@/components/ProjectsList';
import SocialList from '@/components/SocialList';
import Profile from '@/components/Profile';
import ProfileDescription from '@/components/ProfileDescription';

const Page = () => (
  <div className='max-w-screen-xxl container m-auto grid gap-5 border border-gray-300 bg-white p-5 font-light shadow-xl sm:my-5 lg:p-10 xl:my-10'>
    <div className='grid-cols-12'>
      <Profile />
      <SocialList />
    </div>

    <div className='grid-cols-12'>
      <ProfileDescription />
    </div>

    <div className='mt-5 grid-cols-12'>
      <ProjectsList />
    </div>
    <div className='xl:w-2/3'>
      <ContactFrom />
    </div>
  </div>
);
export default Page;
