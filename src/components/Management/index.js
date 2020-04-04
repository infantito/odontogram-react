import React, { useContext, useCallback } from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import Select from '/components/Control/Select';
import Tab from '/components/Control/Tab';
import Button from '/components/Control/Button';
import OdontogramContext from '/components/Management/OdontogramContext';
import OPERATIONS from '/constants/operations';
import DIAGNOSIS from '/constants/diagnosis';
import TREATMENTS from '/constants/treatments';

const collections = [
  DIAGNOSIS.concat(TREATMENTS.filter(treatment => treatment.diagnosis)),
  TREATMENTS,
  [],
];
const tabs = OPERATIONS.map((operation, index) => ({
  ...operation,
  data: collections[index],
}));

const Management = props => {
  const [state, dispatch] = useContext(OdontogramContext);
  const {
    tooth: {
      name = 'xxxx',
      nomenclature = 'XX',
      quadrant = 'X',
      surface = 'X',
    },
  } = state;

  const handleChange = useCallback(
    ({ target }) => {
      const status = (tabs[state.tab].data || []).find(
        item => item.name === target.value,
      );
      dispatch({ status, type: 'status' });
    },
    [state.tab],
  );

  const handleClear = useCallback(_ => dispatch({ type: 'clear' }));

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
      <Tab tabs={tabs} keyName="tab">
        <React.Fragment>
          <Select
            id="types"
            data={collections[state.tab]}
            selected={state.status}
            handleChange={handleChange}
            placeholder="Choose an option"
          />
          <p
            css={css`
              font-size: 0.75rem;
              font-weight: 600;
              text-align: center;
              font-style: italic;
              color: #ff4b4bc7;
              ${state.error ? 'padding: 0 0.5rem 0.5rem;' : ''}
              margin: 0 auto;
            `}
          >
            {state.error}
          </p>
        </React.Fragment>
      </Tab>
      <Button handleClick={handleClear}>Reset</Button>
    </section>
  );
};

export default Management;
