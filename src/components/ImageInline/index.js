import React from 'react';
import PropTypes from 'prop-types';

export default function ImageInline({
  children,
}) {
  return (
    <div className="longform__image-inline">
      {children}
    </div>
  );
}

ImageInline.propTypes = {
  children: PropTypes.node.isRequired,
};
