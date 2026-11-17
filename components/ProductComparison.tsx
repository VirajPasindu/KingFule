import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { PRODUCTS } from "@/lib/site";

const ROWS: { label: string; get: (i: number) => string }[] = [
  { label: "Flavor", get: (i) => PRODUCTS[i].flavor },
  { label: "Moment", get: (i) => PRODUCTS[i].stage },
  { label: "Purpose", get: (i) => PRODUCTS[i].purpose },
  { label: "Best for", get: (i) => PRODUCTS[i].who },
  { label: "Choose it for", get: (i) => PRODUCTS[i].whenToChoose.join(" · ") },
];

export default function ProductComparison() {
  return (
    <section className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow="Compare" title="Which KingFule is right for you?" />
        <Reveal className="mt-14 overflow-x-auto rounded-3xl border border-forest/15 bg-white">
          <table className="w-full min-w-[720px] border-collapse text-left">
            <caption className="sr-only">Comparison of KingFule Active, Endurance and Recover</caption>
            <thead>
              <tr>
                <th scope="col" className="w-40 p-5" />
                {PRODUCTS.map((p) => (
                  <th
                    key={p.id}
                    scope="col"
                    className="p-5 font-display text-3xl font-black italic text-night"
                    style={{ borderTop: `6px solid ${p.accent}` }}
                  >
                    {p.name.replace("KingFule ", "")}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ROWS.map((r) => (
                <tr key={r.label} className="border-t border-forest/10 align-top">
                  <th scope="row" className="p-5 text-xs font-extrabold uppercase tracking-widest text-forest/70">
                    {r.label}
                  </th>
                  {PRODUCTS.map((p, i) => (
                    <td key={p.id} className="p-5 leading-relaxed text-night/85">
                      {r.get(i)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
      </div>
    </section>
  );
}
