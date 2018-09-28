import React from 'react';
import PropTypes from 'prop-types';

import Dropcap from './components/Dropcap';
import ImageFullWidth from './components/ImageFullWidth';
import ImageGrid from './components/ImageGrid';
import ImageInline from './components/ImageInline';
import ImageOutset from './components/ImageOutset';
import Lead from './components/Lead';
import Quote from './components/Quote';

import './styles/longform.scss';

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

Longform.Dropcap = Dropcap;
Longform.ImageFullWidth = ImageFullWidth;
Longform.ImageGrid = ImageGrid;
Longform.ImageInline = ImageInline;
Longform.ImageOutset = ImageOutset;
Longform.Lead = Lead;
Longform.Quote = Quote;
