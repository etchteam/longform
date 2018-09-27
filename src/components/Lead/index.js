import React from 'react';
import PropTypes from 'prop-types';

export default function Lead({
  children,
}) {
  return (
    <p className="longform__lead">
      {children}
    </p>
  );
}

Lead.propTypes = {
  children: PropTypes.node.isRequired,
};
