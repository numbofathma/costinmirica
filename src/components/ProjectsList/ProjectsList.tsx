import * as React from 'react';
import {UnOrderedList} from 'react-skeleton-ui/src/Lists';
import ProjectsItem from "../ProjectsItem/ProjectsItem";
import {ProjectItemInterface} from "../../interfaces/interfaces";
import ProjectRepository from "../../repositories/ProjectRepository";

interface ProjectListState {
    projects: ProjectItemInterface[];
}

class ProjectsList extends React.Component<any, ProjectListState> {
    private projectRepository: ProjectRepository;

    constructor(props) {
        super(props);

        this.projectRepository = new ProjectRepository();
        this.state = {
            projects: []
        };
    }

    public componentDidMount(): void {
        this.setState({
            projects: this.projectRepository.getAll()
        });
    }

    public render() {
        const {projects} = this.state;

        return (
            <React.Fragment>
                <h2>Some of the projects I've done</h2>

                <UnOrderedList className="mt-3">
                    {projects.map((project: ProjectItemInterface) => <ProjectsItem key={project.title} {...project} />)}
                </UnOrderedList>
            </React.Fragment>
        );
    }
}

export default ProjectsList;