import React from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

const Button = ({ handleClick, children }) => {
  return (
    <button
      type="button"
      css={css`
        background-color: #3cc0ff;
        border: 2px solid #03a9f4;
        border-radius: 0.5rem;
        color: #fff;
        cursor: pointer;
        display: block;
        font-size: 1rem;
        font-weight: bold;
        margin: 0 auto;
        max-width: 180px;
        padding: 0.5rem 0.75rem;
        text-align: center;
        width: 100%;
        outline: none;

        &:active {
          transform: scale(0.9);
        }

        &:hover {
          opacity: 0.85;
        }
      `}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
