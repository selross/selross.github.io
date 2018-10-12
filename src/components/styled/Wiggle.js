import { css } from 'styled-components';

export function createWiggle(degree) {
  return css`
    @keyframes wiggle {
      0% { transform: rotate(${degree}deg); }
      10% { transform: rotate(-${degree}deg); }
      20% { transform: rotate(${degree}deg); }
      30% { transform: rotate(-${degree}deg); }
      40% { transform: rotate(${degree}deg); }
      50% { transform: rotate(-${degree}deg); }
      60% { transform: rotate(${degree}deg); }
      70% { transform: rotate(-${degree}deg); }
      80% { transform: rotate(${degree}deg); }
      90% { transform: rotate(-${degree}deg); }
      100% { transform: rotate(${degree}deg); }
    }
    :hover {
      // cursor: not-allowed;
      animation-duration: 450ms;
      animation-timing-function: linear;
      animation-iteration-count: 1;
      animation-name: wiggle;
    }
  `;
}
