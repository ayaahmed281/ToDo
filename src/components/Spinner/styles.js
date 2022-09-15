import styled from "@emotion/styled";

export const Container = styled.div`
  display: inline-block;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  right: 0;
  background: #2b2f3229;

  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 100px;
    height: 100px;
    margin: 8px;
    border: 8px solid #169ad6;
    border-radius: 50%;
    animation: loadingSpinner 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #169ad6 transparent transparent transparent;
    right: 0;
    left: 0;
    margin: auto;
    top: 0;
    bottom: 0;

    &:nth-of-type(1) {
      animation-delay: -0.45s;
    }
    &:nth-of-type(2) {
      animation-delay: -0.3s;
    }
    &:nth-of-type(3) {
      animation-delay: -0.15s;
    }
  }

  @keyframes loadingSpinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
