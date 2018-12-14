import * as React from "react";
import {Column, Grid, Row} from "react-skeleton-ui/src/Grid";
import ContactFrom from './components/ContactForm';
import ProjectsList from "./components/ProjectsList";
import SkillsList from "./components/SkillsList";
import SocialList from "./components/SocialList";
import Profile from "./components/Profile";
import ProfileDescription from "./components/ProfileDescription";
import BackgroundParticles from "./components/BackgroundParticles";

class App extends React.Component {
    public render() {
        return (
            <React.Fragment>
                <Grid>
                    <Row>
                        <Column cols={12}>
                            <Profile />
                        </Column>
                    </Row>
                    <Row className="mt-5">
                        <ProfileDescription />
                    </Row>

                    <Row className="mt-5">
                        <Column cols={6}>
                            <ProjectsList />
                        </Column>
                        <Column cols={6}>
                            <Row>
                                <Column cols={12}>
                                    <SkillsList />
                                </Column>
                            </Row>
                            <Row>
                                <Column cols={12}>
                                    <SocialList />
                                </Column>
                            </Row>
                        </Column>
                    </Row>
                    <ContactFrom/>
                </Grid>
                <BackgroundParticles />
            </React.Fragment>
        );
    }
}

export default App;
