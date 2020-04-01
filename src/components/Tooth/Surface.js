import React from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

function Surface(props) {
  const { status, value, surface, points, handleHovering } = props;

  return (
    <polygon
      points={points}
      status={status}
      value={value}
      data-surface={surface}
      onMouseOver={handleHovering(true)}
      onMouseOut={handleHovering(false)}
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
