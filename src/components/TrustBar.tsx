const values = [
  "Compassion",
  "Integrity",
  "Inclusiveness",
  "Commitment",
  "Sustainability",
  "Collaboration",
  "Excellence",
];

const TrustBar = () => {
  return (
    <div className="border-y border-border overflow-hidden bg-muted py-4">
      <div className="flex animate-ticker whitespace-nowrap">
        {[...values, ...values].map((v, i) => (
          <span
            key={i}
            className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mx-8 flex-shrink-0"
          >
            {v} ●
          </span>
        ))}
      </div>
    </div>
  );
};

export default TrustBar;
