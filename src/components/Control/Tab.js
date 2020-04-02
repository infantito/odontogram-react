import React, { Fragment } from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import Option from '/components/Control/Option';

const Tab = ({ children, tabs, selected, handleTab }) => {
  return (
    <div
      css={css`
        max-width: 640px;
        width: 100%;
        padding: 1rem 0.75rem;
      `}
    >
      <ul
        css={css`
          display: flex;
          background-color: #fff;
          border: 1.5px solid #888;
          border-bottom: 0;
          text-align: center;
          border-radius: 0.5rem;
          border-bottom-left-radius: 0;
          border-bottom-right-radius: 0;
          overflow: hidden;
          list-style: none;
          padding: 0;
          margin: 0 auto;
        `}
      >
        {tabs.map((tab, key) => (
          <Option
            key={key}
            tab={tab}
            index={key}
            selected={selected}
            handleTab={handleTab}
          />
        ))}
      </ul>
      <div
        css={css`
          border: 1.5px solid #888;
          border-top-width: 0;
          border-radius: 0.5rem;
          border-top-left-radius: 0;
          border-top-right-radius: 0;
        `}
      >
        {children}
      </div>
    </div>
  );
};

export default Tab;
