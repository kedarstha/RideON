import { useEffect, useRef, useState } from "react";
import { CONTACT } from "../data";
import { Icon } from "./Icons";

const LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About Us" },
  { id: "two-wheels", label: "2-Wheels", dropdown: true },
  { id: "services", label: "Services" },
  { id: "how", label: "How It Works" },
  { id: "contact", label: "Contact" },
];

const TWO_WHEELS = [
  { type: "motorbike", icon: "bike", title: "Motorbike", text: "Petrol bikes for city & trails" },
  { type: "scooter", icon: "bolt", title: "Scooter", text: "Garow electric scooters" },
];

export function Topbar() {
  return (
    <div className="topbar">
      <div className="container topbar__inner">
        <div className="topbar__info">
          <a href={`tel:${CONTACT.phone}`}><Icon name="phone" />{CONTACT.phoneLabel}</a>
          <a href={`mailto:${CONTACT.email}`}><Icon name="mail" />{CONTACT.email}</a>
          <span className="hide-sm"><Icon name="pin" />{CONTACT.address}</span>
        </div>
        <div className="topbar__social">
          <a href={CONTACT.facebook} target="_blank" rel="noopener" aria-label="Facebook"><Icon name="fb" /></a>
          <a href={CONTACT.instagram} target="_blank" rel="noopener" aria-label="Instagram"><Icon name="ig" /></a>
          <a href={CONTACT.tiktok} target="_blank" rel="noopener" aria-label="TikTok"><Icon name="tt" /></a>
        </div>
      </div>
    </div>
  );
}

export function Logo({ card = false }) {
  return (
    <a href="#home" className={`logo ${card ? "logo--card" : ""}`} aria-label="RideOn Nepal home">
      <img src={`${import.meta.env.BASE_URL}logo.webp`} alt="RideOn Nepal Pvt. Ltd." />
    </a>
  );
}

export default function Header({ onSelectType }) {
  const headerRef = useRef(null);
  const dropRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [navTop, setNavTop] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the nav link of the section in view
  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => en.isIntersecting && setActive(en.target.id));
    }, { rootMargin: "-45% 0px -50% 0px" });
    LINKS.forEach(({ id }) => {
      const el = document.getElementById(id);
      el && io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  // Lock page scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  useEffect(() => {
    const close = (e) => dropRef.current && !dropRef.current.contains(e.target) && setDropOpen(false);
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, []);

  const toggleMenu = () => {
    setNavTop(headerRef.current.getBoundingClientRect().bottom);
    setMenuOpen((o) => !o);
  };

  const closeAll = () => {
    setMenuOpen(false);
    setDropOpen(false);
  };

  const pickType = (e, type) => {
    e.preventDefault();
    closeAll();
    history.replaceState(null, "", "#" + type);
    // wait a moment so the closing mobile menu has released the page scroll lock
    setTimeout(() => onSelectType(type), 30);
  };

  return (
    <header ref={headerRef} className={`header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="container header__inner">
        <Logo />

        <nav className={`nav ${menuOpen ? "is-open" : ""}`} style={{ "--nav-top": navTop + "px" }} aria-label="Main">
          {LINKS.map((link) =>
            link.dropdown ? (
              <div key={link.id} ref={dropRef} className={`nav__drop ${dropOpen ? "is-open" : ""}`}>
                <button
                  className={`nav__link nav__droptoggle ${active === link.id ? "is-active" : ""}`}
                  aria-expanded={dropOpen}
                  aria-haspopup="true"
                  onClick={() => setDropOpen((o) => !o)}
                >
                  {link.label} <Icon name="chev" />
                </button>
                <div className="nav__menu" role="menu">
                  {TWO_WHEELS.map((item) => (
                    <a key={item.type} href={`#${item.type}`} role="menuitem" onClick={(e) => pickType(e, item.type)}>
                      <Icon name={item.icon} />
                      <span><b>{item.title}</b><small>{item.text}</small></span>
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`nav__link ${active === link.id ? "is-active" : ""}`}
                onClick={closeAll}
              >
                {link.label}
              </a>
            )
          )}
        </nav>

        <a href="#book" className="btn btn--orange header__cta">Book Now</a>
        <button className="burger" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={toggleMenu}>
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
