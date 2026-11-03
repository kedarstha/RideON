import { useInView } from "../hooks";

// Section heading that reveals word by word; `hl` is the highlighted (orange) part.
export default function Title({ before = "", hl = "", after = "", light = false }) {
  const [ref, visible] = useInView(0.3);
  const words = [
    ...before.split(/\s+/).filter(Boolean),
    ...(hl ? [<span className="hl" key="hl">{hl}</span>] : []),
    ...after.split(/\s+/).filter(Boolean),
  ];

  return (
    <h2 ref={ref} className={`title reveal ${light ? "title--light" : ""} ${visible ? "is-visible" : ""}`}>
      {words.map((word, i) => (
        <span key={i}>
          {i > 0 && " "}
          <span className="w">
            <span style={{ transitionDelay: `${i * 70}ms` }}>{word}</span>
          </span>
        </span>
      ))}
    </h2>
  );
}
