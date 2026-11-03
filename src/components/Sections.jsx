import { Fragment, useEffect, useRef, useState } from "react";
import { ABOUT_IMG, CONTACT, HERO_IMG, waLink } from "../data";
import { prefersReducedMotion, useInView } from "../hooks";
import { Icon } from "./Icons";
import { Logo } from "./Header";
import Title from "./Title";

const WA_HELLO = waLink("Hello RideOn Nepal! I'd like to rent a 2-wheeler.");

// ---------- Moving text band ----------
const BAND_1 = ["Motorbikes", "Electric Scooters", "Helmets Included", "Free Valley Delivery", "24/7 Roadside Help"];
const BAND_2 = ["Ride On Nepal", "Kathmandu", "Pokhara", "Mustang", "Nagarkot", "Chitwan"];

function Track({ items, reverse }) {
  // items are doubled so the -50% translate loops seamlessly
  return (
    <div className={`marquee__track ${reverse ? "marquee__track--rev" : ""}`}>
      {[...items, ...items].map((text, i) => (
        <Fragment key={i}>
          <span>{text}</span><i>✦</i>
        </Fragment>
      ))}
    </div>
  );
}

export function Marquee() {
  return (
    <section className="marquee" aria-label="Highlights">
      <div className="marquee__row marquee__row--navy"><Track items={BAND_1} /></div>
      <div className="marquee__row marquee__row--orange"><Track items={BAND_2} reverse /></div>
    </section>
  );
}

// ---------- Why choose us ----------
const FEATURES = [
  { icon: "shield", title: "Serviced & insured", text: "Brakes, tyres and chain checked before every ride. Basic insurance included." },
  { icon: "helmet", title: "Gear included", text: "DOT-rated helmets with every rental. Riding jackets and gloves on request." },
  { icon: "truck", title: "Hotel delivery", text: "Free drop-off and pick-up anywhere inside Kathmandu Valley." },
  { icon: "support", title: "24/7 roadside help", text: "Flat tyre in the hills? Call us any time and we will sort it out." },
];

