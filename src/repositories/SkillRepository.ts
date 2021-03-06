import { RepositoryInterface } from './RepositoryInterface';

const skills: string[] = [
  'PHP',
  'MySQL',
  'CSS3',
  'HTML5',
  'jQuery',
  'Bootstrap',
  'JavaScript',
  'TypeScript',
  'ASP.NET',
  'C#',
  'T-SQL',
  'Symfony',
  'Codeigniter',
  'React',
  'Angular',
  'Vue',
  'Phaser',
  'Unity',
  'Cordova',
  'Git',
  'Photoshop',
];

class SkillRepository implements RepositoryInterface<string> {
  public getAll(): string[] {
    return skills;
  }
}

export default SkillRepository;
