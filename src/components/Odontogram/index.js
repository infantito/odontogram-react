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

            &:not(:first-child):not(:last-child) {
              &:nth-child(even) {
                border-top: 1.5px solid #ccc;
              }

              &:nth-child(odd) {
                border-bottom: 1.5px solid #ccc;
              }
            }

            &:nth-child(even) {
              & > *:first-child {
                border-right: 1.5px solid #ccc;
              }

              & > *:last-child {
                border-left: 1.5px solid #ccc;
              }
            }

            &:nth-child(odd) {
              & > *:first-child {
                border-right: 1.5px solid #ccc;
              }

              & > *:last-child {
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
                    font-size: 1rem;
                    font-weight: 600;
                    margin: 0 auto;
                    padding: 1rem;
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
