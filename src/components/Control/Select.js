import React from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

const Option = ({ value, content, ...rest }) => {
  return (
    <option value={value} {...rest}>
      {content}
    </option>
  );
};

const Select = props => {
  const { id, name, data, selected, placeholder, handleChange } = props;

  return (
    <div
      css={css`
        position: relative;
        font-size: 0.75rem;
        padding: 0.5rem;
      `}
    >
      <select
        id={`select-${id}`}
        name={name}
        value={selected.value}
        css={css`
          display: inline-block;
          margin: 0;
          height: 40px;
          border-bottom: 0;
          border-radius: 0.25rem;
          font-size: 0.75rem;
          box-shadow: none;
          background: none;
          border: 1.5px solid #888;
          outline: none;
          /* appearance */
          cursor: pointer;
          appearance: none;
          background-image: linear-gradient(45deg, transparent 50%, #888 50%),
            linear-gradient(135deg, #888 50%, transparent 50%),
            linear-gradient(to right, #888, #888);
          background-position: calc(100% - 20px) 50%, calc(100% - 15px) 50%,
            calc(100% - 2.5em) 0;
          background-size: 5px 5px, 5px 5px, 2px 100%;
          background-repeat: no-repeat;
          padding: 0 0.575rem;
          max-width: 480px;
          width: 100%;
        `}
        onChange={handleChange}
      >
        <Option value="" content={placeholder} disabled={placeholder} />
        {data.map((item, index) => (
          <Option
            value={item.value || item.name}
            content={item.content || item.name}
            key={index}
          />
        ))}
      </select>
    </div>
  );
};

export default Select;
