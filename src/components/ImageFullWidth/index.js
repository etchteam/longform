import React from 'react';
import PropTypes from 'prop-types';

export default function ImageFullWidth({
  children,
}) {
  return (
    <div className="longform__image-full-width">
      {children}
    </div>
  );
}

ImageFullWidth.propTypes = {
  children: PropTypes.node.isRequired,
};
