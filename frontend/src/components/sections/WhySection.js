"use client";

import Image from "next/image";
import Section from "./Section";
import styles from "../../app/page.module.css";

export default function WhySection() {
  return (
    <Section id="why-us" title="why us" className={styles.why}>
      <div className={styles.listSectionGrid}>
        <div className={styles.listSectionText}>
          <h2 className={styles.listSectionTitle}>why sidewalk</h2>
          <p className={styles.listSectionIntro}>
            we combine creativity, technical skill, and local values to deliver digital experiences that last.
          </p>
        </div>

        <div className={styles.listItems}>
          <div className={styles.listItem}>
            <Image
              src="/images/section-why-craft.apng"
              alt="craft, not templates"
              width={120}
              height={120}
              className={styles.listIcon}
            />
            <p>
              <strong>craft, not templates</strong> design tuned to your brand and goals.
            </p>
          </div>

          <div className={styles.listItem}>
            <Image
              src="/images/section-why-performance.apng"
              alt="performance first"
              width={120}
              height={120}
              className={styles.listIcon}
            />
            <p>
              <strong>performance first</strong> speed, accessibility and SEO baked in from day one.
            </p>
          </div>

          <div className={styles.listItem}>
            <Image
              src="/images/section-why-local.apng"
              alt="local & dependable"
              width={120}
              height={120}
              className={styles.listIcon}
            />
            <p>
              <strong>local & dependable</strong> nelson locals looking to make a difference.
            </p>
          </div>

          <div className={styles.listItem}>
            <Image
              src="/images/section-why-idea.apng"
              alt="from idea to launch"
              width={120}
              height={120}
              className={styles.listIcon}
            />
            <p>
              <strong>from idea to launch</strong> strategy, design, build, and ongoing care.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
