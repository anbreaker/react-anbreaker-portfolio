import React from 'react';
import classNames from 'classnames';
import Image from '../../elements/Image';
// import {Link} from 'react-router-dom';

const FooterSocial = ({className, ...props}) => {
  const classes = classNames('footer-social', className);

  return (
    <div {...props} className={classes}>
      <ul className="list-reset">
        <li>
          <a
            href="https://twitter.com/antunez19"
            target="_blank"
            rel="noreferrer noopener">
            <svg
              width="36"
              height="36"
              viewBox="0 0 64 64"
              xmlns="http://www.w3.org/2000/svg">
              <title>Twitter</title>
              <path
                d="M64 13.194a23.1 23.1 0 0 1-7.3 2.1 14.119 14.119 0 0 0 5.5-7.2c-1.9 1.2-6.1 2.9-8.2 2.9a13.782 13.782 0 0 0-9.6-4 13.187 13.187 0 0 0-13.2 13.2 13.576 13.576 0 0 0 .3 2.9c-9.9-.3-21.5-5.2-28-13.7a13.206 13.206 0 0 0 4 17.4c-1.5.2-4.4-.1-5.7-1.4-.1 4.6 2.1 10.7 10.2 12.9-1.6.8-4.3.6-5.5.4.4 3.9 5.9 9 11.8 9-2.1 2.4-9.3 6.9-18.3 5.5a39.825 39.825 0 0 0 20.7 5.8 36.8 36.8 0 0 0 37-38.6v-.5a22.861 22.861 0 0 0 6.3-6.7z"
                fill="#0077b7"
              />
            </svg>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/anbreaker"
            target="_blank"
            rel="noreferrer noopener">
            <svg
              width="36"
              height="36"
              viewBox="0 0 64 64"
              xmlns="http://www.w3.org/2000/svg">
              <title>Github</title>
              <path
                fill="#5658DD"
                d="M32 0a32.021 32.021 0 0 0-10.1 62.4c1.6.3 2.2-.7 2.2-1.5v-6c-8.9 1.9-10.8-3.8-10.8-3.8-1.5-3.7-3.6-4.7-3.6-4.7-2.9-2 .2-1.9.2-1.9 3.2.2 4.9 3.3 4.9 3.3 2.9 4.9 7.5 3.5 9.3 2.7a6.93 6.93 0 0 1 2-4.3c-7.1-.8-14.6-3.6-14.6-15.8a12.27 12.27 0 0 1 3.3-8.6 11.965 11.965 0 0 1 .3-8.5s2.7-.9 8.8 3.3a30.873 30.873 0 0 1 8-1.1 30.292 30.292 0 0 1 8 1.1c6.1-4.1 8.8-3.3 8.8-3.3a11.965 11.965 0 0 1 .3 8.5 12.1 12.1 0 0 1 3.3 8.6c0 12.3-7.5 15-14.6 15.8a7.746 7.746 0 0 1 2.2 5.9v8.8c0 .9.6 1.8 2.2 1.5A32.021 32.021 0 0 0 32 0z"
              />
            </svg>
          </a>
        </li>

        <li>
          <a
            href="https://www.linkedin.com/in/francisco-javier-antunez-duran/"
            target="_blank"
            rel="noreferrer noopener">
            <svg
              width="36"
              height="36"
              viewBox="0 0 64 64"
              xmlns="http://www.w3.org/2000/svg">
              <title>Linkedin</title>
              <g>
                <circle cx="12.145" cy="3.892" r="1" />
                <path
                  fill="#0077b7"
                  d="M1.15 21.7h13V61h-13zm46.55-1.3c-5.7 0-9.1 2.1-12.7 6.7v-5.4H22V61h13.1V39.7c0-4.5 2.3-8.9 7.5-8.9s8.3 4.4 8.3 8.8V61H64V38.7c0-15.5-10.5-18.3-16.3-18.3zM7.7 2.6C3.4 2.6 0 5.7 0 9.5s3.4 6.9 7.7 6.9 7.7-3.1 7.7-6.9S12 2.6 7.7 2.6z"
                />
              </g>
            </svg>
          </a>
        </li>
        <li>
          <a
            href="https://anbreaker.netlify.app/"
            target="_blank"
            rel="noreferrer noopener">
            <Image
              src={require('./../../../assets/images/logo-gearbox-purple.png')}
              alt="image link go home"
              width={36}
            />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default FooterSocial;
