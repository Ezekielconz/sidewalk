"use client";

import Image from "next/image";
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

        {/* Right illustration */}
        <div className={styles.techImage}>
          <Image
            src="/images/section-tech.apng"
            alt="Tech illustration"
            width={400}
            height={400}
          />
        </div>
      </div>
    </Section>
  );
}
