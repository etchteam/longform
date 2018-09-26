import React from 'react';
import PropTypes from 'prop-types';

export default function ImageOutset({
  children,
}) {
  return (
    <span className="longform__image-outset">
      {children}
    </span>
  );
}

ImageOutset.propTypes = {
  children: PropTypes.node.isRequired,
};
