import React from 'react';
import { Global, css } from '@emotion/core';
import Odontogram from '/components/Odontogram';
import Management from '/components/Management';
import { OdontogramContextProvider } from '/components/Management/OdontogramContext';
import Tab from '/components/Control/Tab';
import { ODONTOGRAM_TYPES } from '/constants/odontogram';
import QUADRANTS from '/constants/quadrants';
import { formatJoinId } from '/constants/utils';
import Wallpaper from '/wallpaper.jpg';

const odontogramTypes = formatJoinId(ODONTOGRAM_TYPES, 'amount', [
  { title: 'Mixed', amount: 0 },
]);

const App = () => {
  return (
    <OdontogramContextProvider>
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
            position: relative;

            &:after {
              content: '';
              background-image: url(${Wallpaper});
              background-repeat: no-repeat;
              background-position: center center;
              background-size: cover;
              opacity: 0.25;
              top: 0;
              left: 0;
              bottom: 0;
              right: 0;
              position: absolute;
              z-index: -1;
            }
          }
        `}
      />
      <Management />
      <Tab tabs={odontogramTypes} keyName="types">
        {selected => (
          <Odontogram
            types={ODONTOGRAM_TYPES}
            currentType={selected}
            quadrants={QUADRANTS}
            isDescriptive={true}
          />
        )}
      </Tab>
    </OdontogramContextProvider>
  );
};
export default App;
