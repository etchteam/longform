import React from 'react';
import PropTypes from 'prop-types';

export default function Quote({
  children,
}) {
  return (
    <span className="longform__quote">
      {children}
    </span>
  );
}

Quote.propTypes = {
  children: PropTypes.node.isRequired,
};
