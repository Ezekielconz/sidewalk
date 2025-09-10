"use client";

import Section from "./Section";
import styles from "../../app/page.module.css";

export default function ContactSection() {
  return (
    <Section id="contact" title="let's talk" className={styles.contact}>
      <div className={styles.splitInner}>
        <div className={styles.splitText}>
          <h2 className={styles.splitTitle}>let’s build something great</h2>
          <p className={styles.splitNote}>tell us about your business and goals</p>
          <a className={styles.primaryCta} href="/contact">contact us</a>
        </div>

        <img
          src="/images/section-contact2.webp"
          alt="Hand-drawn illustration of Earth with an envelope, symbolizing global contact"
          aria-hidden="true"
          className={styles.splitImage}
        />
      </div>
    </Section>
  );
}
