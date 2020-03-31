import React from 'react';
import Surface from './Surface';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

const Nomenclature = ({ nomenclature, x, y }) => (
  <span
    x={x}
    y={y}
    css={css`
      display: block;
      color: #333;
      font-size: 0.75rem;
      font-weight: bold;
    `}
  >
    {nomenclature}
  </span>
);

const Tooth = props => {
  const { id, tooth, quadrant, position } = props;

  return (
    <div
      css={css`
        display: inline-block;
        vertical-align: middle;
        position: relative;
      `}
    >
      {!position && (
        <Nomenclature nomenclature={tooth.nomenclature} x={20} y={70} />
      )}
      <svg
        height="50"
        width="50"
        viewBox="5 5 50 50"
        id={id}
        data-name={tooth.name}
        data-quadrant={quadrant}
        css={css`
          cursor: pointer;
        `}
      >
        <Surface points="10,10 50,10 40,20 20,20" surface="lingual" />
        <Surface points="10,50 20,40 20,20 10,10" surface="distal" />
        <Surface points="20,20 40,20 40,40 20,40" surface="incisal,occlusal" />
        <Surface points="50,10 50,50 40,40 40,20" surface="mesial" />
        <Surface points="50,50 10,50 20,40 40,40" surface="facial" />
      </svg>
      {position && (
        <Nomenclature nomenclature={tooth.nomenclature} x={20} y={2.5} />
      )}
    </div>
  );
};

export default Tooth;
