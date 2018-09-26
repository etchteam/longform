import React from 'react';
import PropTypes from 'prop-types';

export default function Longform({
  children,
}) {
  return (
    <div className="longform">
      {children}
    </div>
  );
}

Longform.propTypes = {
  children: PropTypes.node.isRequired,
};
