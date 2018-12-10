import {ProjectItemInterface} from "../interfaces/interfaces";
import paws from "../assets/img/projects/paws.png";
import giftrush from "../assets/img/projects/giftrush.png";
import bubblewrap from "../assets/img/projects/bubblewrap.png";

const projects: ProjectItemInterface[] = [
    {
        title: 'PAWs - Live to purr',
        url: 'http://playpaws.eu',
        icon: paws,
        text: `PAWs! is an HTML5 canvas game also built with JavaScript and the Phaser Framework and wrapped in Ludei's Cocoon JS environment for an easy cross-platform deployment. PAWs' gameplay is unique throughout the market, it combines elements of and arcade game with ones of a puzzle game, resulting a fast-paced game that will test your attention, focus and adaptability to the max.`
    },
    {
        title: 'Gift Rush - Save Christmas',
        url: 'http://giftrush.eu',
        icon: giftrush,
        text: `Christmas-themed game, developed using JavaScript and the Phaser Framework and and wrapped in Ludei's Cocoon JS environment in order to target multiple mobile platforms.`
    },
    {
        title: 'Pop Pop Bubble Wrap',
        url: 'http://playpaws.eu',
        icon: bubblewrap,
        text: `Pop Pop Bubble Wrap is a mobile game developed in JavaScript with Phaser Framework, available on both Android and iOS platform. The application is a bubble wrap popping simulator that can be used for reducing one' stress and anxiety.`
    },
];

class ProjectRepository implements RepositoryInterface<ProjectItemInterface> {
    public getAll(): ProjectItemInterface[] {
        return projects;
    }
}

export default ProjectRepository;