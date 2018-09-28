import React from 'react';
import PropTypes from 'prop-types';

export default function Dropcap({
  children,
}) {
  // As a paragraph setting
  return (
    <p className="longform__dropcap">
      {children}
    </p>
  );
}

Dropcap.propTypes = {
  children: PropTypes.node.isRequired,
};
