import { headers } from 'next/headers';
import { ISocial } from '@/interfaces/app';
import { IProject } from '@/interfaces/app';

export const getProjects = async () => {
  const appUrl = (await headers()).get('x-current-path');

  try {
    const response = await fetch(`${appUrl}/api/projects`);
    const { data = [], ok } = await response.json();

    return {
      ok,
      projects: data as IProject[],
    };
  } catch (_) {
    return {
      ok: false,
      socials: [],
    };
  }
};

export const getSocials = async () => {
  const appUrl = (await headers()).get('x-current-path');

  try {
    const response = await fetch(`${appUrl}/api/socials`);
    const { data = [], ok } = await response.json();

    return {
      ok,
      socials: data as ISocial[],
    };
  } catch (_) {
    return {
      ok: false,
      socials: [],
    };
  }
};
