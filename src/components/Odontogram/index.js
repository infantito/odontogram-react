import React, { Fragment } from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import Quadrant from '/components/Odontogram/Quadrant';
import odontogram from '/constants/odontogram';
import denture from '/constants/quadrants';
import { predicateTotal } from '/constants/utils';

const Odontogram = props => {
  const typesLength = props.types.length;
  const dentures = props.types.map((_, master) => odontogram(master)).flat();

  return (
    <Fragment>
      <article className="odontogram">
        <section
          css={css`
            display: flex;
            flex-direction: column-reverse;
            justify-content: center;
            align-items: center;
            font-size: 0;
            text-align: center;
            padding: 1rem;
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
            const isDisabled = predicateTotal(
              props.currentType.id,
              teeth,
              typesLength,
            );

            quadrants.splice(
              ~mod,
              0,
              <fieldset
                key={index}
                css={css`
                  border: 0;
                  margin: 0;
                  padding: 0;

                  &:disabled {
                    polygon {
                      fill: #ccc;
                      fill-opacity: 1;
                    }
                  }
                `}
                disabled={isDisabled}
              >
                {teeth.map((quadrant, key) => (
                  <Quadrant
                    teeth={quadrant}
                    key={key}
                    position={mod}
                    quadrant={{ name: denture[mod][key], position: index }}
                    name={
                      props.isDescriptive
                        ? !index ||
                          (mod && quadrants.length + 1 !== source.length)
                          ? props.quadrants[mod][key]
                          : null
                        : null
                    }
                    handleHovering={props.handleHovering}
                    className={css`
                      font-size: 0.75rem;
                      font-weight: 600;
                      margin: 0 auto;
                      padding: 0.275rem;
                    `}
                  />
                ))}
              </fieldset>,
            );

            return quadrants;
          }, [])}
        </section>
      </article>
    </Fragment>
  );
};

export default Odontogram;
