import { IProjectItem } from '@/interfaces/app';
import { IRepository } from '@/interfaces/api';
import { projects } from '@/constants/mock';

class ProjectRepository implements IRepository<IProjectItem> {
  public getAll(): IProjectItem[] {
    return projects;
  }
}

export default ProjectRepository;
