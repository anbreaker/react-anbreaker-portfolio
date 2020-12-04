import React from 'react';
import classNames from 'classnames';
import {SectionTilesProps} from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};
const FeaturesTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {
  const outerClasses = classNames(
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames('tiles-wrap center-content', pushLeft && 'push-left');

  const sectionHeader = {
    title: 'My Best Featured Projects ',
    paragraph:
      'A small sample of my skills and projects created for my own formation and growth.',
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>
            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <a
                      href="https://twitter.com/antunez19/status/1328643666039222272"
                      target="_blank"
                      rel="noreferrer noopener">
                      <Image
                        src={require('./../../assets/images/free-code-camp-logo.svg')}
                        alt="Features tile icon 01"
                        width={64}
                        height={64}
                      />
                    </a>
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Alexa Skill</h4>
                  <p className="m-0 text-sm">
                    To highlight an Alexa skill created with Joaquin Engelmo for the
                    Freecodecamp community.
                  </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <a
                      href="https://github.com/anbreaker/theQuestGamePyGame"
                      target="_blank"
                      rel="noreferrer noopener">
                      <Image
                        src={require('./../../assets/images/Orion_missile.svg')}
                        alt="Features tile icon 02"
                        width={64}
                        height={64}
                      />
                    </a>
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">The Quest Game PyGame</h4>
                  <p className="m-0 text-sm">
                    Final project, bootcamp{' '}
                    <a href="https://keepcoding.io/">
                      <strong>Keepcoding</strong>
                    </a>
                    , learn how to program from 0. Code on Python 3.8.
                  </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <a
                      href="https://raquelantunez.herokuapp.com/"
                      target="_blank"
                      rel="noreferrer noopener">
                      <Image
                        src={require('./../../assets/images/Orion_camera.svg')}
                        alt="Features tile icon 03"
                        width={64}
                        height={64}
                      />
                    </a>
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Photography Web</h4>
                  <p className="m-0 text-sm">
                    Personal website of Raquel Antúnez, photographer, communicator. If you
                    need to immortalize a great moment, visit the website and contact her.
                  </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <a
                      href="https://random-keepcoding-quote.herokuapp.com/"
                      target="_blank"
                      rel="noreferrer noopener">
                      <Image
                        src={require('./../../assets/images/Orion_chat.svg')}
                        alt="Features tile icon 03"
                        width={64}
                        height={64}
                      />
                    </a>
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Random Quote React</h4>
                  <p className="m-0 text-sm">
                    This is a simple <b>Random Quote Machine</b>, created with React and
                    Materialize. It represents the phrases that Keepcoders take to the
                    laboratory of the GIT presentation module in all training camps.
                  </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <a
                      href="https://jsfullstack-books.herokuapp.com/"
                      target="_blank"
                      rel="noreferrer noopener">
                      <Image
                        src={require('./../../assets/images/Orion_data.svg')}
                        alt="Features tile icon 03"
                        width={64}
                        height={64}
                      />
                    </a>
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">CRUD Mongo</h4>
                  <p className="m-0 text-sm">
                    A littel exercise for work and learn, CRUD Complete APP FullStack
                    whitout frameworks JS, but use Bootstrap4.
                  </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-06.svg')}
                      alt="Features tile icon 06"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Robust Workflow</h4>
                  <p className="m-0 text-sm">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;
