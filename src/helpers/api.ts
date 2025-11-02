import { ISocial } from '@/interfaces/app';
import { IProject } from '@/interfaces/app';
import { BASE_URL } from '@/constants';

export const getProjects = async () => {
  try {
    const response = await fetch(`${BASE_URL}/api/projects`);
    const { data = [], ok } = await response.json();

    return {
      ok,
      projects: data as IProject[],
    };
  } catch (_) {
    return {
      ok: false,
      projects: [],
    };
  }
};

export const getSocials = async () => {
  try {
    const response = await fetch(`${BASE_URL}/api/socials`);
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
