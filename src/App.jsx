import { useCallback, useEffect, useState } from "react";
import { FLEET, LOCATIONS } from "./data";
import { isoDate, scrollToId } from "./hooks";
import { IconSprite } from "./components/Icons";
import Header, { Topbar } from "./components/Header";
import Hero from "./components/Hero";
import Booking from "./components/Booking";
import Fleet from "./components/Fleet";
import { About, Cta, Explore, Faq, Footer, HowItWorks, Marquee, Reviews, Services, Why } from "./components/Sections";

const firstOfType = (type) => FLEET.find((v) => v.type === type).id;

export default function App() {
  const [filter, setFilter] = useState("all");
  const [booking, setBooking] = useState(() => ({
    type: "scooter",
    model: firstOfType("scooter"),
    location: LOCATIONS[0],
    from: isoDate(new Date()),
    to: isoDate(new Date(Date.now() + 86400000)),
  }));

  // "2-Wheels" → Motorbike / Scooter: filter the fleet, preselect the booking type, scroll to the fleet
  const selectType = useCallback((type) => {
    setFilter(type);
    setBooking((b) => ({ ...b, type, model: firstOfType(type) }));
    scrollToId("two-wheels");
  }, []);

  // "Book Now" on a card: preselect that vehicle and scroll to the form
  const bookVehicle = (v) => {
    setBooking((b) => ({ ...b, type: v.type, model: v.id }));
    scrollToId("book");
  };

  // Support direct links like yoursite.com/#scooter
  useEffect(() => {
    const fromHash = () => {
      const h = window.location.hash.slice(1);
      if (h === "motorbike" || h === "scooter") selectType(h);
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
  }, [selectType]);

  return (
    <>
      <IconSprite />
      <Topbar />
      <Header onSelectType={selectType} />
      <main>
        <Hero />
        <Booking booking={booking} setBooking={setBooking} />
        <Marquee />
        <Fleet filter={filter} setFilter={setFilter} onBook={bookVehicle} />
        <Why />
        <About />
        <Services />
        <HowItWorks />
        <Explore />
        <Reviews />
        <Faq />
        <Cta />
      </main>
      <Footer onSelectType={selectType} />
    </>
  );
}
