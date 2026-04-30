import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import programEducation from "@/assets/program-education.jpg";
import programCommunity from "@/assets/program-community.jpg";
import programEmpowerment from "@/assets/program-empowerment.jpg";
import heroClinic from "@/assets/hero-clinic.jpg";

const powerEase = [0.19, 1, 0.22, 1] as const;

const programs = [
  {
    status: "Active: Free Friday Clinic",
    title: "Healthcare",
    description: "Established 14 January 2011. Free consultations, prescriptions, and medicines every Friday. 1,946 patients served in 2023–24 with a team of 5 core doctors.",
    image: heroClinic,
    progress: 85,
    slug: "/programs/healthcare",
  },
  {
    status: "Active: Sponsorship Program",
    title: "Education",
    description: "Scholarships for underprivileged students in collaboration with The Optimist. Computer training, English coaching, and career counselling programs.",
    image: programEducation,
    progress: 72,
    slug: "/programs/education",
  },
  {
    status: "Active: Micro-Loans",
    title: "Empowering Communities",
    description: "Interest-free micro-loans from BDT 10,000 to 100,000 for small traders, entrepreneurs, and farmers. Flexible monthly repayment over 10 months to 3 years.",
    image: programEmpowerment,
    progress: 60,
    slug: "/programs/empowering-communities",
  },
  {
    status: "Active: Humanitarian Aid",
    title: "Community Support",
    description: "Housing support, food security, winter clothing distribution, Zakat fund management, elderly care, and disaster relief across Bagerhat district.",
    image: programCommunity,
    progress: 90,
    slug: "/programs/community-support",
  },
];

const Programs = () => {
  return (
    <section id="programs" className="section-narrative">
      <div className="container-site">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: powerEase }}
        >
          <span className="metric-label mb-4 block">Section 02 // What We Do</span>
          <h2 className="text-[clamp(2rem,5vw,4rem)] leading-[0.95] tracking-tight font-serif text-foreground max-w-[20ch]">
            Programs with <span className="text-primary">measurable</span> impact.
          </h2>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-0 border border-border">
          {programs.map((program, i) => (
            <motion.div
              key={program.title}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: powerEase, delay: i * 0.05 }}
              className="border-b border-r border-border group"
            >
              <Link to={program.slug} className="block">
                {/* Status tag */}
                <div className="px-6 py-3 border-b border-border">
                  <span className="font-mono text-xs uppercase tracking-[0.15em] text-primary">
                    {program.status}
                  </span>
                </div>
                {/* Image */}
                <div className="overflow-hidden h-52">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 power-ease"
                  />
                </div>
                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-2xl font-bold text-foreground">{program.title}</h3>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{program.description}</p>
                  {/* Progress bar */}
                  <div className="mt-4 h-1 bg-border">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${program.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: powerEase, delay: 0.3 }}
                      className="h-full bg-primary"
                    />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
