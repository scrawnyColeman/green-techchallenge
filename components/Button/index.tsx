import React, { ButtonHTMLAttributes } from "react";
import { Variants, Sizes } from "../../constants/enums";
import Styles from "./assets/scss/Button.module.scss";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: Sizes;
  variant?: Variants;
  label: string;
};

const Button: React.FC<Props> = ({
  label,
  size = Sizes.REGULAR,
  variant = Variants.PRIMARY,
  ...props
}): JSX.Element => {
  const sizeClass = Styles[`${size}Btn`];
  const variantClass = Styles[`${variant}Btn`];

  return (
    <button
      aria-label={label}
      className={`${sizeClass} ${variantClass} ${Styles.btn}`}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
