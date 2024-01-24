import { IProjectItem } from '@/interfaces/general';
import { IRepository } from '@/interfaces/api';
import { projects } from '@/constants';

class ProjectRepository implements IRepository<IProjectItem> {
  public getAll(): IProjectItem[] {
    return projects;
  }
}

export default ProjectRepository;
