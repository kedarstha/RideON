import { useEffect, useState } from "react";
import { HERO_IMG, LOWEST_PRICE, npr } from "../data";

const PLACES = ["Kathmandu", "Pokhara", "Mustang", "the Himalayas"];

// Highlighted word that rotates through destinations
function Rotator() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % PLACES.length), 2600);
    return () => clearInterval(t);
  }, []);
  const prev = (index - 1 + PLACES.length) % PLACES.length;

  return (
    <span className="rotator" aria-live="polite">
      {PLACES.map((place, i) => (
        <span key={place} className={`rotator__word ${i === index ? "is-in" : ""} ${i === prev ? "is-out" : ""}`}>
          {place}
        </span>
      ))}
    </span>
  );
}

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__bg" aria-hidden="true" style={{ "--hero-img": `url("${HERO_IMG}")` }} />
      <div className="hero__arc" aria-hidden="true" />
      <div className="container hero__inner">
        <p className="eyebrow eyebrow--light">Motorbike &amp; Scooter Rental · Nepal</p>
        <h1 className="hero__title">
          <span className="hero__line">Ride the roads of</span>
          <Rotator />
        </h1>
        <p className="hero__sub">
          Well-kept motorbikes and Garow electric scooters, delivered with helmets, papers and a full charge or
          tank. Pick a ride, pick your dates, and go.
        </p>
        <div className="hero__price">Rent from <strong>{npr(LOWEST_PRICE)}</strong><span>/day</span></div>
        <div className="hero__actions">
          <a href="#two-wheels" className="btn btn--orange btn--lg">Explore 2-Wheels</a>
          <a href="#book" className="btn btn--ghost btn--lg">Check Availability</a>
        </div>
      </div>

      <div className="hero__badge" aria-hidden="true">
        <span className="hero__badge-num">15%</span>
        <span>Off weekly<br />rentals</span>
      </div>
    </section>
  );
}
