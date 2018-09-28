import React from 'react';
import PropTypes from 'prop-types';

export default function Hero({
  title,
  subtitle,
}) {
  return (
    <div className="hero">
      <h1 className="hero__title">{title}</h1>
      <p className="hero__subtitle">{subtitle}</p>
    </div>
  );
}

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};
