"use client";

import Section from "./Section";
import styles from "../../app/page.module.css";

export default function TechSection() {
  return (
    <Section id="tech" title="tech & platforms" className={styles.tech}>
      <div className={styles.splitInner}>
        <div className={styles.splitText}>
          <h2 className={styles.splitTitle}>tech & platforms</h2>
          <p className={styles.splitNote}>
            we specialize in next.js, react, shopify, vercel, and netlify, but
            we’re flexible, and can work with whatever tools you prefer.
          </p>
        </div>

        <img
          src="/images/section-tech.apng"
          alt=""
          aria-hidden="true"
          className={styles.splitImage}
        />
      </div>
    </Section>
  );
}
