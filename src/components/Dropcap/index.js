import React from 'react';
import PropTypes from 'prop-types';

export default function Dropcap({
  children,
  inline,
}) {
  // On a letter
  if (inline) {
    return (
      <span className="longform__dropcap">
        {children}
      </span>
    );
  }

  // As a paragraph setting
  return (
    <p className="longform__dropcap">
      {children}
    </p>
  );
}

Dropcap.propTypes = {
  children: PropTypes.node.isRequired,
  inline: PropTypes.bool,
};

Dropcap.defaultProps = {
  inline: false,
};
