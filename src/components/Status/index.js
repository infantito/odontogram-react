import React, { Fragment } from 'react';

export const Endodontic = ({ tooth }) => (
  <circle cx="30" cy="30" r="20" data-tooth={tooth} />
);

export const Missing = ({ tooth }) => (
  <Fragment>
    <polygon points="10,15 15,10 50,45 45,50" data-tooth={tooth} />
    <polygon points="45,10 50,15 15,50 10,45" data-tooth={tooth} />
  </Fragment>
);

export const Implant = ({ tooth }) => (
  <polygon
    points="50,10 40,10 10,26 10,32 46,32 10,50 20,50 50,36 50,28 14,28"
    data-tooth={tooth}
  />
);

export const Crown = ({ tooth }) => (
  <circle cx="30" cy="30" r="16" data-tooth={tooth} />
);

export default {
  Endodontic,
  Missing,
  Implant,
  Crown,
};
