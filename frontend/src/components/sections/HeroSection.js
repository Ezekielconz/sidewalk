"use client";

import Section from "./Section";
import styles from "../../app/page.module.css";

export default function HeroSection() {
  return (
    <Section id="hero" title="sidewalk" className={styles.hero}>
      <div className={styles.heroInner}>
        {/* Text on top, centered */}
        <div className={styles.heroText}>
          <h1>breakaway from the cookiecutter</h1>
          <p className={styles.lead}>
            handcrafted websites and designs to express who you are
          </p>
          <div className={styles.actionsLeft}>
            <a className={styles.primaryCta} href="/contact">
              start a project
            </a>
            <a className={styles.secondaryCta} href="/portfolio">
              see our work
            </a>
          </div>
        </div>

        {/* Decorative image centered behind text */}
        <div className={styles.heroImage} aria-hidden="true">
          <img
            src="/images/hero_flicker.apng"
            alt=""
            className={styles.flickerImage}
          />
        </div>
      </div>
    </Section>
  );
}
