import React from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

const Management = props => {
  const {
    tooth: {
      name = 'xxxx',
      nomenclature = 'XX',
      quadrant = 'X',
      surface = 'X',
    },
  } = props;

  return (
    <section>
      <h4
        css={css`
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          margin: 0 auto;
        `}
      >
        TOOTH
        <span
          css={css`
            font-size: 0.5rem;
            font-weight: 500;
            font-style: italic;
          `}
        >
          &nbsp;{name}&nbsp;
        </span>
        <span
          css={css`
            font-size: 0.75rem;
          `}
        >{`Q${quadrant[0]}-${nomenclature}-${surface}`}</span>
      </h4>
    </section>
  );
};

export default Management;
