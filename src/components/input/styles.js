import styled from "@emotion/styled";

import { colors } from "../../assets/colors.js";
import TickIcon from "../../assets/svg/add.svg";
import WarningIcon from "../../assets/svg/arrow-left.svg";

export const InputContainerBase = ({ className, children, ...rest }) => (
  <div className={`InputComponent ${className}`} {...rest}>
    {children}
  </div>
);

export const InputWrapper = styled(InputContainerBase)`
  width: 100%;
  display: block;
  position: relative;
  margin: 32px 0;

  input {
    width: 100%;
    border: 1px solid #666;
    padding: 12px;
    scroll-margin: 20px;
    border-radius: 6px;
    box-sizing: border-box;
    font-size: 18px;
    font-family: "VodafoneRg", sans-serif;
    margin-left: 40px;

    &:focus,
    &:focus-visible {
      border: 1px solid ${colors.inputFocus};
      outline: 1px solid ${colors.inputFocus};
      outline-offset: -1px;
    }

    &:focus + label {
      color: ${colors.inputFocus};
    }

    &:focus + label,
    &:not(:placeholder-shown) + label {
      font-size: 14px;
      top: -5px;
      left: 8px;
      padding: 0 5px;
      z-index: 1;
    }

    &:focus::placeholder {
      opacity: 0;
    }
  }

  &.invalid {
    input {
      outline: none;
      border: 1px solid ${colors.inputInvalid};

      &:focus,
      &:focus-visible {
        border: 1px solid ${colors.inputInvalid};
        outline: 1px solid ${colors.inputInvalid};
      }
      &:focus + label {
        color: ${colors.inputInvalid};
      }
    }
    label {
      color: ${colors.inputInvalid};
    }

    .invalidInputMessage {
      margin: 4px 0px 0px 0px;
      padding: 0px 0 0px 24px;
      color: ${colors.inputInvalid};
      background: url(${WarningIcon}) no-repeat left center;
      background-size: 18px;
      font-size: 14px;
      line-height: 18px;
    }
  }

  label {
    background: #fff;
    position: absolute;
    width: auto;
    top: 12px;
    left: 12px;
    pointer-events: none;
    z-index: -1;
    color: #333;
    font-family: "VodafoneRg", sans-serif;
  }
`;

export const CheckBoxWrapper = styled(InputContainerBase)`
  display: grid;
  grid-template-columns: 35px auto;
  grid-template-rows: auto auto;
  grid-template-areas: "input label";
  grid-gap: 25px;

  margin: 16px input {
    grid-area: input;
    -webkit-appearance: none;
    -moz-appearance: none;
    -o-appearance: none;
    background: #fff;
    position: relative;
    border: 1px solid #999999;
    border-radius: 3px;
    width: 20px;
    height: 20px;
    margin: 4px 0 0 0;

    &:checked {
      background: #007c92 url(${TickIcon});
    }
  }

  label {
    grid-area: label;
    margin-top: 0.1rem;
    font-size: 14px;
    font-family: "VodafoneRg", sans-serif;
    line-height: 18px;
    color: #666;
    font-weight: bold;
    span {
      display: inline-block;
      line-height: 1.4rem;

      button {
        font-size: 14px;
      }
    }
  }
`;

export const ToggleSwitch = styled(InputContainerBase)`
  position: relative;
  display: grid;
  grid-template-columns: 60px auto;
  grid-gap: 8px;
  margin-bottom: 1rem;

  input {
    -webkit-appearance: none;
    -moz-appearance: none;
    -o-appearance: none;
    cursor: pointer;
    width: 60px;
    height: 30px;
    background-color: #999;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 34px;
    position: relative;
    margin: 0;

    &:before {
      position: absolute;
      content: "";
      height: 26px;
      width: 26px;
      left: 2px;
      top: 2px;
      background-color: white;
      -webkit-transition: 0.4s;
      transition: 0.4s;
      border-radius: 50%;
    }

    &:checked {
      background-color: #007d93;
    }

    &:checked:before {
      left: auto;
      right: 2px;
      top: 2px;
    }
  }

  label {
    margin-top: 0.1rem;
    font-size: 14px;
    font-family: "VodafoneRg", sans-serif;
    line-height: 18px;
    color: #666;

    span {
      display: inline-block;
      line-height: 1.4rem;
    }
  }
`;

export const ToggleSwitchSmall = styled(InputContainerBase)`
  position: relative;
  display: grid;
  grid-template-columns: 60px auto;
  grid-gap: 8px;
  margin-bottom: 1rem;

  input {
    -webkit-appearance: none;
    -moz-appearance: none;
    -o-appearance: none;
    cursor: pointer;
    width: 28px;
    height: 20px;
    background-color: #999;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 34px;
    position: relative;
    margin: 0;

    &:before {
      position: absolute;
      content: "";
      height: 16px;
      width: 16px;
      left: 2px;
      top: 2px;
      background-color: white;
      -webkit-transition: 0.4s;
      transition: 0.4s;
      border-radius: 50%;
    }

    &:checked {
      background-color: #428501;
    }

    &:checked:before {
      left: auto;
      right: 2px;
      top: 2px;
    }
  }

  label {
    margin-top: 0.1rem;
    font-size: 14px;
    font-family: "VodafoneRg", sans-serif;
    line-height: 18px;
    color: #666;

    span {
      display: inline-block;
      line-height: 1.4rem;
    }
  }
`;
