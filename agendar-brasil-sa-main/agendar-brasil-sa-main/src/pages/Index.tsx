
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/home/Hero";
import { Features } from "@/components/home/Features";
import { HowItWorks } from "@/components/home/HowItWorks";
import { DoctorSearch } from "@/components/home/DoctorSearch";
import { Specialties } from "@/components/home/Specialties";
import { Testimonials } from "@/components/home/Testimonials";
import { CallToAction } from "@/components/home/CallToAction";
import { Footer } from "@/components/home/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Specialties />
        <HowItWorks />
        <DoctorSearch />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
