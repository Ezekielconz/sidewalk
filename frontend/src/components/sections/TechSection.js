"use client";

import Section from "./Section";
import styles from "../../app/page.module.css";

export default function TechSection() {
  return (
    <Section id="tech" title="tech & platforms" className={styles.tech}>
      <div className={styles.techInner}>
        {/* Left content */}
        <div className={styles.techText}>
          <h2 className={styles.techTitle}>tech & platforms</h2>
          <p className={styles.techNote}>
            we specialize in next.js, react, shopify, vercel, and netlify, but
            we’re flexible, and can work with whatever tools you prefer.
          </p>
        </div>

        {/* Right illustration (becomes decorative bg on mobile) */}
        <img
          src="/images/section-tech.apng"
          alt=""
          aria-hidden="true"
          className={styles.techImage}
        />
      </div>
    </Section>
  );
}
