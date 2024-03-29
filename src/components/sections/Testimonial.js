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

const Testimonial = ({
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
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames('tiles-wrap', pushLeft && 'push-left');

  const sectionHeader = {
    title: 'Friend testimonials ❤️',
    paragraph:
      'I could talk about me, describe my little OCD of trying to reach the perfect pixel, that I like pair programming (teamwork is essential). Some friends of mine have decided to help me talk about myself. Thanks!',
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>
            <div className="tiles-item reveal-from-right" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <a
                    href="https://www.linkedin.com/in/fmvilas/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <Image
                      className="testimonial-face"
                      src={require('./../../assets/images/fran.jpg')}
                      alt="author phrase"
                      width={64}
                      height={64}
                    />
                  </a>
                  <p className="text-sm mb-0">
                    I have had the pleasure of working with Javier for several years, both in
                    university and on personal projects. He is a humble, quick learner, and hard
                    worker.
                  </p>
                  <br />
                  <p className="text-sm mb-0">
                    I have seen firsthand his ability to quickly learn new skills and knowledge, and
                    his commitment to teamwork. He is also always willing to help others and share
                    his knowledge.
                  </p>
                  <br />
                  <p className="text-sm mb-0">
                    Although I have not yet had the opportunity to work with him in a company, I am
                    confident that he would be a valuable asset to any team. Therefore, if you are
                    looking for someone with these qualities, I highly recommend that you do not
                    miss the opportunity to hire Javier. Act fast, before someone else does! &nbsp;
                    <span role="img" aria-labelledby="Winking Face with Tongue">
                      🚀
                    </span>
                  </p>
                  <br />
                  <p className="text-sm mb-0">So be fast if you want to be first! </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">
                    Fran Méndez - Founder at AsyncAPI Initiative | Director Of Engineering at&nbsp;
                  </span>
                  <span className="testimonial-item-link">
                    <a href="https://www.postman.com/" target="_blank" rel="noreferrer noopener">
                      Postman
                    </a>
                  </span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="https://asyncapi.io/" target="_blank" rel="noreferrer noopener">
                      AsyncAPI
                    </a>
                  </span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a
                      href="https://www.linkedin.com/in/fmvilas/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Linkedin
                    </a>
                  </span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <a
                    href="https://www.linkedin.com/in/barbano-gonzalez-moreno/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <Image
                      className="testimonial-face"
                      src={require('./../../assets/images/barbanio.jpeg')}
                      alt="author phrase"
                      width={64}
                      height={64}
                    />
                  </a>

                  <p className="text-sm mb-0">
                    Javier is a positive person who likes challenges and does not give up easily, he
                    is perseverant. He is very empathetic and openminded, very important skills that
                    make him such a good colleague in in multidisciplinary teams and collaborative
                    efforts.
                  </p>
                  <br />
                  <p>
                    He has been teaching me “programming” very patiently, introducing me to the
                    Open-source world that was completely unfamiliar for me. I really appreciate his
                    willingness and his listening capacity.
                    <span
                      role="img"
                      aria-labelledby="A woman behind a computer screen, working in the field of technology."
                    >
                      👩‍💻
                    </span>
                  </p>
                  <p>
                    He is passionate about his work, enjoying sharing his knowledge about it. If you
                    are looking for a dynamic and trusty colleague, Javier should be your choice.
                  </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">
                    Barbaño González Moreno - Education Program Manager at&nbsp;
                  </span>
                  <span className="testimonial-item-link">
                    <a href="https://www.postman.com/" target="_blank" rel="noreferrer noopener">
                      Postman
                    </a>
                  </span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="https://asyncapi.io/" target="_blank" rel="noreferrer noopener">
                      AsyncAPI
                    </a>
                  </span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a
                      href="https://www.linkedin.com/in/barbano-gonzalez-moreno/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Linkedin
                    </a>
                  </span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-left" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <a
                    href="https://twitter.com/kinisoftware"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <Image
                      className="testimonial-face"
                      src={require('./../../assets/images/kini.jpeg')}
                      alt="author phrase"
                      width={64}
                      height={64}
                    />
                  </a>

                  <p className="text-sm mb-0">
                    Javier is a great example for the word "overcoming". He is reinventing himself
                    and investing his time on his passion: web and new technologies.
                  </p>
                  <br />
                  <p className="text-sm mb-0">
                    I can say that he is a quick-learner and hard-worker. Always willing to learn
                    and try new things without any fear. An eager beaver, no doubts.
                  </p>
                  <br />
                  <p className="text-sm mb-0">
                    It was my pleasure to collaborate with him to create the Alexa skill:
                    freeCodeCamp radio. If you need a person with focus on the detail and really
                    passionate,
                    <b>
                      &nbsp; Javier is your guy &nbsp;
                      <span role="img" aria-labelledby="Winking Face with Tongue">
                        💪
                      </span>
                    </b>
                  </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">
                    Joaquín Engelmo Moriche - DevRel at &nbsp;
                    <span className="testimonial-item-link">
                      <a href="https://www.criteo.com/" target="_blank" rel="noreferrer noopener">
                        Criteo{' '}
                      </a>
                    </span>
                  </span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a
                      href="https://www.linkedin.com/in/kinisoftware/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      {' '}
                      Linkedin
                    </a>
                  </span>
                  . Alexa Champion &nbsp;
                  <span role="img" aria-labelledby="Winking Face with Tongue" alt="">
                    🏆
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;
