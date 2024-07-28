import { headers } from 'next/headers';
import { ISocial } from '@/interfaces/app';
import { IProject } from '@/interfaces/app';

export const getProjects = async () => {
  // Do not move headers outside request context
  // https://nextjs.org/docs/messages/next-dynamic-api-wrong-context
  const appUrl = headers().get('x-current-path');
  const response = await fetch(`${appUrl}/api/projects`);
  const { data = [], ok } = await response.json();

  return {
    ok,
    projects: data as IProject[],
  };
};

export const getSocials = async () => {
  // Do not move headers outside request context
  // https://nextjs.org/docs/messages/next-dynamic-api-wrong-context
  const appUrl = headers().get('x-current-path');
  const response = await fetch(`${appUrl}/api/socials`);
  const { data = [], ok } = await response.json();

  return {
    ok,
    socials: data as ISocial[],
  };
};
