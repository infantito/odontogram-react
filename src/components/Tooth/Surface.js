import React from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

function Surface(props) {
  const { id, status, value, surface, points } = props;

  return (
    <polygon
      points={points}
      status={status}
      value={value}
      data-surface={surface}
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

export default Surface;
