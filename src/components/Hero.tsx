import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-clinic.jpg";

const powerEase = [0.19, 1, 0.22, 1] as const;

const Hero = () => {
  return (
    <section className="min-h-screen pt-16 flex items-center">
      <div className="container-site w-full px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
          {/* Left: Headline */}
          <div className="lg:col-span-6 xl:col-span-5">
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: powerEase }}
            >
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6 block">
                Est. 2010 — Bagerhat, Bangladesh
              </span>
              <h1 className="text-[clamp(2.5rem,7vw,6rem)] leading-[0.88] tracking-tight text-foreground font-serif">
                Nesar-Shahin{" "}
                <span className="text-primary">Welfare</span>{" "}
                Trust.
              </h1>
              <p className="mt-8 text-lg leading-relaxed max-w-[55ch] text-muted-foreground">
                Social welfare, engineered for scale. Invest in measurable change across education, healthcare, and sustainable community development.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button variant="signal" size="xl" asChild>
                  <a href="#donate">Donate Now</a>
                </Button>
                <Button variant="ink" size="xl" asChild>
                  <a href="#protocol">The Protocol →</a>
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Right: Image + Data box */}
          <div className="lg:col-span-6 xl:col-span-7 relative">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: powerEase, delay: 0.15 }}
              className="relative"
            >
              <div className="overflow-hidden border border-border">
                <img
                  src={heroImage}
                  alt="Free Friday Clinic providing medical care to the community"
                  className="w-full h-[400px] lg:h-[550px] object-cover hover:scale-105 transition-transform duration-700 power-ease"
                />
              </div>
              {/* Overlapping data box */}
              <div className="absolute -bottom-6 -left-6 bg-muted border border-border p-6 max-w-[280px]">
                <span className="metric-label">Field Report // Free Friday Clinic</span>
                <div className="metric-value mt-2">1,946</div>
                <span className="font-mono text-xs text-muted-foreground">Patients served (2023–24)</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
