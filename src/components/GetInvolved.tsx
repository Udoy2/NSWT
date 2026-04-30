import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const powerEase = [0.19, 1, 0.22, 1] as const;

const GetInvolved = () => {
  return (
    <section id="donate" className="section-narrative">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: powerEase }}
          >
            <span className="metric-label mb-4 block">Section 04 // Get Involved</span>
            <h2 className="text-[clamp(2rem,5vw,4rem)] leading-[0.95] tracking-tight font-serif text-foreground max-w-[18ch]">
              Invest in <span className="text-primary">measurable</span> change.
            </h2>
            <p className="mt-8 text-lg leading-relaxed max-w-[55ch] text-muted-foreground">
              Every contribution is tracked, allocated, and reported with full transparency. Your donation directly funds healthcare, education, and community empowerment programs in Bagerhat, Bangladesh.
            </p>
          </motion.div>

          {/* Right: Bank details */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: powerEase, delay: 0.1 }}
            className="border border-border"
          >
            <div className="px-6 py-4 border-b border-border bg-muted">
              <span className="font-mono text-xs uppercase tracking-[0.15em] text-foreground">
                Donation Details // Bank Transfer
              </span>
            </div>
            <div className="p-6 space-y-4">
              {[
                ["Account Name", "Nesar Shahin Welfare Trust"],
                ["Bank", "BRAC Bank PLC."],
                ["Account Type", "Current Account"],
                ["Account No.", "1501202063847001"],
                ["Branch", "Karwan Bazar Branch, Dhaka"],
              ].map(([label, value]) => (
                <div key={label} className="border-b border-border pb-3">
                  <span className="metric-label">{label}</span>
                  <p className="mt-1 text-sm text-foreground font-medium">{value}</p>
                </div>
              ))}
            </div>
            <div className="px-6 pb-6">
              <Button variant="signal" size="lg" className="w-full" asChild>
                <a href="mailto:anwar@hodavasi.com">Contact to Donate →</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;
