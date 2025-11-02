import ContactForm from '@/fragments/ContactForm';
import ProjectsList from '@/components/ProjectsList';
import SocialList from '@/components/SocialList';
import Profile from '@/components/Profile';
import ProfileDescription from '@/components/ProfileDescription';

const Page = () => (
  <main
    role='main'
    className='max-w-screen-xxl container m-auto grid gap-5 rounded border border-gray-300 bg-white p-5 font-light shadow-xl sm:my-5 lg:p-10 xl:my-10'
  >
    <div className='grid-cols-12'>
      <Profile />
      <SocialList />
    </div>

    <div className='grid-cols-12 pb-10 pt-5'>
      <ProfileDescription />
    </div>

    <div className='grid grid-cols-1 gap-10 lg:grid-cols-12'>
      <div className='lg:col-span-7'>
        <ProjectsList />
      </div>

      <div className='lg:col-span-5'>
        <div className='sticky top-20'>
          <ContactForm />
        </div>
      </div>
    </div>
  </main>
);

export default Page;
