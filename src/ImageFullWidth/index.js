import React from 'react';
import PropTypes from 'prop-types';

export default function ImageFullWidth({
  children,
}) {
  return (
    <span className="longform__image-full-width">
      {children}
    </span>
  );
}

ImageFullWidth.propTypes = {
  children: PropTypes.node.isRequired,
};
