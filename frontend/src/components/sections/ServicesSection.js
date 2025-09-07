"use client";

import Image from "next/image";
import Section from "./Section";
import styles from "../../app/page.module.css";

export default function ServicesSection() {
  return (
    <Section id="services" title="services" className={styles.services}>
      <div className={styles.servicesGrid}>
        
        {/* Left text */}
        <div className={styles.servicesText}>
          <h2 className={styles.servicesTitle}>services</h2>
          <p className={styles.servicesIntro}>
            from branding foundations to custom websites and ongoing growth, we’ve got you covered.
          </p>
        </div>

        {/* Right items */}
        <div className={styles.servicesItems}>
          <div className={styles.serviceItem}>
            <Image
              src="/images/section-services-1.apng"
              alt="brand identity"
              width={120}
              height={120}
              className={styles.serviceIcon}
            />
            <h3>brand identity</h3>
            <p>naming, logo, colour, typography</p>
          </div>
          
          <div className={styles.serviceItem}>
            <Image
              src="/images/section-services-2.apng"
              alt="web design and development"
              width={120}
              height={120}
              className={styles.serviceIcon}
            />
            <h3>web design &amp; development</h3>
            <p>static (portfolio), cms, e-commerce (shopify) sites.</p>
          </div>
          
          <div className={styles.serviceItem}>
            <Image
              src="/images/section-services-3.apng"
              alt="care and growth"
              width={120}
              height={120}
              className={styles.serviceIcon}
            />
            <h3>care &amp; growth</h3>
            <p>hosting, monitoring, seo, content support and continuous improvements.</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
