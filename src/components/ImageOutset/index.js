import React from 'react';
import PropTypes from 'prop-types';

export default function ImageOutset({
  children,
}) {
  return (
    <div className="longform__image-outset">
      {children}
    </div>
  );
}

ImageOutset.propTypes = {
  children: PropTypes.node.isRequired,
};
