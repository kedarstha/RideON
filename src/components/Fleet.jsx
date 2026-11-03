import { FLEET, npr } from "../data";
import { Icon, MotoArt } from "./Icons";
import Title from "./Title";

const TABS = [
  { filter: "all", label: "All" },
  { filter: "motorbike", label: "Motorbike", icon: "bike" },
  { filter: "scooter", label: "Scooter", icon: "bolt" },
];

function VehicleCard({ vehicle: v, delay, onBook }) {
  const isEV = v.type === "scooter";
  return (
    <article className="card" style={{ animationDelay: `${delay}ms` }}>
      <div className={`card__media ${v.img ? "" : "card__media--art"}`}>
        <span className={`card__badge ${isEV ? "card__badge--ev" : ""}`}>{isEV ? "Electric" : "Motorbike"}</span>
        {v.img ? <img src={v.img} alt={v.name} loading="lazy" /> : <MotoArt color={v.color} label={v.name} />}
      </div>
      <div className="card__body">
        <span className="card__tag">{v.tag}</span>
        <h3 className="card__title">{v.name}</h3>
        <p className="card__desc">{v.desc}</p>
        <div className="specs">
          {v.specs.map(([icon, value, label]) => (
            <div className="spec" key={label}>
              <Icon name={icon} /><b>{value}</b><span>{label}</span>
            </div>
          ))}
        </div>
        <div className="card__foot">
          <div className="price">{npr(v.price)} <small>/day</small></div>
          <button className="btn btn--orange" onClick={() => onBook(v)}>Book Now</button>
        </div>
      </div>
    </article>
  );
}

export default function Fleet({ filter, setFilter, onBook }) {
  const list = filter === "all" ? FLEET : FLEET.filter((v) => v.type === filter);

  return (
    <section className="section fleet" id="two-wheels">
      <div className="container">
        <div className="section__head">
          <p className="eyebrow">Our 2-Wheels</p>
          <Title before="Pick the ride that fits" hl="your road" />
          <p className="lead">
            Petrol motorbikes for trails and long tours, Garow electric scooters for quiet, low-cost city riding.
          </p>
        </div>

        <div className="tabs" role="tablist" aria-label="Filter 2-wheels">
          {TABS.map((t) => (
            <button
              key={t.filter}
              role="tab"
              aria-selected={filter === t.filter}
              className={`tab ${filter === t.filter ? "is-active" : ""}`}
              onClick={() => setFilter(t.filter)}
            >
              {t.icon && <Icon name={t.icon} />} {t.label}
            </button>
          ))}
        </div>

        <div className="fleet__grid">
          {list.map((v, i) => (
            // key includes the filter so cards replay their entrance animation when the filter changes
            <VehicleCard key={`${filter}-${v.id}`} vehicle={v} delay={i * 60} onBook={onBook} />
          ))}
        </div>
        <p className="fleet__note">Prices are per day and include a helmet and basic insurance. Fuel/charge not included.</p>
      </div>
    </section>
  );
}
