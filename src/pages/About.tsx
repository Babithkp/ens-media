import { motion } from "framer-motion";
import { Film, Radio, Tv, Camera, Clapperboard, Palette } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import project1 from "@/assets/project-1.jpg";
import project5 from "@/assets/project-5.jpg";
import heroBg from "@/assets/hero-bg.jpg";
import entity from "@/assets/entity.jpg";
import garena from "@/assets/garena.jpg";
import intel from "@/assets/intel.webp";
import alienware from "@/assets/alienware.png";
import krafton from "@/assets/krafton(bgmi).png";
import samsung from "@/assets/samsung.png";
import oneplus from "@/assets/oneplus.png";
import riot from "@/assets/riot.jpg";
import iqoo from "@/assets/Iqoo.png";
import flipkart from "@/assets/Flipkart.webp";
import playstation from "@/assets/Playstation.jpg";
import acer from "@/assets/Acer.jpg";
import lenovo from "@/assets/Lenovo.png";
import CTABanner from "@/components/CTABanner";
import comic_con from "@/assets/comic_con.jpg";
import amd from "@/assets/amd.webp";
import iitdelhi from "@/assets/iit-delhi.png";
import iitkharagpur from "@/assets/iit-kharagpur.png";
import nitcalicut from "@/assets/iit-calicut.webp";

import Metrics from "@/components/Metrics";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import pb1 from "@/assets/ens/pb1.jpeg";
import b7 from "@/assets/ens/b7.jpeg";
import c6 from "@/assets/ens/c6.jpeg";
import h4 from "@/assets/ens/iitdehli2.JPG.jpeg"; 
import Autoplay from "embla-carousel-autoplay";
import Services from "@/components/Services";

const works = [
  {
    img: pb1,
    title: "Live Production",
  },
  {
    img: b7,
    title: "Live Broadcasting",
  },
  {
    img: c6,
    title: "Brand Activation",
  },
  {
    img: h4,
    title: "EMCEE / Hosting",
  },
];



const clients = [
  entity,
  intel,
  garena,
  krafton,
  iitkharagpur,
  iitdelhi,
  oneplus,
  riot,
  alienware,
  iqoo,
  playstation,
  samsung,
  acer,
  flipkart,
  nitcalicut,
  lenovo,
  comic_con,
  amd,
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="relative h-screen flex items-center overflow-hidden text-center">
        <div className="absolute inset-0">
          <img
            src={heroBg}
            alt="Production studio"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ background: "var(--gradient-hero)" }}
          />
          <div className="absolute inset-0 bg-background/50" />
        </div>
        <div className="relative z-10 section-padding md:pb-32 w-full max-w-7xl mx-auto ">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <span className="font-body text-xs tracking-[0.4em] uppercase text-primary mb-4 block">
              About Us
            </span>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground leading-[0.9] ">
              BUILT ON <span className="text-gradient">CRAFT</span>,<br />
              DRIVEN BY VISION
            </h1>
          </motion.div>
        </div>
      </section>

      <Metrics />

      {/* Clients */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="Clients"
            title="TRUSTED BY LEADING BRANDS"
            description="We've had the privilege of working with world-class organizations across media, entertainment, and corporate sectors."
            align="center"
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-md:mt-5">
            {clients.map((client, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className=" py-5 px-3 flex items-center justify-center max-md:py-2 max-md:px-2"
              >
                <img
                  src={client}
                  alt="Behind the scenes"
                  className="w-full h-40  rounded-lg"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Carousel
                opts={{ loop: true }}
                plugins={[
                  Autoplay({
                    delay: 3000,
                    stopOnInteraction: false,
                  }),
                ]}
              >
                <CarouselContent>
                  {works.map((src, index) => (
                    <CarouselItem key={index}>
                      <img
                        src={src.img}
                        alt={src.title}
                        className="w-full h-96 max-md:h-60 object-center"
                      />
                      <p className="capitalize text-sm text-center">
                        {src.title}
                      </p>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <SectionHeading label="Our Story" title="WHO WE ARE?" />
            <div className="space-y-4 text-muted-foreground text-sm md:text-base leading-relaxed">
              <p>
                ENS Media, Productions & Broadcasting is a full-service media
                production company specializing in live production, live
                broadcasting, brand activations, campus tours, and social media
                marketing across India.
              </p>
              <p>
                We work with leading brands, institutions, and event partners to
                deliver professionally managed events, high-definition broadcast
                solutions, and strategic on-ground campaigns. Our expertise
                spans corporate events, eSports tournaments, smartphone
                launches, and large-scale campus engagements.
              </p>
              <p>
                With a strong focus on technical precision, structured
                execution, and audience engagement, ENS ensures every project is
                delivered seamlessly, from concept development to final
                execution.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <Services/>

      <CTABanner />

      <Footer />
    </div>
  );
};

export default About;
