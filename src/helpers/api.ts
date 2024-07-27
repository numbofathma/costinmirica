import { headers } from 'next/headers';
import { ISocial } from '@/interfaces/app';
import { IProject } from '@/interfaces/app';

const appUrl = headers().get('x-current-path');

export const getProjects = async () => {
  const response = await fetch(`${appUrl}/api/projects`);
  const { data = [], ok } = await response.json();

  return {
    ok,
    projects: data as IProject[],
  };
};

export const getSocials = async () => {
  const response = await fetch(`${appUrl}/api/socials`);
  const { data = [], ok } = await response.json();

  return {
    ok,
    socials: data as ISocial[],
  };
};
