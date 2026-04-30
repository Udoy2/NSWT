import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ImpactMetrics from "@/components/ImpactMetrics";
import TrustBar from "@/components/TrustBar";
import Protocol from "@/components/Protocol";
import Programs from "@/components/Programs";
import About from "@/components/About";
import GetInvolved from "@/components/GetInvolved";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <ImpactMetrics />
      <TrustBar />
      <Protocol />
      <Programs />
      <About />
      <GetInvolved />
      <Footer />
    </div>
  );
};

export default Index;
