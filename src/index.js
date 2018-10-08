import React from 'react';
import PropTypes from 'prop-types';

import Dropcap from './components/Dropcap';
import Image from './components/Image';
import ImageGrid from './components/ImageGrid';
import Lead from './components/Lead';
import Quote from './components/Quote';

import './styles/longform.scss';

export default function Longform({
  children,
}) {
  return (
    <div className="longform">
      <div className="longform__inner">
        {children}
      </div>
    </div>
  );
}

Longform.propTypes = {
  children: PropTypes.node.isRequired,
};

Longform.Dropcap = Dropcap;
Longform.Image = Image;
Longform.ImageGrid = ImageGrid;
Longform.Lead = Lead;
Longform.Quote = Quote;
