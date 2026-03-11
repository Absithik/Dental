import { HeroSection } from "@/components/home/herosection";
import { AboutSection } from "@/components/home/about";
import { DentalServices } from "@/components/home/services";
import { WhiteningSection } from "@/components/home/whitening";
import { WhyChooseUs } from "@/components/home/whychooseus";
import { DoctorsSection } from "@/components/home/doctors";
import { Testimonials } from "@/components/home/testimonials";
import { AppointmentSection } from "@/components/home/appointment";
import { FAQSection } from "@/components/home/faq";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <AppointmentSection />
      <DentalServices />
      <WhiteningSection />
      <DoctorsSection />
      <WhyChooseUs />
      <Testimonials />
      <FAQSection />
      {/* <CTASection /> */}
    </>
  );
}
