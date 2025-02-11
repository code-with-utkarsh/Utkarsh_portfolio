import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Hi, I'm <span>Utkarsh</span>
        </h1>
        <p className={styles.description}>
          Project intern @Infosys Springboard l Pre-Final Year CUHP'24 |
          Technical Head @ National Service Scheme | Contributor
          @Hacktoberfest22
        </p>
        <a
          href="https://drive.google.com/file/d/1lt74Hp2Sn4NeZ3nBfiqcnWUz8zivtlS3/view?usp=drive_link"
          className={styles.contactBtn}
        >
          Resume
        </a>
      </div>
      <img
        src="/utkarsh.jpg"
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
