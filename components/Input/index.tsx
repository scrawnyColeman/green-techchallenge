import React, { InputHTMLAttributes } from "react";
import Styles from "./assets/scss/Input.module.scss";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label: string;
};

const classMap = {
  text: "textInput",
};

const Input: React.FC<Props> = ({ label, name, ...props }): JSX.Element => {
  if (props.type === "checkbox") {
    return (
      <div className={Styles.checkboxWrapper}>
        <input id={name} {...props} defaultChecked />
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
      <input id={name} {...props} className={Styles[classMap[props.type]]} />
    </div>
  );
};

export default Input;
