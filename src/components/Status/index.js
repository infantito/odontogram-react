import React, { Fragment } from 'react';

export const Endodontic = ({ tooth }) => (
  <circle
    cx="30"
    cy="30"
    r="20"
    data-tooth={tooth}
    fill="orange"
    stroke="black"
    strokeWidth="1px"
  />
);

export const Missing = ({ tooth }) => (
  <Fragment>
    <polygon
      points="10,15 15,10 50,45 45,50"
      data-tooth={tooth}
      fill="tomato"
      stroke="black"
      strokeWidth="1px"
    />
    <polygon
      points="45,10 50,15 15,50 10,45"
      data-tooth={tooth}
      fill="tomato"
      stroke="black"
      strokeWidth="1px"
    />
  </Fragment>
);

export const Extraction = ({ tooth }) => (
  <Fragment>
    <polygon
      points="10,15 15,10 50,45 45,50"
      data-tooth={tooth}
      fill="#3f51b5"
      stroke="black"
      strokeWidth="1px"
    />
    <polygon
      points="45,10 50,15 15,50 10,45"
      data-tooth={tooth}
      fill="#3f51b5"
      stroke="black"
      strokeWidth="1px"
    />
  </Fragment>
);

export const Broken = ({ tooth }) => (
  <polygon
    points="50,10 40,10 10,26 10,32 46,32 10,50 20,50 50,36 50,28 14,28"
    data-tooth={tooth}
    fill="#CC66CC"
    stroke="black"
    strokeWidth="1px"
  />
);

export const Screw = ({ tooth }) => (
  <polygon
    points="50,10 40,10 10,26 10,32 46,32 10,50 20,50 50,36 50,28 14,28"
    data-tooth={tooth}
    fill="#795548"
    stroke="black"
    strokeWidth="1px"
  />
);

export const Crown = ({ tooth }) => (
  <circle
    cx="30"
    cy="30"
    r="16"
    data-tooth={tooth}
    fill="none"
    stroke="#ffc107"
    strokeWidth="7px"
  />
);

export default {
  Extraction,
  Endodontic,
  Missing,
  Screw,
  Broken,
  Crown,
};
