import React from 'react';
import PropTypes from 'prop-types';

export default function Lead({
  children,
}) {
  return (
    <span className="longform__lead">
      {children}
    </span>
  );
}

Lead.propTypes = {
  children: PropTypes.node.isRequired,
};
