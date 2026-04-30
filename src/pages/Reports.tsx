import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, FileText, Download, ExternalLink, Calendar } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const powerEase = [0.19, 1, 0.22, 1] as const;

type Report = {
  title: string;
  category: string;
  year: string;
  description: string;
  file: string;
  pages?: string;
};

const reports: Report[] = [
  {
    title: "Annual Report 2025 (Draft)",
    category: "Annual Report",
    year: "2025",
    description:
      "Comprehensive overview of NSWT's activities, programs, beneficiaries and operational milestones for the 2025 reporting cycle.",
    file: "/reports/DRAFT_Report_2025.pdf",
  },
  {
    title: "Statement of Zakat Fund",
    category: "Financial Statement",
    year: "2024",
    description:
      "Detailed statement showing collection, disbursement and current balance of the NSWT Zakat fund managed for the welfare of eligible recipients.",
    file: "/reports/Statement_of_zakat_fund_NSWT.pdf",
  },
  {
    title: "Scholarship Recipients — Education Program",
    category: "Program Report",
    year: "2024",
    description:
      "Official list of underprivileged students receiving scholarships from NSWT in collaboration with The Optimist.",
    file: "/reports/List_of_Students_Scholarships_NSWT.pdf",
  },
];

const Reports = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-12 border-b border-border bg-muted">
        <div className="container-site px-6 md:px-12">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground font-mono text-xs uppercase tracking-[0.15em] mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <span className="metric-label mb-4 block">Section 04 // Transparency</span>
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: powerEase }}
            className="text-[clamp(2rem,5vw,4rem)] leading-[0.95] tracking-tight font-serif text-foreground max-w-[22ch]"
          >
            Annual & <span className="text-primary">Financial</span> Reports.
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: powerEase, delay: 0.1 }}
            className="mt-6 text-lg leading-relaxed max-w-[65ch] text-muted-foreground"
          >
            Full disclosure is at the core of how NSWT operates. Every report below is publicly
            available — review our financials, program outcomes, and beneficiary records in detail.
          </motion.p>
        </div>
      </section>

      {/* Reports list */}
      <section className="section-narrative">
        <div className="container-site px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-border">
            {reports.map((r, i) => (
              <motion.article
                key={r.file}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: powerEase, delay: i * 0.05 }}
                className="border-b border-r border-border bg-background group flex flex-col"
              >
                {/* Top label */}
                <div className="px-6 py-3 border-b border-border flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-[0.15em] text-primary">
                    {r.category}
                  </span>
                  <span className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground inline-flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {r.year}
                  </span>
                </div>

                {/* Document preview block */}
                <div className="relative h-56 bg-muted border-b border-border overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 opacity-[0.04]"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(0deg, hsl(var(--foreground)) 0 1px, transparent 1px 8px)",
                    }}
                  />
                  <div className="relative flex flex-col items-center justify-center text-center px-6">
                    <div className="w-16 h-20 border-2 border-foreground/80 bg-background flex items-center justify-center relative shadow-sm group-hover:scale-105 transition-transform duration-500">
                      <FileText className="w-7 h-7 text-foreground/80" strokeWidth={1.25} />
                      <span className="absolute -top-2 -right-2 px-1.5 py-0.5 bg-primary text-primary-foreground font-mono text-[10px] uppercase tracking-wider">
                        PDF
                      </span>
                    </div>
                    <span className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      Official Document
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h2 className="font-serif text-2xl font-bold text-foreground leading-tight">
                    {r.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground flex-1">
                    {r.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href={r.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-foreground text-background font-mono text-xs uppercase tracking-[0.15em] hover:bg-primary transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      View PDF
                    </a>
                    <a
                      href={r.file}
                      download
                      className="inline-flex items-center gap-2 px-4 py-2 border border-border text-foreground font-mono text-xs uppercase tracking-[0.15em] hover:bg-muted transition-colors"
                    >
                      <Download className="w-3.5 h-3.5" />
                      Download
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-12 p-6 border border-border bg-muted">
            <span className="font-mono text-xs uppercase tracking-[0.15em] text-primary">
              Note // Transparency
            </span>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground max-w-[70ch]">
              For prior-year reports, audited statements, or specific program data not listed here,
              please contact our Trustees directly via the contact details in the footer.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Reports;
