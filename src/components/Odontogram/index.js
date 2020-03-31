import React from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import Quadrant from './Quadrant';
import denture from '../../constants/quadrants';
import odontogram from '../../constants/odontogram';

const Odontogram = props => {
  const typesLength = props.types.length;
  const dentures = props.types.map((_, master) => odontogram(master)).flat();

  return (
    <div className="odontogram">
      <div
        css={css`
          display: flex;
          flex-direction: column-reverse;
          justify-content: center;
          align-items: center;
          font-size: 0;
          text-align: center;
          & > * {
            width: 100%;

            &:not(:first-of-type):not(:last-of-type) {
              &:nth-of-type(even) {
                border-top: 1.5px solid #ccc;
              }

              &:nth-of-type(odd) {
                border-bottom: 1.5px solid #ccc;
              }
            }

            &:nth-of-type(even) {
              & > *:first-of-type {
                border-right: 1.5px solid #ccc;
              }

              & > *:last-of-type {
                border-left: 1.5px solid #ccc;
              }
            }

            &:nth-of-type(odd) {
              & > *:first-of-type {
                border-right: 1.5px solid #ccc;
              }

              & > *:last-of-type {
                border-left: 1.5px solid #ccc;
              }
            }
          }
        `}
      >
        {dentures.reduce((quadrants, teeth, index, source) => {
          const mod = index % typesLength;

          quadrants.splice(
            ~mod,
            0,
            <div key={index}>
              {teeth.map((quadrant, key) => (
                <Quadrant
                  teeth={quadrant}
                  key={key}
                  position={mod}
                  quadrant={denture[mod][key]}
                  name={
                    props.isDescriptive
                      ? !index ||
                        (mod && quadrants.length + 1 !== source.length)
                        ? props.quadrants[mod][key]
                        : null
                      : null
                  }
                  className={css`
                    font-size: 0.75rem;
                    font-weight: 600;
                    margin: 0 auto;
                    padding: 0.275rem;
                  `}
                />
              ))}
            </div>,
          );

          return quadrants;
        }, [])}
      </div>
    </div>
  );
};

export default Odontogram;
