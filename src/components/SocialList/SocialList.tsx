import * as React from 'react';
import LinkIcon from "../LinkIcon";
import {SocialItemInterface} from "../../interfaces/interfaces";
import SocialRepository from "../../repositories/SocialRepository";

interface SocialListState {
    socials: SocialItemInterface[];
}

class SocialList extends React.Component<any, SocialListState> {
    private socialRepository: SocialRepository;

    constructor(props) {
        super(props);

        this.socialRepository = new SocialRepository();
        this.state = {
            socials: []
        };
    }

    public componentDidMount(): void {
        this.setState({
            socials: this.socialRepository.getAll()
        });
    }

    public render() {
        const {socials} = this.state;

        return (
            <React.Fragment>
                <h2 className="mt-5">I'm social too</h2>
                <div className="mt-2">
                    {socials.map((item: SocialItemInterface) => <LinkIcon key={item.id} {...item} />)}
                </div>
            </React.Fragment>
        )
    }
}

export default SocialList;