import React, { Fragment } from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import Tooth from '../Tooth';

const Quadrant = ({ teeth, quadrant, position, name, className }) => {
  return (
    <div
      css={css`
        display: inline-block;
        vertical-align: middle;
        padding: ${!name ? '.525rem' : '.125rem .525rem'};
      `}
    >
      {name && !position && <p css={className}>{name}</p>}
      {teeth.map((tooth, index, source) => (
        <Tooth
          quadrant={quadrant}
          key={index}
          tooth={tooth}
          position={position}
          mod={index % source.length}
        />
      ))}
      {name && position && <p css={className}>{name}</p>}
    </div>
  );
};

export default Quadrant;
