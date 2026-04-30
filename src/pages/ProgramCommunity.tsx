import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Home, Utensils, Shirt, Heart, HandHeart, Droplets } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import programCommunity from "@/assets/program-community.jpg";

const powerEase = [0.19, 1, 0.22, 1] as const;

const initiatives = [
  {
    icon: Home,
    title: "Housing Support",
    desc: "Financial aid to poor and orphan families for home repairs, renovations and essential housing-related expenses, ensuring vulnerable members have a safe and stable place to live.",
  },
  {
    icon: Utensils,
    title: "Food Security",
    desc: "Assistance with rice purchases and essential food supplies to ensure families have access to adequate nutrition and sustenance.",
  },
  {
    icon: Shirt,
    title: "Winter Clothing Distribution",
    desc: "Regular distribution of winter clothing, blankets and warm supplies to protect impoverished and elderly individuals from harsh winter conditions.",
  },
  {
    icon: HandHeart,
    title: "Zakat Fund Management",
    desc: "Systematic management of Zakat contributions, meticulously allocated to deserving individuals in accordance with established policy.",
  },
  {
    icon: Heart,
    title: "Elderly Care",
    desc: "Financial assistance to senior citizens, ensuring their well-being and providing for their needs with dignity and security in their later years.",
  },
  {
    icon: Droplets,
    title: "Safe Drinking Water",
    desc: "Projects to ensure access to safe drinking water in vulnerable communities across Bagerhat district.",
  },
];

const ProgramCommunity = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <img src={programCommunity} alt="Community Support" className="absolute inset-0 w-full h-full object-cover" />
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
              Community Support
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: powerEase, delay: 0.1 }}
              className="mt-3 font-mono text-sm text-primary-foreground/70 uppercase tracking-[0.15em]"
            >
              Humanitarian Aid & Social Welfare
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
                Comprehensive support for <span className="text-primary">vulnerable</span> communities
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Beyond healthcare and education, the Trust extends its assistance in various ways to improve the lives of underprivileged people. We provide both financial and non-financial support including housing aid, food security, winter clothing, Zakat fund management, elderly care, and disaster relief across Bagerhat district.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                We also help individuals perform Umrah, offer marriage support for those in need, and make donations to registered social welfare organizations across Bangladesh. Our disaster relief efforts include distributing aid during natural calamities and supporting orphans and elderly people.
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: powerEase, delay: 0.1 }}
              className="border border-border p-6"
            >
              <span className="metric-label block mb-2">Focus Area Allocation</span>
              <p className="metric-value">40%</p>
              <p className="mt-2 text-sm text-muted-foreground">of total Trust expenditure — our largest program area.</p>
              <div className="mt-4 h-2 bg-border">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "40%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: powerEase }}
                  className="h-full bg-primary"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Initiatives */}
      <section className="section-data border-t border-border">
        <div className="container-site">
          <span className="metric-label mb-4 block">Key Initiatives</span>
          <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] leading-tight font-serif text-foreground mb-12">
            How we support communities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-border">
            {initiatives.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: powerEase, delay: i * 0.05 }}
                className="p-6 border-b border-r border-border"
              >
                <item.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-serif text-lg font-bold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProgramCommunity;
