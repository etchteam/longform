import React from 'react';
import PropTypes from 'prop-types';

export default function ImageGrid({
  children,
}) {
  return (
    <span className="longform__image-grid">
      {children}
    </span>
  );
}

ImageGrid.propTypes = {
  children: PropTypes.node.isRequired,
};
