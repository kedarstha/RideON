// ---------------------------------------------------------------
// Settings – edit these
// ---------------------------------------------------------------
export const CONTACT = {
  whatsapp: "9779712014615", // country code + number, digits only
  phone: "+9779712014615",
  phoneLabel: "+977 971-2014615",
  email: "rideonnepal@gmail.com",
  address: "Bouddha, Nepal",
  facebook: "https://www.facebook.com/rideonnepal",
  instagram: "https://www.instagram.com/rideonnepal/",
  tiktok: "https://www.tiktok.com/@ride.on.nepal",
};

export const LOCATIONS = [
  "Bouddha (our office)",
  "Hotel / home delivery (Kathmandu Valley)",
];

export const WEEKLY_DISCOUNT = 0.15; // applied to rentals of 7+ days

const garowImg = (path, w = 828) =>
  `https://www.garownepalev.com/_next/image?url=${encodeURIComponent(path)}&w=${w}&q=75`;

export const HERO_IMG = garowImg("/newh1.png", 1920);
export const ABOUT_IMG = garowImg("/h2-1stpic.png", 1080);

// Fleet shown on the site and in the booking form. Prices are NPR per day.
// For a motorbike, add `img: "/your-photo.jpg"` (file in /public) to replace the illustration.
export const FLEET = [
  {
    id: "dt-51-max", type: "scooter", name: "Garow DT-51 MAX", tag: "City value",
    desc: "Easy, light city scooter for errands and daily commuting.",
    specs: [["road", "70 km", "Range"], ["gauge", "55 km/h", "Top speed"], ["battery", "Lead acid", "Battery"]],
    price: 1200,
    img: garowImg("/api/media/file/cms/a12db189-69d9-4c18-8d80-3685b1ca2104-garow-dt-51-scooter-images-for-website.jpg.jpeg"),
  },
  {
    id: "dt-31a", type: "scooter", name: "Garow DT-31A", tag: "Lithium city",
    desc: "Lithium battery scooter with more range for everyday riders.",
    specs: [["road", "100 km", "Range"], ["gauge", "80 km/h", "Top speed"], ["battery", "Lithium", "Battery"]],
    price: 1500,
    img: garowImg("/api/media/file/cms/cd9e49e9-adf2-445b-afc2-69c8c79940f4-garow-dt-31a-scooter-images-for-website.jpg.jpeg"),
  },
  {
    id: "dt-13b", type: "scooter", name: "Garow DT-13B", tag: "Lithium plus",
    desc: "Comfortable lithium scooter for longer days around the valley.",
    specs: [["road", "100 km", "Range"], ["gauge", "80 km/h", "Top speed"], ["battery", "Lithium", "Battery"]],
    price: 1600,
    img: garowImg("/api/media/file/cms/83da2c12-6df9-4af4-b8d7-da8ca47b3f34-garow-dt-13b-scooter-images-for-website.jpg.jpeg"),
  },
  {
    id: "jj2500dt-86", type: "scooter", name: "Garow JJ2500DT-86", tag: "Long range",
    desc: "Flagship EV with 250 km on one charge. Built for distance.",
    specs: [["road", "250 km", "Range"], ["gauge", "90 km/h", "Top speed"], ["bolt", "4500 W", "Motor"]],
    price: 2200,
    img: garowImg("/h2-1stpic.png"),
  },
  {
    id: "pulsar-150", type: "motorbike", name: "Bajaj Pulsar 150", tag: "City & highway",
    desc: "Reliable all-rounder for city rides and day trips.",
    specs: [["engine", "150 cc", "Engine"], ["gauge", "110 km/h", "Top speed"], ["road", "Manual", "Gearbox"]],
    price: 1800, color: "#1d3fae",
  },
  {
    id: "xr-190", type: "motorbike", name: "Honda XR 190", tag: "Dual sport",
    desc: "Tall, tough and light. Perfect for broken hill roads.",
    specs: [["engine", "184 cc", "Engine"], ["gauge", "115 km/h", "Top speed"], ["road", "Manual", "Gearbox"]],
    price: 2800, color: "#e2231a",
  },
  {
    id: "classic-350", type: "motorbike", name: "Royal Enfield Classic 350", tag: "Cruiser",
    desc: "Classic thump and relaxed comfort for long highway rides.",
    specs: [["engine", "349 cc", "Engine"], ["gauge", "115 km/h", "Top speed"], ["road", "Manual", "Gearbox"]],
    price: 3500, color: "#7b1e3a",
  },
  {
    id: "himalayan-450", type: "motorbike", name: "Royal Enfield Himalayan 450", tag: "Adventure",
    desc: "Made for Mustang, Annapurna and every trail in between.",
    specs: [["engine", "452 cc", "Engine"], ["gauge", "145 km/h", "Top speed"], ["road", "Manual", "Gearbox"]],
    price: 5000, color: "#ff7a00",
  },
];

// Set to true once the prices in FLEET are final; until then every price shows as "Rs xxx"
export const SHOW_PRICES = false;

export const npr = (n) => "Rs " + (SHOW_PRICES ? n.toLocaleString("en-IN") : "xxx");
export const LOWEST_PRICE = Math.min(...FLEET.map((v) => v.price));
export const waLink = (text) =>
  `https://wa.me/${CONTACT.whatsapp}${text ? "?text=" + encodeURIComponent(text) : ""}`;
