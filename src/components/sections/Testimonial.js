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
    title: 'Friends testimonials ❤️',
    paragraph:
      'I could talk about me, describe my little OCD of trying to reach the pixel perfect, that I like pair programming (teamwork is essential). Some friends have wanted to help me talk about myself. Thanks!',
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
                    rel="noreferrer noopener">
                    <Image
                      className="testimonial-face"
                      src={require('./../../assets/images/fran.jpg')}
                      alt="author phrase"
                      width={64}
                      height={64}
                    />
                  </a>
                  <p className="text-sm mb-0">
                    — Bienvenido al Chiquito Ipsum, el generador de texto de relleno para
                    tus diseños de antes de los dolores. Dale a "Fistrum" para que te
                    salga ese pedaso de texto Chiquito en estado puro. Si te crees muy
                    moderno dale a "Latin" que te lo pongo con cuarto y mitad de
                    romanooo... Jarl!!
                  </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">
                    Fran Méndez - Founder at AsyncAPI Initiative | Director Of Engineering
                    at Postman
                  </span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a
                      href="https://asyncapi.io/"
                      target="_blank"
                      rel="noreferrer noopener">
                      AsyncAPI
                    </a>
                  </span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <a
                    href="https://www.linkedin.com/in/javgueram/"
                    target="_blank"
                    rel="noreferrer noopener">
                    <Image
                      className="testimonial-face"
                      src={require('./../../assets/images/javier.jpeg')}
                      alt="author phrase"
                      width={64}
                      height={64}
                    />
                  </a>

                  <p className="text-sm mb-0">
                    — Lorem fistrum se calle ustée ese hombree ese hombree está la cosa
                    muy malar. Condemor por la gloria de mi madre benemeritaar a peich.
                    Papaar papaar pecador amatomaa no puedor. Benemeritaar pupita va usté
                    muy cargadoo tiene musho peligro apetecan ese pedazo de sexuarl me
                    cago en tus muelas.
                  </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">
                    Javier Guerrero Ramírez - Software Engineer Lead on Capgemini
                  </span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a
                      href="https://www.linkedin.com/in/javgueram/"
                      target="_blank"
                      rel="noreferrer noopener">
                      Linkedin
                    </a>
                  </span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-left" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <Image
                    className="testimonial-face"
                    src={require('./../../assets/images/github.png')}
                    alt="author phrase"
                    width={64}
                    height={64}
                  />
                  <p className="text-sm mb-0">
                    — Ese pedazo de de la pradera llevame al sircoo hasta luego Lucas
                    tiene musho peligro mamaar qué dise usteer apetecan. Amatomaa a
                    gramenawer ese que llega tiene musho peligro ahorarr qué dise usteer
                    te va a hasé pupitaa caballo blanco caballo negroorl pecador amatomaa.
                  </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Chiquito</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="#0">AppName</a>
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
