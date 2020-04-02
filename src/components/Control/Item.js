import React from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

const Item = props => {
  const { tab, selected, index, handleTab, size } = props;

  return (
    <li
      css={css`
        border-bottom: 2px solid #888;
        ${
          selected.id === tab.id
            ? `
            background-color: rgba(0, 188, 212, 0.25);
            border-bottom-color: #03a9f4;
            color: #03a9f4;
            text-shadow: 0.5px 0.5px #888;
                `
            : ''
        }
        width: ${100 / size}%;

        &:not(:first-of-type):not(:last-of-type) {
          border-left: 1.5px solid #888;
          border-right: 1.5px solid #888;
        }
      `}
    >
      <data value={index}>
        <input
          type="radio"
          name="tab"
          id={`tab-${tab.id}`}
          css={css`
            width: 0;
            height: 0;
            line-height: 0;
            position: absolute;
            appearance: none;
          `}
          onChange={handleTab}
          checked={tab.id === selected.id}
        />
        <label
          htmlFor={`tab-${tab.id}`}
          css={css`
            display: block;
            font-size: 0.75rem;
            padding: 0.5rem 1rem;
            cursor: pointer;
            user-select: none;
          `}
        >
          {tab.title}
        </label>
      </data>
    </li>
  );
};

export default Item;
