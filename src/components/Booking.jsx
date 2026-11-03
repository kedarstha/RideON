import { useState } from "react";
import { FLEET, LOCATIONS, WEEKLY_DISCOUNT, npr, waLink } from "../data";
import { isoDate } from "../hooks";
import { Icon } from "./Icons";

const DAY = 86400000;

export default function Booking({ booking, setBooking }) {
  const [error, setError] = useState("");
  const { type, model, location, from, to } = booking;
  const models = FLEET.filter((v) => v.type === type);
  const vehicle = FLEET.find((v) => v.id === model);
  const today = isoDate(new Date());

  const diff = Math.round((new Date(to) - new Date(from)) / DAY);
  const days = Number.isFinite(diff) ? Math.max(1, diff) : 0;
  const weekly = days >= 7;
  const total = vehicle ? Math.round(vehicle.price * days * (weekly ? 1 - WEEKLY_DISCOUNT : 1)) : 0;

  const update = (patch) => {
    setError("");
    setBooking((b) => ({ ...b, ...patch }));
  };

  const onType = (newType) => update({ type: newType, model: FLEET.find((v) => v.type === newType).id });
  const onFrom = (value) => update({ from: value, to: to < value ? value : to });

  const submit = (e) => {
    e.preventDefault();
    if (!from || !to || to < from) {
      setError("Please choose a return date on or after the pick-up date.");
      return;
    }
    const msg = [
      "Hello RideOn Nepal! I'd like to book:",
      `• 2-Wheel: ${vehicle.name} (${vehicle.type})`,
      `• Pick-up: ${location}`,
      `• Dates: ${from} to ${to} (${days} day${days > 1 ? "s" : ""})`,
    ].join("\n");
    window.open(waLink(msg), "_blank", "noopener");
  };

  return (
    <section className="booking" id="book">
      <div className="container">
        <form className="booking__card" onSubmit={submit} noValidate>
          <div className="booking__head">
            <h2>Book your <span className="script">ride</span></h2>
            <p>We confirm on WhatsApp within minutes.</p>
          </div>
          <div className="booking__fields">
            <label className="field">
              <span>2-Wheel type</span>
              <select value={type} onChange={(e) => onType(e.target.value)}>
                <option value="scooter">Scooter (Electric)</option>
                <option value="motorbike">Motorbike</option>
              </select>
            </label>
            <label className="field">
              <span>Model</span>
              <select value={model} onChange={(e) => update({ model: e.target.value })}>
                {models.map((v) => (
                  <option key={v.id} value={v.id}>{v.name} – {npr(v.price)}/day</option>
                ))}
              </select>
            </label>
            <label className="field">
              <span>Pick-up location</span>
              <select value={location} onChange={(e) => update({ location: e.target.value })}>
                {LOCATIONS.map((l) => <option key={l}>{l}</option>)}
              </select>
            </label>
            <label className="field">
              <span>Pick-up date</span>
              <input type="date" min={today} value={from} onChange={(e) => onFrom(e.target.value)} required />
            </label>
            <label className={`field ${error ? "has-error" : ""}`}>
              <span>Return date</span>
              <input type="date" min={from || today} value={to} onChange={(e) => update({ to: e.target.value })} required />
            </label>
            <button type="submit" className="btn btn--orange booking__submit">
              <Icon name="wa" /> Book Now
            </button>
          </div>
          <p className="booking__estimate" aria-live="polite">
            {error || (vehicle && days > 0 && (
              <>
                Estimate: <b>{npr(total)}</b> for {days} day{days > 1 ? "s" : ""} on the {vehicle.name}
                {weekly && <b style={{ color: "var(--orange)" }}> ({WEEKLY_DISCOUNT * 100}% weekly discount applied)</b>}
              </>
            ))}
          </p>
        </form>
      </div>
    </section>
  );
}
