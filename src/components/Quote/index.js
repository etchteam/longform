import React from 'react';
import PropTypes from 'prop-types';

export default function Quote({
  children,
}) {
  return (
    <blockquote className="longform__quote">
      {children}
    </blockquote>
  );
}

Quote.propTypes = {
  children: PropTypes.node.isRequired,
};
