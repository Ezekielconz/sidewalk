"use client";

import Image from "next/image";
import Section from "./Section";
import styles from "../../app/page.module.css";

export default function AboutSection() {
  return (
    <Section id="about" title="about" className={styles.about}>
      <div className={styles.splitInner}>
        <div className={styles.splitText}>
          <h2 className={styles.splitTitle}>we are sidewalk</h2>
          <p className={styles.splitNote}>
            a nelson-based creative duo crafting websites and brands with care.
            we believe in building digital experiences that feel personal,
            local, and timeless.
          </p>
          <div className={styles.actionsLeft}>
            <a className={styles.primaryCta} href="/about">learn more →</a>
          </div>
        </div>

        <Image
          src="/images/section-about.webp"
          alt="Hand-drawn animated coffee mug illustration, representing Sidewalk’s creative style"
          className={styles.splitImage}
          width={348}          
          height={444}        
          quality={68}     
          sizes="(max-width: 768px) 100vw, 50vw"
          loading="eager"       
        />
      </div>
    </Section>
  );
}
