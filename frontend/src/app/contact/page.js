"use client";

import { useState } from "react";
import base from "../page.module.css";
import Section from "../../components/sections/Section";
import styles from "./Contact.module.css";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    company: "", // honeypot
  });
  const [status, setStatus] = useState({ state: "idle", message: "" });

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const validate = () => {
    if (!form.name.trim()) return "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return "Please enter a valid email.";
    if (!form.message.trim()) return "Tell us a bit about your project.";
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
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          company: form.company, // honeypot
        }),
      });
      const data = await res.json();
      if (!res.ok || !data?.ok) throw new Error(data?.error || "Failed to send");
      setStatus({ state: "success", message: "Thanks! We’ll get back to you shortly." });
      setForm({ name: "", email: "", message: "", company: "" });
    } catch (err) {
      setStatus({ state: "error", message: err.message || "Something went wrong." });
    }
  };

  return (
    <Section id="contact" title="contact" className={styles.contactBg}>
      <div className={styles.contactWrap}>
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
              alt=""
              aria-hidden="true"
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

            {/* Single primary CTA button (same style as elsewhere) */}
            <div className={base.actionsLeft} style={{ marginTop: ".5rem" }}>
              <button
                type="submit"
                className={styles.submitBtn}   // <- was base.primaryCta
                disabled={status.state === "loading"}
              >
                {status.state === "loading" ? "sending…" : "send message"}
              </button>
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
