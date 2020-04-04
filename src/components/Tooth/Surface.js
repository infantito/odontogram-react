import React from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

function Surface(props) {
  const { surface, points, handleHovering, handleClick, color } = props;
  const handleMouseOver = React.useMemo(_ => handleHovering(true), []);
  const handleMouseOut = React.useMemo(_ => handleHovering(false), []);

  return (
    <polygon
      points={points}
      data-surface={surface}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onClick={handleClick}
      css={css`
        fill-opacity: 1;
        stroke: black;
        stroke-width: 1px;
        fill: ${color || '#fff'};

        &:hover {
          fill-opacity: 0.15;
        }
      `}
    />
  );
}

export default React.memo(Surface);
