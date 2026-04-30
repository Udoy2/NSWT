import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, GraduationCap, Monitor, Languages, Briefcase } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import programEducation from "@/assets/program-education.jpg";

const powerEase = [0.19, 1, 0.22, 1] as const;

const programs = [
  {
    icon: GraduationCap,
    title: "Educational Sponsorship",
    desc: "We continuously distribute funds to poor and meritorious students to help them continue their studies and achieve their academic goals. In collaboration with The Optimist, a US-origin Bangladesh Chapter, we have been involved in a child sponsorship program since 21 May 2015.",
  },
  {
    icon: Monitor,
    title: "Computer Training",
    desc: "Our Computer Training Program provides foundational knowledge and practical skills to enhance employability and digital literacy. Classes are conducted in a structured format, offering hands-on training to prepare students for future opportunities.",
  },
  {
    icon: Languages,
    title: "English Coaching",
    desc: "Our English Coaching Program offers students the opportunity to improve their language proficiency. This program aims to build confidence and provide the tools needed for personal and professional growth.",
  },
  {
    icon: Briefcase,
    title: "Career Counselling",
    desc: "We provide valuable insights into various career paths, ensuring that participants are well-prepared for success in the modern world.",
  },
];

const ProgramEducation = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <img src={programEducation} alt="Education Program" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="container-site">
            <Link to="/#programs" className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground font-mono text-xs uppercase tracking-[0.15em] mb-4 transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to Programs
            </Link>
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: powerEase }}
              className="text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] tracking-tight font-serif text-primary-foreground"
            >
              Education
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: powerEase, delay: 0.1 }}
              className="mt-3 font-mono text-sm text-primary-foreground/70 uppercase tracking-[0.15em]"
            >
              Sponsorship & Skill Development Programs
            </motion.p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="section-narrative">
        <div className="container-site">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: powerEase }}
            className="max-w-3xl"
          >
            <span className="metric-label mb-4 block">Overview</span>
            <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] leading-tight font-serif text-foreground">
              Empowering through <span className="text-primary">knowledge</span>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Through scholarships and sponsorships, we distribute funds to poor and meritorious students, helping them continue their studies and achieve their academic goals. Our partnership with The Optimist since 2015 allows us to reach a wider group of underprivileged orphans and talented young minds.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Beyond financial support, we equip individuals with essential skills for the modern world through computer training, English coaching, and career counselling — building confidence and preparing participants for success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="section-data border-t border-border">
        <div className="container-site">
          <span className="metric-label mb-4 block">Our Programs</span>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-0 border border-border">
            {programs.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: powerEase, delay: i * 0.05 }}
                className="p-8 border-b border-r border-border"
              >
                <p.icon className="w-10 h-10 text-primary mb-5" />
                <h3 className="font-serif text-xl font-bold text-foreground">{p.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Allocation */}
      <section className="section-narrative border-t border-border">
        <div className="container-site">
          <div className="max-w-3xl">
            <span className="metric-label mb-4 block">Focus Area Allocation</span>
            <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] leading-tight font-serif text-foreground mb-8">
              20% of total expenditure
            </h2>
            <div className="h-3 bg-border w-full">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "20%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: powerEase }}
                className="h-full bg-primary"
              />
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Education receives 20% of the Trust's total expenditure, reflecting our deep commitment to building a knowledgeable and empowered generation.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProgramEducation;
