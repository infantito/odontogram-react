import React from 'react';
import Surface from '/components/Tooth/Surface';
import OdontogramContext from '/components/Management/OdontogramContext';
import SURFACES from '/constants/surfaces';

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
  const { id, quadrant, position, tooth } = props;
  const quadrantKeys = quadrant.name.split('_');
  const [, dispatch] = React.useContext(OdontogramContext);
  const handleHovering = React.useCallback(
    hover => e => {
      const { target } = e;
      const dataset = target.parentNode.dataset;
      const tooth = hover
        ? {
            name: dataset.name,
            nomenclature: dataset.nomenclature,
            quadrant: dataset.quadrant,
            surface: target.dataset.surface,
          }
        : {};

      dispatch({ tooth, type: 'tooth' });
    },
    [],
  );

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
        data-quadrant={quadrantKeys[quadrantKeys.length - 1]}
        data-nomenclature={tooth.nomenclature}
        css={css`
          cursor: pointer;
        `}
      >
        {SURFACES.map((surface, index) => (
          <Surface
            key={index}
            points={surface.points}
            surface={surface.flag}
            handleHovering={handleHovering}
          />
        ))}
      </svg>
      {position && (
        <Nomenclature nomenclature={tooth.nomenclature} x={20} y={2.5} />
      )}
    </div>
  );
};

export default React.memo(Tooth);