export function Why() {
  return (
    <section className="section why">
      <div className="container why__inner">
        <div className="why__intro">
          <p className="eyebrow eyebrow--light">Why choose us</p>
          <Title before="The easy way to" hl="ride Nepal" light />
          <p className="lead lead--light">
            Every bike and scooter is checked before each rental. You get clear prices, honest advice on routes,
            and a team that picks up the phone.
          </p>
          <a href="#book" className="btn btn--orange">Book Your Ride</a>
        </div>
        <div className="why__grid">
          {FEATURES.map((f) => (
            <article className="feature" key={f.title}>
              <div className="feature__icon"><Icon name={f.icon} /></div>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- About ----------
function Counter({ end, suffix = "+" }) {
  const [ref, inView] = useInView(0.6);
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const dur = prefersReducedMotion() ? 0 : 1600;
    const t0 = performance.now();
    let frame;
    const tick = (t) => {
      const p = dur ? Math.min(1, (t - t0) / dur) : 1;
      setValue(Math.round(end * (1 - Math.pow(1 - p, 3))));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, end]);
  return <b ref={ref}>{value.toLocaleString("en-IN")}{suffix}</b>;
}

export function About() {
  return (
    <section className="section about" id="about">
      <div className="container about__inner">
        <div className="about__media">
          <img src={ABOUT_IMG} alt="Garow electric scooter" loading="lazy" />
          <div className="about__tag"><span className="script">Ride</span><b>On</b> since day one</div>
        </div>
        <div className="about__text">
          <p className="eyebrow">About us</p>
          <Title before="Nepal's friendly" hl="2-wheel" after="rental crew" />
          <p>
            RideOn Nepal Pvt. Ltd. rents motorbikes and electric scooters to locals, students and travellers.
            Whether it is a quick city errand, a Nagarkot sunrise or a week on the road to Mustang, we match you
            with the right ride and get you moving fast.
          </p>
          <ul className="checks">
            <li><Icon name="check" />Petrol motorbikes and Garow EV scooters</li>
            <li><Icon name="check" />Daily, weekly and monthly plans</li>
            <li><Icon name="check" />Pick up in Bouddha or get it delivered in the valley</li>
          </ul>
          <div className="stats">
            <div className="stat"><Counter end={1200} /><span>Happy riders</span></div>
            <div className="stat"><Counter end={30} /><span>Bikes &amp; scooters</span></div>
            <div className="stat"><Counter end={24} suffix="/7" /><span>Support</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- Services ----------
const SERVICES = [
  { icon: "clock", title: "Daily rental", text: "Grab a scooter for the day and see the valley at your own pace." },
  { icon: "calendar", title: "Weekly & monthly", text: "Lower day rates for longer stays, students and working professionals." },
  { icon: "mountain", title: "Tour rentals", text: "Touring-ready motorbikes for Mustang, Annapurna and the far west." },
  { icon: "bolt", title: "EV city rides", text: "Silent Garow scooters with up to 250 km range on a single charge." },
  { icon: "truck", title: "Delivery & pick-up", text: "We bring the ride to your hotel or home and collect it when you are done." },
  { icon: "map", title: "Route planning", text: "Local tips on roads, permits and fuel stops before you head out." },
];

export function Services() {
  return (
    <section className="section services" id="services">
      <div className="container">
        <div className="section__head">
          <p className="eyebrow">What we offer</p>
          <Title before="Rentals for every" hl="kind of trip" />
        </div>
        <div className="services__grid">
          {SERVICES.map((s, i) => (
            <article className="service" key={s.title}>
              <span className="service__num">{String(i + 1).padStart(2, "0")}</span>
              <Icon name={s.icon} className="service__icon" />
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- How it works ----------
const STEPS = [
  { title: "Choose your 2-wheel", text: "Pick a motorbike or electric scooter from our fleet." },
  { title: "Send your booking", text: "Share dates and pick-up point. We confirm on WhatsApp." },
  { title: "Show licence & ride", text: "Bring a valid licence and ID, sign, and ride off." },
];

export function HowItWorks() {
  return (
    <section className="section how" id="how">
      <div className="container">
        <div className="section__head">
          <p className="eyebrow">How it works</p>
          <Title before="On the road in" hl="3 easy steps" />
        </div>
        <ol className="steps">
          {STEPS.map((s, i) => (
            <li className="step" key={s.title}>
              <span className="step__num">{String(i + 1).padStart(2, "0")}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

// ---------- Explore (big text that slides with scroll) ----------
export function Explore() {
  const sectionRef = useRef(null);
  const lineA = useRef(null);
  const lineB = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    let ticking = false;
    const update = () => {
      const r = sectionRef.current.getBoundingClientRect();
      const p = (window.innerHeight - r.top) / (window.innerHeight + r.height); // 0 → 1 while passing
      lineA.current.style.transform = `translateX(${-p * 40}%)`;
      lineB.current.style.transform = `translateX(${-40 + p * 40}%)`;
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="explore" ref={sectionRef} aria-label="Discover Nepal">
      <div className="explore__bg" aria-hidden="true" style={{ "--hero-img": `url("${HERO_IMG}")` }} />
      <div className="explore__text" aria-hidden="true">
        <div className="explore__line" ref={lineA}>
          Ride <em>On</em> Nepal · Ride <em>On</em> Nepal · Ride <em>On</em> Nepal ·
        </div>
        <div className="explore__line explore__line--outline" ref={lineB}>
          Freedom on two wheels · Freedom on two wheels ·
        </div>
      </div>
      <div className="container explore__inner">
        <p className="eyebrow eyebrow--light">Explore Nepal</p>
        <h2 className="title title--light">Discover freedom <span className="hl">on two wheels</span></h2>
        <a href="#book" className="btn btn--orange btn--lg">Start Your Ride</a>
      </div>
    </section>
  );
}

// ---------- Testimonials (sample reviews: replace with real customer reviews before going live) ----------
const REVIEWS = [
  { initials: "AM", name: "Anna M.", role: "Traveller, Germany", text: "Delivered the scooter to our hotel in Thamel within an hour. Super smooth and quiet for getting around the city." },
  { initials: "SR", name: "Sagar R.", role: "Weekend rider, Lalitpur", text: "Took a motorbike to Pokhara and back. Bike was in great shape and they helped me plan the route." },
  { initials: "PK", name: "Priya K.", role: "Daily commuter, Kathmandu", text: "Monthly EV rental for my office commute costs less than petrol. Charging at home is easy." },
];

export function Reviews() {
  return (
    <section className="section reviews">
      <div className="container">
        <div className="section__head">
          <p className="eyebrow">Testimonials</p>
          <Title before="What our" hl="riders" after="say" />
        </div>
        <div className="reviews__grid">
          {REVIEWS.map((r) => (
            <figure className="review" key={r.name}>
              <div className="stars" aria-label="5 out of 5">★★★★★</div>
              <blockquote>{r.text}</blockquote>
              <figcaption>
                <span className="avatar">{r.initials}</span>
                <span><b>{r.name}</b><small>{r.role}</small></span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- FAQ ----------
const FAQS = [
  { q: "What documents do I need?", a: "A valid driving licence for two-wheelers (Nepali or International Driving Permit) and a citizenship card or passport." },
  { q: "Is there a security deposit?", a: "Yes, a refundable deposit is taken at pick-up and returned when the ride comes back in the same condition." },
  { q: "How do I charge an electric scooter?", a: "Each Garow scooter comes with its charger. Plug it into a normal home socket; a full charge takes a few hours." },
  { q: "Can I take a motorbike outside the valley?", a: "Yes. Tell us your route when booking and we will make sure the bike and paperwork are ready for the trip." },
];

export function Faq() {
  return (
    <section className="section faq">
      <div className="container faq__inner">
        <div>
          <p className="eyebrow">FAQ</p>
          <Title before="Before you" hl="ride" />
          <p className="lead">Still have questions? Call or message us and we will help you out.</p>
        </div>
        <div className="faq__list">
          {FAQS.map((f, i) => (
            <details key={f.q} open={i === 0}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- CTA + footer ----------
export function Cta() {
  return (
    <section className="cta" id="contact">
      <div className="container cta__inner">
        <div>
          <h2>Ready to <span className="script">ride on?</span></h2>
          <p>Call, WhatsApp or drop by. We will have your 2-wheeler ready.</p>
        </div>
        <div className="cta__actions">
          <a href={`tel:${CONTACT.phone}`} className="btn btn--white btn--lg"><Icon name="phone" /> Call Now</a>
          <a href={WA_HELLO} target="_blank" rel="noopener" className="btn btn--navy btn--lg"><Icon name="wa" /> WhatsApp</a>
        </div>
      </div>
    </section>
  );
}

export function Footer({ onSelectType }) {
  const pick = (e, type) => {
    e.preventDefault();
    history.replaceState(null, "", "#" + type);
    onSelectType(type);
  };
  return (
    <>
      <footer className="footer">
        <div className="container footer__grid">
          <div className="footer__brand">
            <Logo card />
            <p>Motorbike and electric scooter rentals across Nepal. Ride safe, ride on.</p>
          </div>
          <div>
            <h4>2-Wheels</h4>
            <a href="#motorbike" onClick={(e) => pick(e, "motorbike")}>Motorbike</a>
            <a href="#scooter" onClick={(e) => pick(e, "scooter")}>Scooter</a>
            <a href="#book">Book Now</a>
          </div>
          <div>
            <h4>Company</h4>
            <a href="#about">About Us</a>
            <a href="#services">Services</a>
            <a href="#how">How It Works</a>
          </div>
          <div>
            <h4>Contact</h4>
            <span><Icon name="pin" />{CONTACT.address}</span>
            <a href={`tel:${CONTACT.phone}`}><Icon name="phone" />{CONTACT.phoneLabel}</a>
            <a href={`mailto:${CONTACT.email}`}><Icon name="mail" />{CONTACT.email}</a>
          </div>
        </div>
        <div className="container footer__bottom">
          <span>© {new Date().getFullYear()} RideOn Nepal Pvt. Ltd. All rights reserved.</span>
          <span>Scooters by <a href="https://www.garownepalev.com/" target="_blank" rel="noopener">Garow Nepal</a></span>
        </div>
      </footer>

      <a href={WA_HELLO} target="_blank" rel="noopener" className="wa-float" aria-label="Chat on WhatsApp">
        <Icon name="wa" />
      </a>
    </>
  );
}
