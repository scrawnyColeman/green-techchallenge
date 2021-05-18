import React from "react";
import GreenForm from "../components/GreenForm";
import styles from "../styles/Home.module.scss";

const Home: React.FC = (): JSX.Element => {
  return (
    <div className={styles.homepage} data-testid="form-container">
      <GreenForm />
    </div>
  );
};

export default Home;
