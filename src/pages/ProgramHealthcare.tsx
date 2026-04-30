import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Clock, Users, Stethoscope, Pill, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroClinic from "@/assets/hero-clinic.jpg";

const powerEase = [0.19, 1, 0.22, 1] as const;

const doctors = [
  "Dr. Suhash Ranjan Haldar, MBBS",
  "Dr. Monirul Islam Sakil, MBBS (Alternate)",
  "Dr. Prodip Kumar Bokshi, MBBS (Alternate)",
  "Dr. Sukanto Mondol, MBBS (Alternate)",
  "Dr. Jesmin Sultana Doly, MBBS",
];

const advisors = [
  "Dr. Mofizul Islam Sachi — Diabetes & Neurology Specialist, BIRDEM Hospital, Dhaka",
  "Dr. Mousumi Ahmed Moury, MBBS, MD — Child Specialist, Alok Hospital, Mirpur, Dhaka",
];

const services = [
  { icon: Stethoscope, title: "General Assessments", desc: "Treatment for fever, colds, allergies, headaches, malnutrition, dizziness and digestive problems." },
  { icon: Heart, title: "Clinical Examinations", desc: "Examinations for diabetes, heart disease, arthritis and other chronic conditions." },
  { icon: Users, title: "Children & Women's Health", desc: "Children's health issues, menstrual problems, and pregnancy-related concerns." },
  { icon: Pill, title: "Free Medicines", desc: "Pain relievers, antibiotics, antacids, vitamins, iron and folic acid supplements provided free of charge." },
];

const ProgramHealthcare = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <img src={heroClinic} alt="Free Friday Clinic" className="absolute inset-0 w-full h-full object-cover" />
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
              Healthcare
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: powerEase, delay: 0.1 }}
              className="mt-3 font-mono text-sm text-primary-foreground/70 uppercase tracking-[0.15em]"
            >
              Free Friday Clinic — Est. 14 January 2011
            </motion.p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="section-narrative">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: powerEase }}
              className="lg:col-span-2"
            >
              <span className="metric-label mb-4 block">Overview</span>
              <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] leading-tight font-serif text-foreground">
                Free medical care for <span className="text-primary">Kashimpur</span> community
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                The Free-Friday Clinic provides vital medical care to the community of Kashimpur, Bagerhat Sadar Upazila, in the Bagerhat District of Bangladesh. The clinic operates every Friday from 9:00 a.m. to 12:00 p.m., offering free consultations, prescriptions and medicines.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                From July 2023 to June 2024, the clinic served a total of 1,946 patients. Our services are utilized more by women (52%) than men (48%). The majority of patients are returning visitors, with 77% of male patients and 72% of female patients being repeat visitors.
              </p>
            </motion.div>

            {/* Stats sidebar */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: powerEase, delay: 0.1 }}
              className="border border-border p-6 space-y-6"
            >
              <div>
                <span className="metric-label">Patients Served (2023–24)</span>
                <p className="metric-value mt-1">1,946</p>
              </div>
              <div className="border-t border-border pt-6">
                <span className="metric-label">Schedule</span>
                <div className="flex items-center gap-2 mt-2 text-foreground">
                  <Clock className="w-4 h-4 text-primary" />
                  <span className="text-sm font-mono">Every Friday, 9 AM – 12 PM</span>
                </div>
              </div>
              <div className="border-t border-border pt-6">
                <span className="metric-label">Female Patients</span>
                <p className="metric-value mt-1">52%</p>
              </div>
              <div className="border-t border-border pt-6">
                <span className="metric-label">Core Doctors</span>
                <p className="metric-value mt-1">5</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-data border-t border-border">
        <div className="container-site">
          <span className="metric-label mb-4 block">Services Provided</span>
          <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] leading-tight font-serif text-foreground mb-12">
            Comprehensive medical care
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-border">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: powerEase, delay: i * 0.05 }}
                className="p-6 border-b border-r border-border"
              >
                <s.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-serif text-xl font-bold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Medical Team */}
      <section className="section-narrative border-t border-border">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <span className="metric-label mb-4 block">Our Team</span>
              <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] leading-tight font-serif text-foreground">
                Dedicated medical professionals
              </h2>
              <div className="mt-8 space-y-3">
                {doctors.map((d) => (
                  <div key={d} className="flex items-center gap-3 border border-border p-4">
                    <Stethoscope className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-foreground">{d}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <span className="metric-label mb-4 block">Medical Advisors</span>
              <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] leading-tight font-serif text-foreground">
                Specialist consultations
              </h2>
              <div className="mt-8 space-y-3">
                {advisors.map((a) => (
                  <div key={a} className="flex items-start gap-3 border border-border p-4">
                    <Heart className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{a}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 border border-border p-6 bg-secondary">
                <span className="metric-label block mb-2">Medical Camps</span>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We also arrange dental camps, child healthcare camps, eye check-up camps and general health awareness programs, bringing healthcare closer to underprivileged communities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProgramHealthcare;
