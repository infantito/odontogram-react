import React from 'react';
import ReactDOM from 'react-dom';
import { Global, css } from '@emotion/core';
import Odontogram from './components/Odontogram';
import { ODONTOGRAM_TYPES } from './constants/odontogram';
import QUADRANTS from './constants/quadrants';

ReactDOM.render(
  <React.Fragment>
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
        }
      `}
    />
    <Odontogram
      types={ODONTOGRAM_TYPES}
      quadrants={QUADRANTS}
      isDescriptive={true}
    />
  </React.Fragment>,
  document.getElementById('app'),
);

if (module.hot) {
  module.hot.accept();
}
