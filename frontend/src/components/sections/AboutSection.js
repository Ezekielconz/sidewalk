"use client";

import Section from "./Section";
import styles from "../../app/page.module.css";

export default function AboutSection() {
  return (
    <Section id="about" title="about" className={styles.about}>
      <div className={styles.aboutGrid}>
        {/* Left text */}
        <div className={styles.aboutText}>
          <h2>we are sidewalk</h2>
          <p className={styles.aboutIntro}>
            a nelson-based creative duo crafting websites and brands with care.
            we believe in building digital experiences that feel personal,
            local, and timeless.
          </p>
          <div className={styles.actionsLeft}>
            <a className={styles.primaryCta} href="/about">
              learn more →
            </a>
          </div>
        </div>

        {/* Right image (becomes decorative background on mobile) */}
        <img
          src="/images/section-about.apng"
          alt=""
          aria-hidden="true"
          className={styles.aboutImage}
        />
      </div>
    </Section>
  );
}
