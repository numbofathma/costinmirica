import { IProject, ISocial } from '@/interfaces/app';
import { CDN_URL } from '.';
import { SvgIcons } from './enums';

export const projects: IProject[] = [
  {
    title: 'PAWs - Live to purr',
    url: 'https://roninmobile.eu/project/paws-live-to-purr',
    icon: `${CDN_URL}/static/projects/paws.webp`,
    text:
      "PAWs! is an HTML5 canvas game also built with JavaScript and the Phaser Framework and wrapped in Ludei's Cocoon JS environment" +
      " for an easy cross-platform deployment. PAWs' gameplay is unique throughout the market, it combines elements of and arcade game with " +
      'ones of a puzzle game, resulting a fast-paced game that will test your attention, focus and adaptability to the max.',
  },
  {
    title: 'Gift Rush',
    url: 'https://roninmobile.eu/project/save-christmas-gift-rush',
    icon: `${CDN_URL}/static/projects/giftrush.webp`,
    text:
      'Christmas-themed game, developed using TypeScript and the Phaser Framework and wrapped in Cordova in ' +
      'order to target multiple mobile platforms.',
  },
  {
    title: 'Pop Pop Bubble Wrap',
    url: 'https://roninmobile.eu/project/pop-pop-bubble-wrap',
    icon: `${CDN_URL}/static/projects/bubblewrap.webp`,
    text:
      'Pop Pop Bubble Wrap is a mobile game developed in TypeScript with Phaser Framework, available on both Android and iOS platform' +
      " thanks to the Cordova Project. The application is a bubble wrap popping simulator that can be used for reducing one' stress and anxiety.",
  },
  {
    title: 'Twin Dots Challenge',
    url: 'https://roninmobile.eu/project/twin-dots-challenge',
    icon: `${CDN_URL}/static/projects/twindots.webp`,
    text:
      'Twin Dots Challenge is a hyper-casual little puzzle, developed in TypeScript with Phaser Framework, available on both Android and' +
      " iOS platform. For building the game for both platforms (Android & iOS) I've used the Cordova Project.",
  },
  {
    title: '13 Arrows',
    url: 'https://roninmobile.eu/project/13-arrows',
    icon: `${CDN_URL}/static/projects/arrows.webp`,
    text:
      '13 Arrows is a hyper-casual archery game for those moments when you are bored, built with Typescript and Phaser Framework.' +
      ' Try your best to get a higher score using the arrows you have at your disposal.',
  },
];

export const socials: ISocial[] = [
  {
    id: 'linkedin',
    title: 'LinkedIn',
    icon: SvgIcons.linkedin,
    url: 'http://linkedin.com/in/costinmirica',
  },
  {
    id: 'github',
    title: 'GitHub',
    icon: SvgIcons.github,
    url: 'https://github.com/numbofathma',
  },
];
