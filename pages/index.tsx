import * as React from 'react';
import Head from 'next-server/head';
import '../static/css/style.css';
import {Column, Grid, Row} from '../components/Skeleton';
import ContactFrom from '../components/ContactForm';
import ProjectsList from '../components/ProjectsList';
import SkillsList from '../components/SkillsList';
import SocialList from '../components/SocialList';
import Profile from '../components/Profile';
import ProfileDescription from '../components/ProfileDescription';
import BackgroundParticles from '../components/BackgroundParticles';
import ProjectRepository from '../repositories/ProjectRepository';
import {ProjectItem, SocialItem} from '../interfaces/interfaces';
import SkillRepository from '../repositories/SkillRepository';
import SocialRepository from '../repositories/SocialRepository';

interface HomePageProps {
    projects: ProjectItem[];
    skills: string[];
    socials: SocialItem[];
}

class HomePage extends React.Component<HomePageProps> {
    static async getInitialProps() {
        return {
            projects: new ProjectRepository().getAll(),
            skills: new SkillRepository().getAll(),
            socials: new SocialRepository().getAll()
        };
    }

    render() {
        return (
            <React.Fragment>
                <Head>
                    <title>Costin Mirica - Full Stack Developer</title>
                </Head>
                <Grid>
                    <Row>
                        <Column cols={12}>
                            <Profile/>
                        </Column>
                    </Row>
                    <Row className='mt-5'>
                        <ProfileDescription/>
                    </Row>

                    <Row className='mt-5'>
                        <Column cols={6}>
                            <ProjectsList projects={this.props.projects} />
                        </Column>
                        <Column cols={6}>
                            <Row>
                                <Column cols={12}>
                                    <SkillsList skills={this.props.skills} />
                                </Column>
                            </Row>
                            <Row>
                                <Column cols={12}>
                                    <SocialList socials={this.props.socials}/>
                                </Column>
                            </Row>
                        </Column>
                    </Row>
                    <ContactFrom/>
                </Grid>
                <BackgroundParticles/>
            </React.Fragment>
        );
    }
}

export default HomePage;