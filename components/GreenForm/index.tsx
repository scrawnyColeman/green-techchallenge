import React from "react";
import Button from "../Button";
import GreenLogo from "../GreenLogo";
import Input from "../Input";
import styles from "./assets/scss/GreenForm.module.scss";

const GreenForm: React.FC = (): JSX.Element => {
  return (
    <div className={styles.formWrapper}>
      <div>
        <GreenLogo />
        <h2 className={styles.formTitle}>Operations studio</h2>
        <p className={styles.formSubtitle}>Please enter your email below</p>
      </div>
      <form
        data-testid="form"
        className={styles.form}
        onSubmit={(e) => e.preventDefault()}
      >
        <div>
          <Input type="email" label="Email Address" name="email-login" />
          <Input
            type="checkbox"
            label="Remember this device"
            name="remember-this-device"
          />
        </div>
        <Button
          label="Sign In"
          type="submit"
          onClick={(e) => e.preventDefault()}
        />
      </form>
    </div>
  );
};

export default GreenForm;
