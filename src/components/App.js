import React, { Fragment } from 'react';
import { Global, css } from '@emotion/core';
import Odontogram from '/components/Odontogram';
import Management from '/components/Management';
import { ODONTOGRAM_TYPES } from '/constants/odontogram';
import QUADRANTS from '/constants/quadrants';

const App = () => {
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
  const [tooth, setTooth] = React.useState({});

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
      <Odontogram
        types={ODONTOGRAM_TYPES}
        quadrants={QUADRANTS}
        isDescriptive={true}
        handleHovering={handleHovering}
      />
    </Fragment>
  );
};
export default App;