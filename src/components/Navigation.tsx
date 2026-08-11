import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

/* ─── route groups ─── */
const realmLinks = [
  { to: "/inferno", label: "Inferno", glyph: "I" },
  { to: "/purgatorio", label: "Purgatorio", glyph: "II" },
  { to: "/paradiso", label: "Paradiso", glyph: "III" },
] as const;

const primaryLinks = [
  { to: "/journey", label: "The Journey" },
  { to: "/characters", label: "Characters" },
  { to: "/cantos", label: "Cantos" },
  { to: "/ask-dante", label: "Ask Dante" },
  { to: "/search", label: "Search" },
  { to: "/about", label: "About" },
] as const;

const mobileLinks = [
  { to: "/", label: "Dante" },
  { to: "/journey", label: "The Journey" },
  { to: "/inferno", label: "Inferno" },
  { to: "/purgatorio", label: "Purgatorio" },
  { to: "/paradiso", label: "Paradiso" },
  { to: "/characters", label: "Characters" },
  { to: "/cantos", label: "Cantos" },
  { to: "/ask-dante", label: "Ask Dante" },
  { to: "/search", label: "Search" },
  { to: "/about", label: "About" },
] as const;

/* ─── helper: is any realm active? ─── */
function useIsRealmActive() {
  const { location } = useRouterState();
  return realmLinks.some((l) => location.pathname.startsWith(l.to));
}

/* ─── Realm Dropdown ─── */
function RealmsDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLLIElement>(null);
  const realmActive = useIsRealmActive();

  /* close on outside click */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <li ref={ref} style={{ position: "relative" }}>
      <button
        onClick={() => setOpen((v) => !v)}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.3rem",
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: 0,
        }}
        className={`nav-link caps${realmActive ? " nav-link--active" : ""}`}
        aria-haspopup="true"
        aria-expanded={open}
      >
        The Realms
        <ChevronDown
          size={11}
          style={{
            transition: "transform 0.3s ease",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
          }}
        />
      </button>

      {/* Dropdown panel */}
      <div
        className="realm-dropdown"
        style={{
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          transform: open ? "translateY(0) scaleY(1)" : "translateY(-6px) scaleY(0.96)",
        }}
      >
        <span className="dropdown-eyebrow caps">Select Your Realm</span>
        <hr className="dropdown-rule" />
        {realmLinks.map((l) => (
          <Link
            key={l.to}
            to={l.to}
            onClick={() => setOpen(false)}
            className="dropdown-item"
            activeProps={{ className: "dropdown-item dropdown-item--active" }}
          >
            <span className="dropdown-glyph">{l.glyph}</span>
            <span>{l.label}</span>
          </Link>
        ))}
      </div>
    </li>
  );
}

