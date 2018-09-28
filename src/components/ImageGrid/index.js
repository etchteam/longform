import React from 'react';
import PropTypes from 'prop-types';

export default function ImageGrid({
  children,
}) {
  return (
    <div className="longform__image-grid">
      {React.Children.map(children, (child, i) => (
        <div
          key={i}
          className="longform__image-grid-item"
        >
          {child}
        </div>
      ))}
    </div>
  );
}

ImageGrid.propTypes = {
  children: PropTypes.node.isRequired,
};
