import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, HandCoins, TrendingUp, Users, RefreshCw } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import programEmpowerment from "@/assets/program-empowerment.jpg";

const powerEase = [0.19, 1, 0.22, 1] as const;

const features = [
  { icon: HandCoins, label: "Loan Range", value: "BDT 10,000 – 100,000" },
  { icon: TrendingUp, label: "Interest Rate", value: "0% (Interest-Free)" },
  { icon: Users, label: "Beneficiaries", value: "Traders, Entrepreneurs, Farmers" },
  { icon: RefreshCw, label: "Repayment Period", value: "10 months – 3 years" },
];

const ProgramEmpowerment = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <img src={programEmpowerment} alt="Empowering Communities" className="absolute inset-0 w-full h-full object-cover" />
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
              Empowering Communities
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: powerEase, delay: 0.1 }}
              className="mt-3 font-mono text-sm text-primary-foreground/70 uppercase tracking-[0.15em]"
            >
              Interest-Free Micro-Loans Program
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
                Building <span className="text-primary">self-reliance</span> through micro-finance
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                We provide interest-free micro-loans ranging from BDT 10,000 to 100,000 to help small traders, entrepreneurs and farmers build and sustain their livelihoods. These loans are designed to be accessible and are recovered in flexible monthly installments over a period of 10 months to 3 years, allowing beneficiaries to repay without financial strain.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                This sustainable model ensures that the fund remains a revolving resource, continuously available to help new beneficiaries. The provision of these loans directly empowers individuals to take control of their economic future, fostering a culture of self-reliance and community growth.
              </p>
            </motion.div>

            {/* Allocation */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: powerEase, delay: 0.1 }}
              className="border border-border p-6"
            >
              <span className="metric-label block mb-2">Focus Area Allocation</span>
              <p className="metric-value">7%</p>
              <p className="mt-2 text-sm text-muted-foreground">of total Trust expenditure dedicated to empowering communities through micro-loans.</p>
              <div className="mt-4 h-2 bg-border">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "7%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: powerEase }}
                  className="h-full bg-primary"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="section-data border-t border-border">
        <div className="container-site">
          <span className="metric-label mb-4 block">Loan Structure</span>
          <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] leading-tight font-serif text-foreground mb-12">
            How the program works
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-border">
            {features.map((f, i) => (
              <motion.div
                key={f.label}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: powerEase, delay: i * 0.05 }}
                className="p-6 border-b border-r border-border text-center"
              >
                <f.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                <span className="metric-label">{f.label}</span>
                <p className="mt-2 font-serif text-lg font-bold text-foreground">{f.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Model explanation */}
      <section className="section-narrative border-t border-border">
        <div className="container-site max-w-3xl">
          <span className="metric-label mb-4 block">Revolving Fund Model</span>
          <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] leading-tight font-serif text-foreground">
            A sustainable cycle of empowerment
          </h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {["Loan Disbursed", "Livelihood Built", "Repayment Recycled"].map((step, i) => (
              <div key={step} className="border border-border p-6 text-center">
                <span className="inline-flex items-center justify-center w-10 h-10 border border-primary text-primary font-mono text-sm font-bold mb-3">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="font-serif font-bold text-foreground">{step}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-muted-foreground leading-relaxed">
            The revolving fund model ensures that repaid loans are immediately made available to new beneficiaries, creating a self-sustaining cycle that continuously supports economic independence across the community.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProgramEmpowerment;
