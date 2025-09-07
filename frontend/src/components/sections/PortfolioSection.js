"use client";

import Image from "next/image";
import Section from "./Section";
import styles from "../../app/page.module.css";

export default function PortfolioSection() {
  return (
    <Section id="portfolio" title="our work" className={styles.portfolio}>
      <div className={styles.portfolioGrid}>
        
        {/* Left text */}
        <div className={styles.portfolioText}>
          <h2 className={styles.portfolioTitle}>featured work</h2>
          <p className={styles.portfolioIntro}>
            a selection of recent projects, showcasing how we help brands stand
            out with thoughtful design and clean code.
          </p>
        </div>

        {/* Right images */}
        <div className={styles.portfolioItems}>
          <div className={styles.portfolioItem}>
            <Image
              src="/images/portfolio1.apng"
              alt="brand 1"
              width={400}
              height={250}
              className={styles.portfolioImage}
            />
            <p>brand 1</p>
          </div>

          <div className={styles.portfolioItem}>
            <Image
              src="/images/portfolio2.apng"
              alt="brand 2"
              width={400}
              height={250}
              className={styles.portfolioImage}
            />
            <p>brand 2</p>
          </div>

          <div className={styles.portfolioItem}>
            <Image
              src="/images/portfolio3.apng"
              alt="brand 3"
              width={400}
              height={250}
              className={styles.portfolioImage}
            />
            <p>brand 3</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
