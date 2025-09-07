"use client";

import { useRef, useEffect, useState } from "react";
import base from "../page.module.css";
import styles from "./About.module.css";
import Section from "../../components/sections/Section";

const SECTIONS = [
  { id: "hero", label: "Home" },
  { id: "values", label: "Our values" },
  { id: "team", label: "Team" },
];

export default function AboutPage() {
  const containerRef = useRef(null);
  const [active, setActive] = useState(SECTIONS[0].id);

  useEffect(() => {
    const sectionEls = Array.from(document.querySelectorAll(`.${base.section}`));
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      { root: null, threshold: 0.6 }
    );
    sectionEls.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  const handleClick = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      {/* Dot nav */}
      <nav className={base.dotWrap} aria-label="Section navigation">
        <ul className={base.dots}>
          {SECTIONS.map((s) => (
            <li key={s.id} className={base.dotItem}>
              <button
                type="button"
                aria-label={s.label}
                aria-current={active === s.id ? "true" : "false"}
                className={`${base.dot} ${active === s.id ? base.active : ""}`}
                onClick={() => handleClick(s.id)}
              />
            </li>
          ))}
        </ul>
      </nav>

      {/* Snap container */}
      <div ref={containerRef} className={base.snapContainer}>
        {/* HERO */}
        <Section id="hero" title="sidewalk" className={`${base.hero} ${styles.hero}`}>
          <div className={base.heroInner}>
            <div className={base.heroText}>
              <h1>we are sidewalk</h1>
              <p className={base.lead}>we’re a nelson-based duo passionate about crafting websites and building brands that connect. At Sidewalk, we bring design and development together to help companies stand out online.</p>
              <div className={base.actionsLeft}>
                <a className={base.primaryCta} href="/contact">start a project</a>
                <a className={base.secondaryCta} href="/portfolio">see our work</a>
              </div>
            </div>
            <div className={base.heroImage}>
              <img
                src="/images/about-hero.apng"
                alt="Hand-drawn flicker illustration"
                className={base.flickerImage}
              />
            </div>
          </div>
        </Section>

        {/* VALUES */}
        <Section id="values" title="values" className={styles.values}>
          <div className={base.whyGridOuter}>
            <div className={base.whyText}>
              <h2 className={styles.titleTight}>what we stand for</h2>
              <p className={base.whyIntro}>
                we focus on clarity, distinctiveness, and speed. design that helps people make decisions with confidence.
              </p>
            </div>

            <div className={base.whyItems}>
              <div className={styles.valuesItem}>
                <h3>clarity over clutter</h3>
                <p>we design for decisions. clear messaging, honest hierarchy, and fast paths to action.</p>
              </div>
              <div className={styles.valuesItem}>
                <h3>distinctive by default</h3>
                <p>no templates or shortcuts. we chase memorable details and expressive brand moments.</p>
              </div>
              <div className={styles.valuesItem}>
                <h3>performance as brand</h3>
                <p>speed shapes perception. accessibility and core web vitals are essential, not optional.</p>
              </div>
            </div>
          </div>
        </Section>

        {/* TEAM */}
        <Section id="team" title="team" className={styles.team}>
          <div className={base.whyGridOuter}>
            {/* Left column */}
            <div className={base.whyText}>
              <h2 className={styles.titleTight}>the people</h2>
              <p className={base.whyIntro}>
                two people, many skills, working closely to bring ideas to life.
              </p>
            </div>

            {/* Right column */}
            <div className={base.whyItems}>
              {/* Ezekiel */}
              <div className={styles.person}>
                <div className={styles.avatarWrap}>
                  <img
                    className={styles.avatar}
                    src="/images/team_ezekiel.apng"
                    alt="Ezekiel Brown"
                  />
                </div>
                <strong>Ezekiel Brown</strong>
                <div className={styles.role}>co-founder — tech lead & web design</div>
              </div>

              {/* Keegan */}
              <div className={styles.person}>
                <div className={styles.avatarWrap}>
                  <img
                    className={styles.avatar}
                    src="/images/team_keegan.apng"
                    alt="Keegan Jeffries"
                  />
                </div>
                <strong>Keegan Jeffries</strong>
                <div className={styles.role}>co-founder — sales & marketing</div>
              </div>
            </div>
          </div>
        </Section>
      </div>
    </>
  );
}
