import React from 'react';
import classNames from 'classnames';
import Image from '../../elements/Image';

const Logo = ({className, ...props}) => {
  const classes = classNames('brand', className);

  return (
    <div {...props} className={classes}>
      <h1 className="m-0">
        <Image
          src={require('./../../../assets/images/logo-purple.png')}
          alt="image link go home"
          width={150}
          // height={10}
        />
      </h1>
    </div>
  );
};

export default Logo;
