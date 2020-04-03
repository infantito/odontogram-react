import React from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

function Surface(props) {
  const { status, value, surface, points, handleHovering } = props;
  const handleMouseOver = React.useMemo(_ => handleHovering(true), []);
  const handleMouseOut = React.useMemo(_ => handleHovering(false), []);

  return (
    <polygon
      points={points}
      status={status}
      value={value}
      data-surface={surface}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      css={css`
        fill-opacity: 0;
        stroke: black;
        stroke-width: 1px;
        &:hover {
          fill-opacity: 0.1;
        }
      `}
    />
  );
}

export default React.memo(Surface);
