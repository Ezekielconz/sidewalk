"use client";

import Section from "./Section";
import styles from "../../app/page.module.css";

export default function WhySection() {
  return (
    <Section id="why-us" title="why us" className={styles.why}>
      <div className={styles.whyGridOuter}>
        {/* Left column: Title + intro */}
        <div className={styles.whyText}>
          <h2 className={styles.whyTitle}>why sidewalk</h2>
          <p className={styles.whyIntro}>
            we combine creativity, technical skill, and local values to deliver
            digital experiences that last.
          </p>
        </div>

        {/* Right column: Why items stacked */}
        <div className={styles.whyItems}>
          <div className={styles.whyItem}>
            <img
              src="/images/section-why-craft.apng"
              alt="Craft, not templates"
              className={styles.whyIcon}
            />
            <p>
              <strong>craft, not templates:</strong> design tuned to your brand and goals.
            </p>
          </div>
          <div className={styles.whyItem}>
            <img
              src="/images/section-why-performance.apng"
              alt="Performance first"
              className={styles.whyIcon}
            />
            <p>
              <strong>performance first:</strong> speed, accessibility and SEO baked in from day one.
            </p>
          </div>
          <div className={styles.whyItem}>
            <img
              src="/images/section-why-local.apng"
              alt="Local & dependable"
              className={styles.whyIcon}
            />
            <p>
              <strong>local &amp; dependable:</strong> nelson locals
            </p>
          </div>
          <div className={styles.whyItem}>
            <img
              src="/images/section-why-idea.apng"
              alt="From idea to launch"
              className={styles.whyIcon}
            />
            <p>
              <strong>from idea to launch:</strong> strategy, design, build, and ongoing care.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
