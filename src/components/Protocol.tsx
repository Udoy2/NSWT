import { motion } from "framer-motion";

const powerEase = [0.19, 1, 0.22, 1] as const;

const focusAreas = [
  { area: "Community Support", pct: 40 },
  { area: "Education", pct: 20 },
  { area: "Health", pct: 18 },
  { area: "Other Support", pct: 10 },
  { area: "Empowering Communities", pct: 7 },
  { area: "Religious Support", pct: 5 },
];

const Protocol = () => {
  return (
    <section id="protocol" className="section-narrative bg-muted">
      <div className="container-site">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: powerEase }}
        >
          <span className="metric-label mb-4 block">Section 01 // OVERVIEW</span>
          <h2 className="text-[clamp(2rem,5vw,4rem)] leading-[0.95] tracking-tight font-serif text-foreground max-w-[20ch]">
            How the Trust <span className="text-primary">operates.</span>
          </h2>
          <p className="mt-8 text-lg leading-relaxed max-w-[65ch] text-muted-foreground">
            The Nesar-Shahin Welfare Trust was established on 1 January 2010 through an Irrevocable Deed of Trust. Active since 2006, the Trust operates with full transparency and accountability — governed by a 7-member Board of Trustees including chartered accountants and community leaders.
          </p>
        </motion.div>

        {/* Focus Area Breakdown */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-border">
          {focusAreas.map((item, i) => (
            <motion.div
              key={item.area}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: powerEase, delay: i * 0.05 }}
              className="p-6 border-b border-r border-border"
            >
              <span className="metric-label">{item.area}</span>
              <div className="mt-3 flex items-end gap-3">
                <span className="text-3xl font-bold tabular-nums text-foreground">{item.pct}%</span>
              </div>
              <div className="mt-3 h-1 bg-border">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.pct}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: powerEase, delay: 0.3 }}
                  className="h-full bg-primary"
                />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Protocol;
