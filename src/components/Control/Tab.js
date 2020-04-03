import React from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import Item from '/components/Control/Item';
import OdontogramContext from '/components/Management/OdontogramContext';

const Tab = ({ children, tabs, keyName, maxWidth = 1024 }) => {
  const [state, dispatch] = React.useContext(OdontogramContext);
  const handleTab = ({ target: { parentNode } }) => {
    dispatch({ [keyName]: +parentNode.value, type: keyName });
  };
  const selected = tabs[state[keyName]];

  return (
    <div
      css={css`
        max-width: ${maxWidth}px;
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
        {tabs.map((tab, key, source) => (
          <Item
            key={key}
            tab={tab}
            index={key}
            selected={selected}
            handleTab={handleTab}
            size={source.length}
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
        {typeof children === 'function' ? children(selected) : children}
      </div>
    </div>
  );
};

export default Tab;
