import React from 'react';
import PropTypes from 'prop-types';

export default function Dropcap({
  children,
}) {
  return (
    <span className="longform__dropcap">
      {children}
    </span>
  );
}

Dropcap.propTypes = {
  children: PropTypes.node.isRequired,
};