/* ─── Main Navigation ─── */
export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header className={`nav-header${scrolled ? " nav-header--scrolled" : ""}`}>
        {/* top decorative line */}
        <div className="nav-top-line" />

        <nav className="nav-inner">
          {/* ── Logo ── */}
          <Link
            to="/"
            className="nav-logo nav-logo--stacked"
            onClick={() => setMobileOpen(false)}
          >
            <span className="nav-logo-primary display">DANTE</span>
            <span className="nav-logo-sub caps nav-logo-sub--always">La Divina Commedia</span>
          </Link>

          {/* ── Desktop links ── */}
          <ul className="nav-links" aria-label="Main navigation">
            <RealmsDropdown />
            {primaryLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="nav-link caps"
                  activeProps={{ className: "nav-link caps nav-link--active" }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* ── CTA ask-dante pill (desktop) ── */}
          <Link to="/ask-dante" className="nav-cta caps" aria-label="Ask Dante">
            <span>Ask Dante</span>
            <span className="nav-cta-icon">✦</span>
          </Link>

          {/* ── Hamburger ── */}
          <button
            className="nav-hamburger"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
          </button>
        </nav>

        {/* bottom gold rule (visible when scrolled) */}
        <div className={`nav-bottom-rule${scrolled ? " nav-bottom-rule--visible" : ""}`} />
      </header>

      {/* ── Mobile drawer overlay ── */}
      <div
        className={`mobile-overlay${mobileOpen ? " mobile-overlay--open" : ""}`}
        aria-hidden={!mobileOpen}
      >
        {/* decorative verse */}
        <p className="mobile-verse caps">
          Nel mezzo del cammin di nostra vita
        </p>
        <hr className="mobile-rule" />

        <nav aria-label="Mobile navigation">
          {mobileLinks.map((l, i) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setMobileOpen(false)}
              className="mobile-link display"
              activeProps={{ className: "mobile-link display mobile-link--active" }}
              style={{ animationDelay: `${i * 50}ms` }}
            >
              {l.label}
              <span className="mobile-link-arrow">→</span>
            </Link>
          ))}
        </nav>

        <p className="mobile-footer caps">
          Guided by Virgil · Est. 1320
        </p>
      </div>

      <style>{`
        /* ====================================================
           DANTE NAVIGATION — premium stylesheet
           ==================================================== */

        .nav-header {
          position: fixed;
          inset-inline: 0;
          top: 0;
          z-index: 50;
          transition: background 0.6s ease, box-shadow 0.6s ease;
        }

        .nav-header--scrolled {
          background: color-mix(in oklab, var(--background) 88%, transparent);
          backdrop-filter: blur(18px) saturate(160%);
          -webkit-backdrop-filter: blur(18px) saturate(160%);
          box-shadow: 0 1px 0 color-mix(in oklab, var(--gold) 18%, transparent);
        }

        /* top 1px accent line */
        .nav-top-line {
          height: 1px;
          background: linear-gradient(
            to right,
            transparent 0%,
            color-mix(in oklab, var(--gold) 55%, transparent) 30%,
            color-mix(in oklab, var(--gold) 55%, transparent) 70%,
            transparent 100%
          );
          opacity: 0.6;
        }

        /* inner flex row */
        .nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 80rem;
          margin: 0 auto;
          padding: 1rem 1.5rem;
          gap: 1rem;
        }

        @media (min-width: 1024px) {
          .nav-inner { padding: 1.1rem 2.5rem; }
        }

        /* ── Logo ── */
        .nav-logo {
          display: flex;
          align-items: flex-start;
          gap: 0.15rem;
          text-decoration: none;
          flex-shrink: 0;
        }

        .nav-logo--stacked {
          flex-direction: column;
          gap: 0.1rem;
        }

        .nav-logo-primary {
          font-size: 1.6rem;
          letter-spacing: 0.22em;
          color: var(--foreground);
          transition: color 0.3s;
        }

        .nav-logo:hover .nav-logo-primary {
          color: var(--gold);
        }

        .nav-logo-sub {
          display: none;
          font-size: 0.48rem;
          letter-spacing: 0.22em;
          color: var(--muted-foreground);
          line-height: 1;
          white-space: nowrap;
        }

        @media (min-width: 640px) {
          .nav-logo-sub { display: inline; }
        }

        /* always visible when stacked below DANTE */
        .nav-logo-sub--always {
          display: inline !important;
        }

        /* ── Desktop nav links ── */
        .nav-links {
          display: none;
          list-style: none;
          margin: 0;
          padding: 0;
          align-items: center;
          gap: 1.2rem;
          flex: 1;
          justify-content: center;
          flex-wrap: nowrap;
        }

        @media (min-width: 1024px) {
          .nav-links { display: flex; }
        }

        /* individual link */
        .nav-link {
          position: relative;
          color: var(--muted-foreground);
          text-decoration: none;
          transition: color 0.25s;
          background: none;
          border: none;
          cursor: pointer;
          font-family: inherit;
          font-size: 0.65rem;
          letter-spacing: 0.12em;
          white-space: nowrap;
        }

        .nav-link::after {
          content: "";
          position: absolute;
          bottom: -4px;
          left: 0;
          right: 0;
          height: 1px;
          background: var(--gold);
          transform: scaleX(0);
          transform-origin: center;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .nav-link:hover {
          color: var(--foreground);
        }

        .nav-link:hover::after,
        .nav-link--active::after {
          transform: scaleX(1);
        }

        .nav-link--active {
          color: var(--gold);
        }

        /* ── CTA pill ── */
        .nav-cta {
          display: none;
          align-items: center;
          gap: 0.3rem;
          padding: 0.38rem 0.85rem;
          border: 1px solid color-mix(in oklab, var(--gold) 40%, transparent);
          color: var(--gold);
          text-decoration: none;
          transition: background 0.3s, border-color 0.3s, color 0.3s;
          white-space: nowrap;
          flex-shrink: 0;
          font-size: 0.62rem;
          letter-spacing: 0.12em;
        }

        @media (min-width: 1024px) {
          .nav-cta { display: flex; }
        }

        .nav-cta:hover {
          background: color-mix(in oklab, var(--gold) 12%, transparent);
          border-color: var(--gold);
        }

        .nav-cta-icon {
          font-size: 0.65rem;
          opacity: 0.7;
        }

        /* ── Hamburger ── */
        .nav-hamburger {
          display: flex;
          align-items: center;
          justify-content: center;
          background: none;
          border: 1px solid color-mix(in oklab, var(--border) 60%, transparent);
          color: var(--foreground);
          padding: 0.4rem;
          cursor: pointer;
          transition: border-color 0.3s, color 0.3s;
        }

        .nav-hamburger:hover {
          border-color: var(--gold);
          color: var(--gold);
        }

        @media (min-width: 1024px) {
          .nav-hamburger { display: none; }
        }

        /* ── Bottom gold rule ── */
        .nav-bottom-rule {
          height: 1px;
          background: linear-gradient(
            to right,
            transparent,
            color-mix(in oklab, var(--gold) 30%, transparent),
            transparent
          );
          opacity: 0;
          transition: opacity 0.5s;
        }

        .nav-bottom-rule--visible {
          opacity: 1;
        }

        /* ====================================================
           REALM DROPDOWN
           ==================================================== */

        .realm-dropdown {
          position: absolute;
          top: calc(100% + 0.75rem);
          left: 50%;
          transform-origin: top center;
          transform: translateX(-50%) translateY(0) scaleY(1);
          min-width: 180px;
          background: color-mix(in oklab, var(--card) 95%, transparent);
          border: 1px solid color-mix(in oklab, var(--gold) 22%, transparent);
          box-shadow:
            0 16px 48px color-mix(in oklab, var(--ink) 60%, transparent),
            0 0 0 1px color-mix(in oklab, var(--gold) 8%, transparent);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          padding: 0.75rem 0;
          transition: opacity 0.22s ease, transform 0.22s ease;
          z-index: 100;
        }

        .dropdown-eyebrow {
          display: block;
          padding: 0 1rem 0.4rem;
          font-size: 0.5rem;
          color: var(--muted-foreground);
          letter-spacing: 0.4em;
        }

        .dropdown-rule {
          border: none;
          height: 1px;
          background: linear-gradient(
            to right,
            transparent,
            color-mix(in oklab, var(--gold) 30%, transparent),
            transparent
          );
          margin: 0 0 0.4rem;
        }

        .dropdown-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.6rem 1rem;
          color: var(--muted-foreground);
          text-decoration: none;
          transition: color 0.2s, background 0.2s;
          font-size: 0.72rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          font-weight: 500;
        }

        .dropdown-item:hover {
          color: var(--foreground);
          background: color-mix(in oklab, var(--gold) 7%, transparent);
        }

        .dropdown-item--active {
          color: var(--gold) !important;
        }

        .dropdown-glyph {
          font-family: var(--font-serif);
          font-size: 0.8rem;
          font-weight: 300;
          font-style: italic;
          color: var(--gold);
          opacity: 0.7;
          min-width: 1.5rem;
        }

        /* ====================================================
           MOBILE OVERLAY DRAWER
           ==================================================== */

        .mobile-overlay {
          position: fixed;
          inset: 0;
          z-index: 40;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 2rem 2.5rem;
          gap: 0;
          background: color-mix(in oklab, var(--background) 97%, transparent);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          pointer-events: none;
          opacity: 0;
          transform: translateX(100%);
          transition: opacity 0.35s ease, transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .mobile-overlay--open {
          opacity: 1;
          transform: translateX(0);
          pointer-events: auto;
        }

        .mobile-verse {
          font-size: 0.55rem;
          letter-spacing: 0.35em;
          color: var(--muted-foreground);
          margin: 0 0 0.75rem;
          opacity: 0.7;
          font-style: italic;
        }

        .mobile-rule {
          border: none;
          height: 1px;
          background: linear-gradient(
            to right,
            color-mix(in oklab, var(--gold) 50%, transparent),
            transparent
          );
          margin: 0 0 1.5rem;
        }

        .mobile-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.9rem 0;
          border-bottom: 1px solid color-mix(in oklab, var(--border) 40%, transparent);
          color: var(--foreground);
          text-decoration: none;
          font-size: clamp(1.4rem, 5vw, 2rem);
          font-weight: 300;
          letter-spacing: -0.01em;
          transition: color 0.25s, padding-left 0.25s;
          opacity: 0;
          animation: mobile-link-in 0.4s ease forwards;
        }

        .mobile-overlay--open .mobile-link {
          opacity: 1;
        }

        .mobile-link-arrow {
          font-size: 0.9rem;
          opacity: 0;
          transition: opacity 0.2s, transform 0.2s;
          transform: translateX(-6px);
        }

        .mobile-link:hover {
          color: var(--gold);
          padding-left: 0.5rem;
        }

        .mobile-link:hover .mobile-link-arrow {
          opacity: 0.7;
          transform: translateX(0);
        }

        .mobile-link--active {
          color: var(--gold) !important;
        }

        .mobile-footer {
          margin-top: 2rem;
          font-size: 0.52rem;
          letter-spacing: 0.35em;
          color: var(--muted-foreground);
          opacity: 0.5;
        }

        @keyframes mobile-link-in {
          from {
            opacity: 0;
            transform: translateX(16px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @media (min-width: 1024px) {
          .mobile-overlay { display: none; }
        }
      `}</style>
    </>
  );
}
