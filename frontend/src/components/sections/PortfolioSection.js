"use client";

import Image from "next/image";
import Section from "./Section";
import styles from "../../app/page.module.css";

const CLIENT_LOGOS = [
  {
    src: "/portfolio/underthehood.webp",
    alt: "Under The Hood BBQ logo",
    href: "https://underthehoodbbq.co.nz/",
  },
  {
    src: "/portfolio/richmondafc.webp",
    alt: "Richmond AFC logo",
    href: "https://www.richmondathletic.co.nz/",
  },
  {
    src: "/portfolio/kiwiexplorer.webp",
    alt: "Kiwi Explorers logo",
    href: "https://www.kiwiexplorers.co.nz/",
  },
];

export default function PortfolioSection() {
  return (
    <Section id="portfolio" title="our work" className={styles.portfolio}>
      <div className={styles.portfolioGrid}>
        <div className={styles.portfolioText}>
          <h2 className={styles.portfolioTitle}>featured work</h2>
          <p className={styles.portfolioIntro}>
            a selection of recent projects, showcasing how we help brands stand
            out with thoughtful design and clean code.
          </p>
        </div>

        <ul className={styles.portfolioItems}>
          {CLIENT_LOGOS.map((logo) => (
            <li className={styles.portfolioItem} key={logo.src}>
              <a
                className={styles.logoLink}
                href={logo.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${logo.alt} — opens in a new tab`}
                title="Opens in a new tab"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={160}
                  height={160}
                  className={styles.portfolioImage}
                  sizes="(max-width: 520px) 33vw, (max-width: 900px) 33vw, 160px"
                  loading="eager"
                  quality={66}
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
