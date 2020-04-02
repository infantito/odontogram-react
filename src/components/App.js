import React, { Fragment } from 'react';
import { Global, css } from '@emotion/core';
import Odontogram from '/components/Odontogram';
import Management from '/components/Management';
import Tab from '/components/Control/Tab';
import { ODONTOGRAM_TYPES } from '/constants/odontogram';
import QUADRANTS from '/constants/quadrants';
import { formatJoinId } from '/constants/utils';

const odontogramTypes = formatJoinId(ODONTOGRAM_TYPES, 'amount', [
  { title: 'Mixed', amount: 0 },
]);

const App = () => {
  const [currentType, setCurrentType] = React.useState(
    odontogramTypes[odontogramTypes.length - 1],
  );
  const [tooth, setTooth] = React.useState({});
  const handleTab = ({ target: { parentNode } }) => {
    setCurrentType(odontogramTypes[+parentNode.value]);
  };
  const handleHovering = hover => e => {
    const { target } = e;
    const dataset = target.parentNode.dataset;
    const tooth = hover
      ? {
          name: dataset.name,
          nomenclature: dataset.nomenclature,
          quadrant: dataset.quadrant,
          surface: target.dataset.surface,
        }
      : {};

    setTooth(tooth);
  };

  return (
    <Fragment>
      <Global
        styles={css`
          html {
            font-size: calc(0.6em + 1vw);
            color: #888;
          }
          body {
            margin: 0;
            padding: 0;
            font-family: 'Helvetica Neue', 'Segoe UI', Roboto, -apple-system,
              system-ui, BlinkMacSystemFont, Arial, sans-serif;
            background-color: #efefef;
            height: 100vh;
            width: 100vw;
            overflow: hidden;
          }
          body * {
            box-sizing: border-box;
          }

          #app {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
          }
        `}
      />
      <Management tooth={tooth} />
      <Tab tabs={odontogramTypes} selected={currentType} handleTab={handleTab}>
        <Odontogram
          types={ODONTOGRAM_TYPES}
          currentType={currentType}
          quadrants={QUADRANTS}
          isDescriptive={true}
          handleHovering={handleHovering}
        />
      </Tab>
    </Fragment>
  );
};
export default App;
