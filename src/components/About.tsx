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
        {/* Mission & Vision */}
        <motion.div
          id="mission-vision"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: powerEase }}
          className="scroll-mt-24"
        >
          <span className="metric-label mb-4 block">Section 03 // Purpose</span>
          <h2 className="text-[clamp(2rem,5vw,4rem)] leading-[0.95] tracking-tight font-serif text-foreground max-w-[20ch]">
            Mission & <span className="text-primary">Vision.</span>
          </h2>
        </motion.div>

        {/* Mission & Vision */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-border">
          <div className="p-8 border-r border-b border-border">
            <span className="metric-label">Mission</span>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              To uplift and empower underprivileged communities by providing access to education, healthcare, and opportunities for sustainable development — alleviating poverty and promoting humanitarian values.Our mission is to uplift and empower underprivileged communities by providing access to education, healthcare and opportunities for sustainable development. The Trust is dedicated to alleviating poverty, supporting rural advancement and promoting humanitarian values. We also work to raise awareness against drug abuse, combat HIV/AIDS and contribute to global initiatives such as polio eradication with the ultimate aim of improving the quality of life for all.
            </p>
          </div>
          <div className="p-8 border-b border-border">
            <span className="metric-label">Vision</span>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              A just, healthy, and compassionate society where every individual — regardless of social or economic background — enjoys equal access to education, healthcare, and basic necessities.Our vision is to create a just, healthy and compassionate society where every individual regardless of social or economic background can enjoy equal access to education, healthcare and basic necessities. The Trust aspires to build sustainable opportunities, foster social awareness and pave the way for a future free from poverty, inequality, disease and social injustice.
            </p>
          </div>
        </div> 

        {/* Board of Trustees */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: powerEase }}
          className="mt-24"
        >
          <span className="metric-label mb-4 block">Section 04 // Governance</span>
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
