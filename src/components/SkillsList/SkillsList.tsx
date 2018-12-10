import * as React from "react";
import {Label} from "./style";
import SkillRepository from "../../repositories/SkillRepository";

interface SkillListInterface {
    skills: string[];
}

class SkillsList extends React.Component<any, SkillListInterface> {
    private skillRepository: SkillRepository;

    constructor(props) {
        super(props);

        this.skillRepository = new SkillRepository();
        this.state = {
            skills: []
        };
    }

    public componentDidMount(): void {
        this.setState({
            skills: this.skillRepository.getAll()
        });
    }

    public render() {
        const {skills} = this.state;

        return (
            <React.Fragment>
                <h2>I work with...</h2>
                <div className="mt-2">
                    {skills.map((item, key) => <Label key={key}>{item}</Label>)}
                </div>
            </React.Fragment>
        );
    }
}

export default SkillsList;