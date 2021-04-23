import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
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
            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <a
                      href="https://github.com/anbreaker/theQuestGamePyGame"
                      target="_blank"
                      rel="noreferrer noopener">
                      <Image
                        src={require('./../../assets/images/free-code-camp-logo.svg')}
                        alt="Features tile icon 02"
                        width={96}
                        height={96}
                      />
                    </a>
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Alexa Skill</h4>
                  <p className="m-0 text-sm">
                    Highlight an Alexa skill created with
                    <a
                      href="https://twitter.com/kinisoftware"
                      target="_blank"
                      rel="noreferrer noopener">
                      &nbsp;<b>Joaquin Engelmo</b>&nbsp;
                    </a>
                    for &nbsp;
                    <a
                      href="https://www.freecodecamp.org/"
                      target="_blank"
                      rel="noreferrer noopener">
                      <b>Freecodecamp</b>.
                    </a>
                    &nbsp;Thanks &nbsp;
                    <a
                      href="https://twitter.com/ossia"
                      target="_blank"
                      rel="noreferrer noopener">
                      <b>Quincy</b>
                    </a>
                    &nbsp; (Platform CEO) for the support.
                  </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <a
                      href="https://www.egestion.xyz/"
                      target="_blank"
                      rel="noreferrer noopener">
                      <Image
                        src={require('./../../assets/images/Orion_web.svg')}
                        alt="Features tile icon 03"
                        width={64}
                        height={64}
                      />
                    </a>
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">egestion</h4>
                  <p className="m-0 text-sm">
                    It is a quota control system for NGOs, meeting the needs of
                    accounting, traceability and easy management.
                    <a
                      href="https://www.youtube.com/watch?v=NNaEmqyjiJE&t"
                      target="_blank"
                      rel="noreferrer noopener">
                      <b>(Final Bootcamp team work, Full Stack Web Developer)</b>
                    </a>
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
                    Personal website of{' '}
                    <a
                      href="https://raquelantunez.herokuapp.com/"
                      target="_blank"
                      rel="noreferrer noopener">
                      <b>Raquel Antúnez</b>
                    </a>
                    , photographer, communicator. If you need to immortalize a great
                    moment, visit the website and contact her.
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
                    , learn how to program from scratch. Code on Python 3.8.
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
                  <h4 className="mt-0 mb-8">CRUD Js & Mongo</h4>
                  <p className="m-0 text-sm">
                    A little exercise for work and learn, CRUD Complete APP Full Stack
                    without frameworks JS, but I use Bootstrap4.
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
