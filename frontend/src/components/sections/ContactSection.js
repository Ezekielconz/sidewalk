"use client";

import Section from "./Section";
import styles from "../../app/page.module.css";

export default function ContactSection() {
  return (
    <Section id="contact" title="let's talk" className={styles.contact}>
      <div className={styles.contactInner}>
        {/* Left content */}
        <div className={styles.contactText}>
          <h2 className={styles.contactTitle}>let’s build something great</h2>
          <p className={styles.contactNote}>tell us about your business and goals</p>
          <a className={styles.primaryCta} href="/contact">
            contact us
          </a>
        </div>

        {/* Right illustration (becomes decorative bg on mobile) */}
        <img
          src="/images/section-contact2.apng"
          alt=""
          aria-hidden="true"
          className={styles.contactImage}
        />
      </div>
    </Section>
  );
}
