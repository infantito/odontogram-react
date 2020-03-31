import React from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import Quadrant from './Quadrant';
import denture from '../../constants/quadrants';
import odontogram from '../../constants/odontogram';

const Odontogram = ({ types }) => {
  return (
    <div className="odontogram">
      <div
        css={css`
          border: 1.5px solid #ccc;
          display: inline-block;
          vertical-align: middle;
          font-size: 0;
          text-align: center;
        `}
      >
        {types.map((_, master) =>
          odontogram(master).map((quadrants, index) => {
            return (
              <div key={index}>
                {quadrants.map((quadrant, key) => (
                  <Quadrant
                    teeth={quadrant}
                    key={key}
                    position={index}
                    quadrant={denture[index][key]}
                  />
                ))}
              </div>
            );
          }),
        )}
      </div>
    </div>
  );
};

import React from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import Quadrant from './Quadrant';
import denture from '../../constants/quadrants';
import odontogram from '../../constants/odontogram';

const OdontogramType = ({ index, quadrants }) => {
  return (
    <div>
      {quadrants.map((quadrant, key) => (
        <Quadrant
          teeth={quadrant}
          key={key}
          position={index}
          quadrant={denture[index][key]}
        />
      ))}
    </div>
  );
};

const Odontogram = ({ types }) => {
  const typesLength = types.length;
  const flattenOdontogram = types.map((_, master) => odontogram(master)).flat();

  return (
    <div className="odontogram">
      <div
        css={css`
          border: 1.5px solid #ccc;
          display: inline-block;
          vertical-align: middle;
          font-size: 0;
          text-align: center;
        `}
      >
        {flattenOdontogram.reduce((quadrants, current, index) => {
          const mod = index % typesLength;

          quadrants.splice(
            quadrants.length - (mod ^ 1),
            0,
            <OdontogramType index={mod} quadrants={current} key={index} />,
          );

          return quadrants;
        }, [])}
      </div>
    </div>
  );
};

export default Odontogram;

export default Odontogram;
