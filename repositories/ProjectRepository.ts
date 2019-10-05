import {ProjectItem} from '../interfaces/interfaces';
import paws from '../static/img/projects/paws.jpg';
import giftrush from '../static/img/projects/giftrush.jpg';
import bubblewrap from '../static/img/projects/bubblewrap.jpg';
import twindots from '../static/img/projects/twindots.jpg';

const projects: ProjectItem[] = [
    {
        title: 'PAWs - Live to purr',
        url: 'http://playpaws.eu',
        icon: paws,
        text: 'PAWs! is an HTML5 canvas game also built with JavaScript and the Phaser Framework and wrapped in Ludei\'s Cocoon JS environment' +
            ' for an easy cross-platform deployment. PAWs\' gameplay is unique throughout the market, it combines elements of and arcade game with ' +
            'ones of a puzzle game, resulting a fast-paced game that will test your attention, focus and adaptability to the max.'
    },
    {
        title: 'Gift Rush - Save Christmas',
        url: 'http://giftrush.eu',
        icon: giftrush,
        text: 'Christmas-themed game, developed using TypeScript and the Phaser Framework and wrapped in Cordova in ' +
            'order to target multiple mobile platforms.'
    },
    {
        title: 'Pop Pop Bubble Wrap',
        url: 'http://popbub.eu',
        icon: bubblewrap,
        text: 'Pop Pop Bubble Wrap is a mobile game developed in TypeScript with Phaser Framework, available on both Android and iOS platform' +
        ' thanks to the Cordova Project. The application is a bubble wrap popping simulator that can be used for reducing one\' stress and anxiety.'
    },
    {
        title: 'Twin Dots Challenge',
        url: 'https://roninmobile.eu/twin-dots-challenge',
        icon: twindots,
        text: 'Twin Dots Challenge is a hyper casual little puzzle, developed in TypeScript with Phaser Framework, available on both Android and' +
        ' iOS platform. For building the game for both platforms (Andoird & iOS) I\'ve used the Codova Project.'
    },
];

class ProjectRepository implements RepositoryInterface<ProjectItem> {
    public getAll(): ProjectItem[] {
        return projects;
    }
}

export default ProjectRepository;
