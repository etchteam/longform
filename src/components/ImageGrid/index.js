import React from 'react';
import PropTypes from 'prop-types';

export default function ImageGrid({
  children,
}) {
  return (
    <div className="longform__image-grid">
      {children}
    </div>
  );
}

ImageGrid.propTypes = {
  children: PropTypes.node.isRequired,
};
