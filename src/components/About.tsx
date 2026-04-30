import { motion } from "framer-motion";

const powerEase = [0.19, 1, 0.22, 1] as const;

const trustees = [
  "Mr. Md Fazlur Rahman, FCA — Chairman",
  "Mr. A F Nesaruddin — Founder & Managing Trustee",
  "Mr. Mohd. Idris Shakur — Trustee",
  "Mrs. Shahinara Nesar — Trustee",
  "Mr. AKM Anawer Hossain — Trustee",
  "Md. Obaidul Islam — Trustee",
  "Mrs. Fahmida Mehreen — Trustee",
];

const About = () => {
  return (
    <section id="about" className="section-narrative bg-muted">
      <div className="container-site">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: powerEase }}
        >
          <span className="metric-label mb-4 block">Section 03 // Governance</span>
          <h2 className="text-[clamp(2rem,5vw,4rem)] leading-[0.95] tracking-tight font-serif text-foreground max-w-[20ch]">
            Board of <span className="text-primary">Trustees.</span>
          </h2>
          <p className="mt-8 text-lg leading-relaxed max-w-[65ch] text-muted-foreground">
            Founded by Mr. A F Nesaruddin, FCA — Senior Partner of Hoda Vasi Chowdhury & Co. and past president of ICAB — alongside Mrs. Shahinara Nesar. The Trust is governed by a board of 7 Trustees ensuring full accountability.
          </p>
        </motion.div>

        <div className="mt-12 border border-border divide-y divide-border">
          {trustees.map((t, i) => (
            <motion.div
              key={i}
              initial={{ y: 10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: powerEase, delay: i * 0.04 }}
              className="px-6 py-4 flex items-center gap-4"
            >
              <span className="font-mono text-xs text-muted-foreground w-8 tabular-nums">0{i + 1}</span>
              <span className="text-sm text-foreground">{t}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
