import React, { InputHTMLAttributes } from "react";
import Styles from "./assets/scss/Input.module.scss";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label: string;
  inputType?: string;
};

const classMap = {
  checkbox: "checkbox",
  text: "textInput",
};

const Input: React.FC<Props> = ({
  label,
  name,
  inputType = "text",
  ...props
}): JSX.Element => {
  if (inputType === "checkbox") {
    return (
      <div className={Styles.checkboxWrapper}>
        <input
          id={name}
          {...props}
          className={Styles[classMap[inputType]]}
          defaultChecked
        />
        <label htmlFor={name} className={Styles.checkboxLabel}>
          {label}
        </label>
      </div>
    );
  }
  return (
    <div className={Styles.inputWrapper}>
      <label htmlFor={name} className={Styles.inputLabel}>
        {label}
      </label>
      <input id={name} {...props} className={Styles[classMap[inputType]]} />
    </div>
  );
};

export default Input;
