import React, { Fragment } from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import Tooth from '/components/Tooth';

const Quadrant = ({ teeth, quadrant, position, name, className }) => {
  const getTooth = React.useCallback(
    (tooth, index, source) => (
      <Tooth
        quadrant={quadrant}
        key={index}
        tooth={tooth}
        position={position}
        mod={index % source.length}
      />
    ),
    [name, teeth],
  );

  return (
    <div
      css={css`
        display: inline-block;
        vertical-align: middle;
        padding: ${!name ? '.525rem' : '.125rem .525rem'};
      `}
    >
      {!position && name ? <p css={className}>{name}</p> : void 0}
      {teeth.map(getTooth)}
      {position && name ? <p css={className}>{name}</p> : void 0}
    </div>
  );
};

export default Quadrant;
