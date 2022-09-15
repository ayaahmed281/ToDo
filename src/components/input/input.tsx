import {
  CheckBoxWrapper,
  InputWrapper,
  ToggleSwitch,
  ToggleSwitchSmall,
} from "./styles";

type inputType = {
    Wrapper?: any,
    value?: any,
    label: any,
    id: any,
    inputRef?: any,
    type?: string | undefined,
    size?: string | undefined,
    checked?: boolean | undefined,
    invalid?: boolean | undefined,
    warningMessage?: any,
    children?: any,
    name?: any,
    onChange:any
}
export const Input: React.FC<inputType>  = ({
  Wrapper,
  value,
  label,
  id,
  inputRef,
  type = "text",
  size = "normal",
  checked = false,
  invalid = false,
  warningMessage,
  children,
  name,
  ...rest
}) => {
  const refId = id;
  let Container;

  switch (type) {
    case "checkbox": {
      Container = CheckBoxWrapper;
      break;
    }
    case "toggle": {
      Container = size === "normal" ? ToggleSwitch : ToggleSwitchSmall;
      break;
    }
    default: {
      Container = InputWrapper;
    }
  }

  if (Wrapper) {
    Container = Wrapper;
  }
  let checkedProps:any = {};

  if (["checkbox", "toggle"].includes(type)) {
    checkedProps["aria-checked"] = checked;
    checkedProps.checked = checked;
  }

  return (
    <Container className={invalid ? "invalid" : ""}>
      <input
        id={refId}
        value={value}
        ref={inputRef}
        type={type !== "toggle" ? type : "checkbox"}
        placeholder={label}
        name={name}
        {...checkedProps}
        {...rest}
      />
      {label && <label htmlFor={refId}>{label}</label>}
      {invalid && <div className="invalidInputMessage">{warningMessage}</div>}
      {children}
    </Container>
  );
};

export default Input;
