import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function Image({
  children,
  caption,
  fullWidth,
  inline,
  outset,
}) {
  const cx = classNames({
    longform__image: true,
    'longform__image--full-width': fullWidth,
    'longform__image--inline': inline,
    'longform__image--outset': outset !== '',
  });

  return (
    <figure className={cx}>
      {children}
      {caption ? (
        <figcaption className="longform__image-caption">
          {caption}
        </figcaption>
      ) : false}
    </figure>
  );
}

Image.propTypes = {
  children: PropTypes.node.isRequired,
  caption: PropTypes.node,
  fullWidth: PropTypes.bool,
  inline: PropTypes.bool,
  outset: PropTypes.oneOf(['left', 'right', '']),
};

Image.defaultProps = {
  caption: null,
  fullWidth: false,
  inline: false,
  outset: '',
};
