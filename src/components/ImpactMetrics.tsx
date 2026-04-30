import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const metrics = [
  { label: "Metric 01 // Families Reached", value: 1500, suffix: "+" },
  { label: "Metric 02 // Active Projects", value: 15, suffix: "" },
  { label: "Metric 03 // Annual Funding (BDT)", value: 13, suffix: "M+" },
  { label: "Metric 04 // Years of Service", value: 19, suffix: "+" },
];

const powerEase = [0.19, 1, 0.22, 1] as const;

function useCountUp(target: number, inView: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let frame: number;
    const duration = 1500;
    const start = performance.now();
    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [target, inView]);
  return count;
}

const MetricCard = ({ label, value, suffix }: { label: string; value: number; suffix: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const count = useCountUp(value, inView);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: powerEase }}
      className="border-t border-border pt-6"
    >
      <span className="metric-label">{label}</span>
      <div className="metric-value mt-2">
        {count.toLocaleString()}{suffix}
      </div>
    </motion.div>
  );
};

const ImpactMetrics = () => {
  return (
    <section id="impact" className="section-data">
      <div className="container-site">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {metrics.map((m) => (
            <MetricCard key={m.label} {...m} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactMetrics;
