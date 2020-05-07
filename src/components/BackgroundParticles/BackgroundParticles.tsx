import * as React from 'react';
import Particles from 'react-particles-js';
import { isMobile } from 'react-device-detect';
import { ParticlesWrapper } from './style';

interface BackgroundParticlesState {
  width: number;
  height: number;
}

class BackgroundParticles extends React.Component<
unknown,
BackgroundParticlesState
> {
  constructor(props: unknown) {
    super(props);

    this.state = {
      width: 0,
      height: 0,
    };
  }

  public componentDidMount(): void {
    window.addEventListener('resize', this.updateDimensions);
    this.updateDimensions();
  }

  public componentWillUnmount(): void {
    window.removeEventListener('resize', this.updateDimensions);
  }

  private updateDimensions = () => {
    const width = window.innerWidth
      || document.documentElement.clientWidth
      || document.body.clientWidth;

    const height = window.innerHeight
      || document.documentElement.clientHeight
      || document.body.clientHeight;

    this.setState({
      width,
      height,
    });
  };

  public render() {
    const { width, height } = this.state;

    return (
      <ParticlesWrapper>
        <Particles
          width={`${width}px`}
          height={`${height}px`}
          params={{
            particles: {
              number: {
                value: isMobile ? 15 : 90,
              },
              size: {
                value: 3,
              },
              opacity: {
                value: 0.2,
                random: true,
                anim: {
                  enable: true,
                  speed: 1,
                  // eslint-disable-next-line @typescript-eslint/camelcase
                  opacity_min: 0.1,
                  sync: false,
                },
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: 'repulse',
                },
              },
            },
          }}
        />
      </ParticlesWrapper>
    );
  }
}

export default BackgroundParticles;
