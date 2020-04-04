import React, { Fragment } from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

function Surface(props) {
  const { surface, points, handleHovering, handleClick, color } = props;
  const handleMouseOver = React.useMemo(_ => handleHovering(true), []);
  const handleMouseOut = React.useMemo(_ => handleHovering(false), []);

  return (
    <Fragment>
      {props.children}
      <polygon
        points={points}
        data-surface={surface}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onClick={handleClick}
        css={css`
          ${color ? '' : 'fill-opacity: 0'};
          stroke: black;
          stroke-width: 1px;
          ${color ? `fill: ${color}` : ''};

          &:hover {
            fill-opacity: 0.15;
          }
        `}
      />
    </Fragment>
  );
}

export default React.memo(Surface);
