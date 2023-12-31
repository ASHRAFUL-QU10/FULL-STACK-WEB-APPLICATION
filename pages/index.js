import WhatsAppIcon from "@/src/components/WhatsAppIcon";
import MainLayout from "@/src/layouts/MainLayout";
import AboutUs from "@/src/sections/AboutUsSection/AboutUs";
import ContactUs from "@/src/sections/ContactUsSection/ContactUs";
import FaqSection from "@/src/sections/FaqSection/FaqSection";
import HeroSection from "@/src/sections/HeroSection/HeroSection";
import ServiceSection from "@/src/sections/ServiceSection/ServiceSection";
import Testimonial from "@/src/sections/TestimonialsSection/Testimonial";
import Head from "next/head";

const index = () => {
  return (
    <>
    
      <Head>
        <title>Aooz | Home Page</title>
      </Head>
      <WhatsAppIcon />
      <MainLayout>
        <HeroSection />
        <ServiceSection />
        <Testimonial/>
        <FaqSection/>
        <AboutUs/>
        <ContactUs/>
      </MainLayout>
    </>
  );
};

export default index;
