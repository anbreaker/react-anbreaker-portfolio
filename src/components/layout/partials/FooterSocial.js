import React from 'react';
import classNames from 'classnames';
import {Link} from 'react-router-dom';
import Image from '../../elements/Image';

const FooterSocial = ({className, ...props}) => {
  const classes = classNames('footer-social', className);

  return (
    <div {...props} className={classes}>
      <ul className="list-reset">
        <li>
          <a href="https://twitter.com/antunez19">
            <svg
              width="36"
              height="36"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg">
              <title>Twitter</title>
              <path
                fill="#0077b7"
                d="M16 3c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4C.7 7.7 1.8 9 3.3 9.3c-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4C15 4.3 15.6 3.7 16 3z"
              />
            </svg>
          </a>
        </li>
        <li>
          <a href="https://github.com/anbreaker">
            <svg
              width="36"
              height="36"
              viewBox="0 0 64 64"
              xmlns="http://www.w3.org/2000/svg">
              <title>Github</title>
              <path d="M32 0a32.021 32.021 0 0 0-10.1 62.4c1.6.3 2.2-.7 2.2-1.5v-6c-8.9 1.9-10.8-3.8-10.8-3.8-1.5-3.7-3.6-4.7-3.6-4.7-2.9-2 .2-1.9.2-1.9 3.2.2 4.9 3.3 4.9 3.3 2.9 4.9 7.5 3.5 9.3 2.7a6.93 6.93 0 0 1 2-4.3c-7.1-.8-14.6-3.6-14.6-15.8a12.27 12.27 0 0 1 3.3-8.6 11.965 11.965 0 0 1 .3-8.5s2.7-.9 8.8 3.3a30.873 30.873 0 0 1 8-1.1 30.292 30.292 0 0 1 8 1.1c6.1-4.1 8.8-3.3 8.8-3.3a11.965 11.965 0 0 1 .3 8.5 12.1 12.1 0 0 1 3.3 8.6c0 12.3-7.5 15-14.6 15.8a7.746 7.746 0 0 1 2.2 5.9v8.8c0 .9.6 1.8 2.2 1.5A32.021 32.021 0 0 0 32 0z" />
            </svg>
          </a>
        </li>

        <li>
          <a href="https://www.linkedin.com/in/francisco-javier-antunez-duran/">
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
          <Link to="/">
            <Image
              src={require('./../../../assets/images/logo-gearbox-purple.png')}
              alt="image link go home"
              width={36}
              // height={10}
            />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default FooterSocial;
