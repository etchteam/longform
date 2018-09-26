import React from 'react';
import PropTypes from 'prop-types';

export default function ImageInline({
  children,
}) {
  return (
    <span className="longform__image-inline">
      {children}
    </span>
  );
}

ImageInline.propTypes = {
  children: PropTypes.node.isRequired,
};
