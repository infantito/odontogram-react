import React, { useContext, useCallback, memo } from 'react';
import Surface from '/components/Tooth/Surface';
import OdontogramContext from '/components/Management/OdontogramContext';
import STATUS from '/components/Status';
import SURFACES from '/constants/surfaces';

/** @jsx jsx */
import { css, jsx } from '@emotion/core';

const SURFACES_KEY = SURFACES.reduce((keyName, current) => {
  keyName += current.flag;
  return keyName;
}, '');

const getStatus = ({ odontogram, tooth, surface }) => {
  const current = odontogram[tooth.nomenclature] || {};
  const face = current[surface.flag] || {};

  return {
    color: face.color,
    Drawing: STATUS[(current[SURFACES_KEY] || {}).status],
  };
};

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
  const [state, dispatch] = useContext(OdontogramContext);
  const handleHovering = useCallback(
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
  const handleClick = useCallback(
    _ => {
      if (state.status.name) {
        const { tooth, status } = state;
        const odontogram = state.odontogram;
        odontogram[tooth.nomenclature] = odontogram[tooth.nomenclature] || {};
        const keyName = status.surface ? tooth.surface : SURFACES_KEY;
        const value = {
          tooth: tooth.name,
          quadrant: tooth.quadrant,
          status: status.name,
          color: status.color,
        };

        if (keyName === SURFACES_KEY) {
          odontogram[tooth.nomenclature] = {
            [keyName]: value,
          };
        } else {
          delete odontogram[tooth.nomenclature][SURFACES_KEY];
          odontogram[tooth.nomenclature][keyName] = value;
        }

        dispatch({ odontogram, type: 'odontogram' });
      } else {
        dispatch({ error: 'Status is empty', type: 'no-chosen' });
      }
    },
    [state.odontogram, state.status, state.tooth],
  );

  return (
    <div
      css={css`
        display: inline-block;
        vertical-align: middle;
        position: relative;
      `}
    >
      {!position ? (
        <Nomenclature nomenclature={tooth.nomenclature} x={20} y={70} />
      ) : (
        void 0
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
        {SURFACES.map((surface, index) => {
          const { color, Drawing } = getStatus({
            odontogram: state.odontogram,
            tooth,
            surface,
          });

          return (
            <Surface
              key={index}
              points={surface.points}
              surface={surface.flag}
              handleHovering={handleHovering}
              handleClick={handleClick}
              color={color}
            >
              {!color && Drawing && index === 0 ? <Drawing /> : null}
            </Surface>
          );
        })}
      </svg>
      {position ? (
        <Nomenclature nomenclature={tooth.nomenclature} x={20} y={2.5} />
      ) : (
        void 0
      )}
    </div>
  );
};

export default memo(Tooth);
