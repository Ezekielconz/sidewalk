"use client";

import { useEffect, useRef, useState } from "react";
import base from "../page.module.css";
import styles from "./Services.module.css";
import Section from "../../components/sections/Section";

const SECTIONS = [
  { id: "hero", label: "Home" },
  { id: "services", label: "What we do" },
  { id: "workflow", label: "Workflow" },
  { id: "packages", label: "Packages" },
  { id: "cta", label: "Contact" },
];

export default function ServicesPage() {
  const containerRef = useRef(null);
  const [active, setActive] = useState(SECTIONS[0].id);

  useEffect(() => {
    const sectionEls = Array.from(document.querySelectorAll(`.${base.section}`));
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible && visible.target && visible.target.id) {
          setActive(visible.target.id);
        }
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
        {/* HERO — split layout to match Home/About */}
        <Section id="hero" title="services" className={`${base.hero} ${styles.hero}`}>
          <div className={base.splitInner}>
            <div className={base.splitText}>
              <h1 className={base.splitTitle}>build something people love to use</h1>
              <p className={base.splitNote}>
                we design and develop fast websites and clear brands. small team, close collaboration, outcomes you can measure.
              </p>
              <div className={base.actionsLeft}>
                <a className={base.primaryCta} href="/contact">start a project</a>
                <a className={base.secondaryCta} href="/portfolio">see our work</a>
              </div>
            </div>

            <img
              src="/images/services-hero.apng"
              alt="hand-drawn flicker illustration"
              className={base.splitImage}
            />
          </div>
        </Section>

        {/* WHAT WE DO — mirror WORKFLOW row style */}
        <Section id="services" title="what we do" className={styles.services}>
          <div className={base.whyGridOuter}>
            {/* Left: title + intro */}
            <div className={base.whyText}>
              <h2 className={base.servicesTitle}>craft & code</h2>
              <p className={base.servicesIntro}>
                we design and build websites and brands that feel simple, fast, and distinctive.
                every project is collaborative and tailored to what your business needs.
              </p>
            </div>

            {/* Right: rows (icon + title + copy) */}
            <div className={styles.whatList}>
              <div className={styles.whatRow}>
                <div className={styles.whatText}>
                  <img
                    src="/images/services-what-1.apng"
                    alt=""
                    aria-hidden="true"
                    className={styles.whatIcon}
                  />
                  <div className={styles.whatBody}>
                    <strong>web design</strong>
                    <p>landing pages, marketing sites, and thoughtful layouts that put content first.</p>
                  </div>
                </div>
              </div>

              <div className={styles.whatRow}>
                <div className={styles.whatText}>
                  <img
                    src="/images/services-what-2.apng"
                    alt=""
                    aria-hidden="true"
                    className={styles.whatIcon}
                  />
                  <div className={styles.whatBody}>
                    <strong>development</strong>
                    <p>performance-focused builds, responsive, accessible for everyone.</p>
                  </div>
                </div>
              </div>

              <div className={styles.whatRow}>
                <div className={styles.whatText}>
                  <img
                    src="/images/services-what-3.apng"
                    alt=""
                    aria-hidden="true"
                    className={styles.whatIcon}
                  />
                  <div className={styles.whatBody}>
                    <strong>brand & content</strong>
                    <p>identity, guidelines, and the details that make your business memorable.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* WORKFLOW */}
        <Section id="workflow" title="workflow" className={styles.workflow}>
          <div className={base.whyGridOuter}>
            <div className={base.whyText}>
              <h2 className={styles.titleTight}>the plan</h2>
              <p className={base.whyIntro}>
                a clear process makes the work smoother and the results stronger. we keep things simple, collaborative, and focused on outcomes.
              </p>
            </div>

            <div className={styles.flowList}>
              <div className={styles.flowRow}>
                <div className={styles.flowText}>
                  <img src="/images/services-workflow-1.apng" alt="" aria-hidden="true" className={styles.flowIcon} />
                  <div className={styles.flowBody}>
                    <strong>01 — discover</strong>
                    <p>we listen first. understanding your goals, audience, and challenges. this shared understanding sets the direction.</p>
                  </div>
                </div>
              </div>

              <div className={styles.flowRow}>
                <div className={styles.flowText}>
                  <img src="/images/services-workflow-2.apng" alt="" aria-hidden="true" className={styles.flowIcon} />
                  <div className={styles.flowBody}>
                    <strong>02 — design</strong>
                    <p>we explore ideas, create layouts, and shape a brand presence that feels distinctive and easy to use.</p>
                  </div>
                </div>
              </div>

              <div className={styles.flowRow}>
                <div className={styles.flowText}>
                  <img src="/images/services-workflow-3.apng" alt="" aria-hidden="true" className={styles.flowIcon} />
                  <div className={styles.flowBody}>
                    <strong>03 — build</strong>
                    <p>we turn designs into fast, responsive, and accessible websites, engineered for long-term performance.</p>
                  </div>
                </div>
              </div>

              <div className={styles.flowRow}>
                <div className={styles.flowText}>
                  <img src="/images/services-workflow-4.apng" alt="" aria-hidden="true" className={styles.flowIcon} />
                  <div className={styles.flowBody}>
                    <strong>04 — launch</strong>
                    <p>we prepare every detail for a smooth launch, then support you with updates, care, and improvements.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* PACKAGES */}
        <Section id="packages" title="packages" className={styles.packages}>
          <div className={base.whyGridOuter}>
            <div className={base.whyText}>
              <h2 className={styles.titleTight}>ways to work with us</h2>
              <p className={base.whyIntro}>
                every business is at a different stage. whether you’re planting the first seed, building momentum, or ready to thrive, we have a path that fits.
              </p>
            </div>

            <div className={styles.packageList}>
              <div className={styles.packageItem}>
                <img className={styles.packageIcon} src="/images/services-packages-1.apng" alt="seed package icon" />
                <div className={styles.packageBody}>
                  <strong>seed</strong>
                  <p>a clean, fast website that covers the basics. perfect for portfolios, landing pages, or small businesses starting out.</p>
                </div>
              </div>

              <div className={styles.packageItem}>
                <img className={styles.packageIcon} src="/images/services-packages-2.apng" alt="growth package icon" />
                <div className={styles.packageBody}>
                  <strong>growth</strong>
                  <p>a custom design and build with room to expand. ideal for businesses ready to stand out with a distinctive brand and marketing site.</p>
                </div>
              </div>

              <div className={styles.packageItem}>
                <img className={styles.packageIcon} src="/images/services-packages-3.apng" alt="thrive package icon" />
                <div className={styles.packageBody}>
                  <strong>thrive</strong>
                  <p>strategy, design, development, and ongoing care. best for established businesses that want a long-term partner.</p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* CTA */}
        <Section id="cta" title="let's talk" className={base.contact}>
          <div className={`${base.contactInner} ${styles.ctaInner}`}>
            <div className={styles.contactText}>
              <h2 className={base.contactTitle}>have a timeline in mind?</h2>
              <p className={base.contactNote}>
                if you’ve got a timeline, we’ve got the process to match. let’s get your website moving toward launch.
              </p>
              <a className={base.primaryCta} href="/contact">contact us</a>
            </div>
            <img
              src="/images/section-contact3.apng"
              alt=""
              aria-hidden="true"
              className={styles.ctaImage}
            />
          </div>
        </Section>
      </div>
    </>
  );
}
