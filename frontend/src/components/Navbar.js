import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.header}>
      <nav className={styles.nav}>
        {/* Logo */}
        <div className={styles.logo}>
          <Link href="/" aria-label="Sidewalk Home">
            <img src="/logo.svg" alt="Sidewalk Logo" className={styles.logoImg} />
          </Link>
        </div>

        {/* Links */}
        <ul className={styles.navLinks}>
          <li><Link href="/about">about us</Link></li>
          <li><Link href="/services">our services</Link></li>
          <li><Link href="/portfolio">our work</Link></li>
          <li>
            <Link href="/contact" className={styles.contactBtn}>
              contact us
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
