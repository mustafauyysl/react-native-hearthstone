import React from 'react';
import Close from './close.svg';
import Success from './success.svg';
import ModalInfo from './modal-info.svg';

const icons = {
  ModalInfo,
  Close,
  Success,
};

const Icon = ({ name, style, fill, stroke, width = 16, height = 16 }) =>
  React.createElement(icons[name], {
    style,
    height,
    width,
    fill,
    stroke,
  });

export { Icon };
