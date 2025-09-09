"use client";

import Image from "next/image";
import Section from "./Section";
import styles from "../../app/page.module.css";

export default function ServicesSection() {
  return (
    <Section id="services" title="services" className={styles.services}>
      <div className={styles.listSectionGrid}>
        <div className={styles.listSectionText}>
          <h2 className={styles.listSectionTitle}>services</h2>
          <p className={styles.listSectionIntro}>
            from branding foundations to custom websites and ongoing growth, we’ve got you covered.
          </p>
        </div>

        <div className={styles.listItems}>
          <div className={styles.listItem}>
            <Image
              src="/images/section-services-1.apng"
              alt="brand identity"
              width={120}
              height={120}
              className={styles.listIcon}
            />
            <p>
              <strong>brand identity</strong> naming, logo, colour, typography.
            </p>
          </div>

          <div className={styles.listItem}>
            <Image
              src="/images/section-services-2.apng"
              alt="web design & development"
              width={120}
              height={120}
              className={styles.listIcon}
            />
            <p>
              <strong>web design &amp; development</strong> static (portfolio), CMS, e-commerce (Shopify) sites.
            </p>
          </div>

          <div className={styles.listItem}>
            <Image
              src="/images/section-services-3.apng"
              alt="care & growth"
              width={120}
              height={120}
              className={styles.listIcon}
            />
            <p>
              <strong>care &amp; growth</strong> hosting, monitoring, SEO, content support, and continuous improvements.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
