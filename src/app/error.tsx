'use client';

import { useEffect } from 'react';

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  // Pressing Enter also calls reset()
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        reset();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [reset]);

  return (
    <div className='flex min-h-screen items-center justify-center p-6 font-mono text-gray-100'>
      <div className='w-full max-w-2xl overflow-hidden rounded-lg border border-gray-700 bg-[#1a1a1a] shadow-lg'>
        <div className='flex items-center gap-2 bg-[#2d2d2d] px-3 py-2'>
          <span className='h-3 w-3 rounded-full bg-red-500'></span>
          <span className='h-3 w-3 rounded-full bg-yellow-500'></span>
          <span className='h-3 w-3 rounded-full bg-green-500'></span>
          <span className='ml-3 text-sm text-gray-400'>bash — oh no, it broke :(</span>
        </div>
        <div className='p-6'>
          <p className='text-green-400'>
            guest@this-app:~$
            <span className='ml-2 text-white'>npm run this-app</span>
          </p>

          <p className='mt-4 text-red-500'>➜ Error: Something went wrong! Press enter to try again.</p>

          <p className='mt-6 text-green-400'>
            guest@this-app:~$ <span className='console-cursor' />
          </p>
        </div>
      </div>
    </div>
  );
}
