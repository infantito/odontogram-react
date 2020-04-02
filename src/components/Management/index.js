import React from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import Select from '/components/Control/Select';
import Tab from '/components/Control/Tab';
import OPERATIONS from '/constants/operations';
import STATUS from '/constants/status';
import TREATMENTS from '/constants/treatments';

const collections = [
  STATUS.concat(TREATMENTS.filter(treatment => treatment.status)),
  TREATMENTS,
  [],
];
const tabs = OPERATIONS.map((operation, index) => ({
  ...operation,
  data: collections[index],
}));

const initialState = {
  tab: 0,
  value: '',
};
const reducer = (state, action) => {
  switch (action.type) {
    case 'value':
      return { ...state, value: action.value };
    case 'tab':
      return { ...state, value: '', tab: action.tab };
    default:
      throw new Error(`That action type isn't supported.`);
  }
};

const Management = props => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const {
    tooth: {
      name = 'xxxx',
      nomenclature = 'XX',
      quadrant = 'X',
      surface = 'X',
    },
  } = props;
  const handleTab = ({ target: { parentNode } }) => {
    dispatch({ tab: +parentNode.value, type: 'tab' });
  };

  const handleChange = e => {
    dispatch({ value: e.target.value, type: 'value' });
  };

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
      <Tab tabs={tabs} handleTab={handleTab} selected={tabs[state.tab]}>
        <Select
          id="types"
          data={collections[state.tab]}
          value={state.value}
          handleChange={handleChange}
          placeholder="Choose an option"
        />
      </Tab>
    </section>
  );
};

export default Management;
