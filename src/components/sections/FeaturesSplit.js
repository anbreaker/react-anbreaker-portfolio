import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionSplitProps.types,
};

const defaultProps = {
  ...SectionSplitProps.defaults,
};

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {
  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'Workflow Quick View',
    paragraph:
      'A quick overview of some projects that I consider relevant because of the technologies used, with Javascript, DOM handling without Frameworks, Node use, Express, Mongo, Templating Engines and React.',
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>
            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Deploy on AWS
                </div>

                <a
                  href="https://www.egestion.xyz/"
                  target="_blank"
                  rel="noreferrer noopener">
                  <h3 className="mt-0 mb-12">www.egestion.xyz</h3>
                </a>
                <p className="m-0">
                  Nodejs, Express, React Redux, Firebase, AWS, Cloudinary, Mongodb... This
                  is a great and Complete application (Login, Registration,CRUD, ES6+, and
                  more)
                </p>
                <br />
                <p className="m-0">
                  All the information about the project can be found on
                  <a
                    href="https://github.com/anbreaker/react-proyecto-mu"
                    target="_blank"
                    rel="noreferrer noopener">
                    <b> github </b>
                  </a>
                  or from the youtube presentation, where you can also find all the links.
                </p>
                <br />
                <p className="m-0">
                  This has been the group work (together with two colleagues) of the
                  keepcoding.io Full Stack Web Developer bootcamp.
                </p>
              </div>
              <div
                className={classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <div
                  className="vide hero-figure reveal-from-bottom illustration-element-01"
                  data-reveal-value="20px"
                  data-reveal-delay="800"
                  style={{
                    position: 'relative',
                    paddingBottom: '56.25%' /* 16:9 */,
                    paddingTop: 25,
                    height: 0,
                  }}>
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/NNaEmqyjiJE"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
                </div>
              </div>
            </div>

            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-right"
                data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Deploy on your Localhost:
                  <a
                    target="_blank"
                    rel="noreferrer noopener"
                    href="https://github.com/anbreaker/practica5DesarrolloBackendAvanzado">
                    &nbsp;GitHub&nbsp;
                  </a>
                  Project.
                </div>
                <h3 className="mt-0 mb-12">Advanced Backend Development</h3>
                <p className="m-0">
                  Develop the API that will run on the server of an article sales service.
                </p>
                <p className="m-0">
                  If you know Spanish you can watch the video explaining how the practice
                  works and if not... you can always activate the subtitles, Thanks
                  Youtube!{' '}
                  <span role="img" aria-labelledby="Winking Face with Tongue">
                    😜
                  </span>
                </p>
              </div>
              <div
                className={classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <div
                  className="vide hero-figure reveal-from-bottom illustration-element-01"
                  data-reveal-value="20px"
                  data-reveal-delay="800"
                  style={{
                    position: 'relative',
                    paddingBottom: '56.25%' /* 16:9 */,
                    paddingTop: 25,
                    height: 0,
                  }}>
                  <iframe
                    title="unique"
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                    }}
                    src={`https://www.youtube.com/embed/SYzKtf6QuiA`}
                    frameBorder="0"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;
