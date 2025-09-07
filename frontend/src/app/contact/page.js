"use client";

import { useState } from "react";
import base from "../page.module.css";
import styles from "./Contact.module.css";
import Section from "../../components/sections/Section";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    message: "",
    company: "", // honeypot
    consent: false,
  });
  const [status, setStatus] = useState({ state: "idle", message: "" });

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({ ...f, [name]: type === "checkbox" ? checked : value }));
  };

  const validate = () => {
    if (!form.name.trim()) return "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return "Please enter a valid email.";
    if (!form.projectType) return "Please choose a project type.";
    if (!form.message.trim()) return "Tell us a bit about your project.";
    if (!form.consent) return "Please accept the contact consent.";
    if (form.company) return "Spam detected."; // honeypot
    return null;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus({ state: "idle", message: "" });

    const error = validate();
    if (error) {
      setStatus({ state: "error", message: error });
      return;
    }

    try {
      setStatus({ state: "loading", message: "Sending…" });
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok || !data?.ok) throw new Error(data?.error || "Failed to send");
      setStatus({ state: "success", message: "Thanks! We’ll get back to you shortly." });
      setForm({
        name: "",
        email: "",
        projectType: "",
        budget: "",
        message: "",
        company: "",
        consent: false,
      });
    } catch (err) {
      setStatus({ state: "error", message: err.message || "Something went wrong." });
    }
  };

  return (
    <Section id="contact" title="contact" className={styles.contactBg}>
      <div className={`${base.content} ${styles.contactWrap}`}>
        {/* ROW 1: title/subtitle (left) + image (right) */}
        <div className={styles.introRow}>
          <div className={styles.introLeft}>
            <h1 className={styles.title}>tell us what you’re building</h1>
            <p className={styles.subtitle}>
              drop a few details and we’ll map a lightweight, high-impact plan to get it live.
            </p>
          </div>
          <div className={styles.introRight}>
            <img
              src="/images/contact-hero.apng"
              alt="contact illustration"
              className={styles.introImage}
            />
          </div>
        </div>

        {/* ROW 2: form (left) + contact details (right) */}
        <div className={styles.formGrid}>
          {/* form */}
          <form className={styles.form} onSubmit={onSubmit} noValidate>
            {/* honeypot */}
            <input
              type="text"
              name="company"
              autoComplete="off"
              tabIndex={-1}
              className={styles.honeypot}
              onChange={onChange}
              value={form.company}
              aria-hidden="true"
            />

            <div className={styles.row}>
              <div className={styles.field}>
                <label htmlFor="name">name *</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={onChange}
                  required
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="email">email *</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={onChange}
                  required
                />
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.field}>
                <label htmlFor="projectType">project type *</label>
                <select
                  id="projectType"
                  name="projectType"
                  value={form.projectType}
                  onChange={onChange}
                  required
                >
                  <option value="">select…</option>
                  <option value="new-site">new site</option>
                  <option value="rebuild">redesign / rebuild</option>
                  <option value="landing">landing page</option>
                  <option value="ongoing">ongoing partnership</option>
                </select>
              </div>

              <div className={styles.field}>
                <label htmlFor="budget">budget (nz$)</label>
                <select
                  id="budget"
                  name="budget"
                  value={form.budget}
                  onChange={onChange}
                >
                  <option value="">select…</option>
                  <option value="under-5k">under 5k</option>
                  <option value="5-10k">5–10k</option>
                  <option value="10-20k">10–20k</option>
                  <option value="20k-plus">20k+</option>
                </select>
              </div>
            </div>

            <div className={styles.field}>
              <label htmlFor="message">project details *</label>
              <textarea
                id="message"
                name="message"
                rows={6}
                value={form.message}
                onChange={onChange}
                required
              />
            </div>

            <label className={styles.checkbox}>
              <input
                type="checkbox"
                name="consent"
                checked={form.consent}
                onChange={onChange}
                required
              />
              <span>I’m okay with you contacting me about this enquiry.</span>
            </label>

            <div className={base.actionsLeft} style={{ marginTop: ".5rem" }}>
              <button
                type="submit"
                className={base.primaryCta}
                disabled={status.state === "loading"}
              >
                {status.state === "loading" ? "sending…" : "send message"}
              </button>
              <a className={base.secondaryCta} href="mailto:hello@sidewalk.studio">
                email us directly
              </a>
            </div>

            <p
              className={
                status.state === "error"
                  ? styles.formStatusError
                  : status.state === "success"
                  ? styles.formStatusSuccess
                  : styles.formStatus
              }
              aria-live="polite"
            >
              {status.message}
            </p>
          </form>

          {/* contact details */}
          <aside className={styles.contactSide}>
            <p>
              <a href="mailto:admin@sidewalks.co.nz">admin@sidewalks.co.nz</a><br />
              nelson, new zealand
            </p>
          </aside>
        </div>
      </div>
    </Section>
  );
}
