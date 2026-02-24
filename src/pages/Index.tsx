import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, DotIcon } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import heroBg from "@/assets/hero-bg.jpeg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project6 from "@/assets/project-6.jpg";
import CTABanner from "@/components/CTABanner";

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
import comic_con from "@/assets/comic_con.jpg";
import amd from "@/assets/amd.webp";
import iitdelhi from "@/assets/iit-delhi.png";
import iitkharagpur from "@/assets/iit-kharagpur.png";
import nitcalicut from "@/assets/iit-calicut.webp";

import Projects from "@/components/Projects";

const clients = [
  entity,
  garena,
  intel,
  alienware,
  krafton,
  samsung,
  oneplus,
  riot,
  iqoo,
  flipkart,
  playstation,
  acer,
  lenovo,
  comic_con,
  amd,
  iitdelhi,
  iitkharagpur,
  nitcalicut,
];

const services = [
  {
    title: "Casting",
    desc: "We provide professional esports casting for gaming streams, tournaments, and live events, delivering high-energy commentary that enhances gameplay, engages viewers, and elevates the broadcast experience.",
    img: project2,
  },
  {
    title: "Emcee Services",
    desc: "Our professional emcees host and anchor events with energy, clarity, and audience engagement, elevating brand presence across live shows, launches, and activations.",
    img: project3,
  },
  {
    title: "Production",
    desc: "We handle complete media production, from concept and planning to execution, delivering high-quality visual content tailored for digital, broadcast, and on-ground platforms.",
    img: project1,
  },
  {
    title: "Broadcasting",
    desc: "We specialize in live and recorded broadcasting, covering events with seamless production, real-time streaming, and technical precision across multiple platforms.",
    img: project3,
  },
];

const ratesDetails = [
  {
    title: "Yearly in Design",
    metrics: "20+",
  },
  {
    title: "Satisfied",
    metrics: "200+",
  },
  {
    title: "Successful Projects",
    metrics: "500+",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative  flex items-end overflow-hidden  text-center py-40">
        <div className="absolute inset-0">
          <img
            src={heroBg}
            alt="Production studio"
            className="w-full h-full object-cover "
          />
          <div
            className="absolute inset-0"
            style={{ background: "var(--gradient-hero)" }}
          />
          <div className="absolute inset-0 bg-background/50" />
        </div>
        <div className="relative z-10 section-padding pb-24 md:pb-32 w-full max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <p className="font-body text-xs tracking-[0.4em] uppercase mb-4 mr-10 block font-medium max-md:text-[7px] max-md:m-0">
              Production{" "}
              <DotIcon className="inline-block size-8 text-[#F77325]" /> Media{" "}
              <DotIcon className="inline-block size-8 text-[#30C0E5]" />{" "}
              Broadcasting
            </p>
            <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-foreground leading-[0.9] max-w-5xl">
              WE BRING <span className="text-gradient">STORIES</span> <br />
              TO THE SCREEN
            </h1>
            <div className="flex justify-center items-center">
              <p className="mt-6 text-muted-foreground text-base md:text-lg max-w-lg leading-relaxed">
                Award-winning production and broadcast services for brands,
                agencies, and visionary creators.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 mt-8 font-body text-sm tracking-widest uppercase text-primary hover:gap-5 transition-all duration-300 max-md:bg-primary max-md:text-white max-md:p-3 rounded-lg"
            >
              Start a Project <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="w-full flex justify-center ">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <p className="text-5xl font-medium font-display bg-gradient-to-r from-[#3C248E] via-[#F77325] to-[#30C0E5] bg-clip-text text-transparent max-md:text-center">
            Broadcasting Excellence & Producing Impact.
          </p>
        </motion.div>
      </section>
      <section className="  w-full flex justify-center mt-20">
        <div className="flex justify-evenly w-[90%] max-md:flex-wrap max-md:gap-5">
          {ratesDetails.map((rate, i) => (
            <div className="" key={i}>
              <h3 className="text-center text-4xl font-bold ">
                {rate.metrics}
              </h3>
              <p className="text-center text-lg">{rate.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Clients */}
      <section className="section-padding ">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="Clients"
            title="TRUSTED BY LEADING BRANDS"
            description="We've had the privilege of working with world-class organizations across media, entertainment, and corporate sectors."
            align="center"
          />
          <div className="grid grid-cols-3  lg:grid-cols-4 gap-4 max-md:gap-1 mt-5">
            {clients.map((client, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="py-5 px-3 flex items-center justify-center max-md:py-2 max-md:px-2"
              >
                <img
                  src={client}
                  alt="Behind the scenes"
                  className="w-full h-40 max-md:h-20 object-cover rounded-lg"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <Projects />

      {/* About Snippet */}
      <section className="section-padding max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <SectionHeading
              label="Who We Are"
              title="CRAFTED WITH VISION"
              description="ENS is a creative media studio driven by a passion for visual storytelling. We combine technical precision with artistic vision to produce content that captivates and inspires."
            />
            <Link
              to="/about"
              className="inline-flex items-center gap-3 font-body text-sm tracking-widest uppercase text-primary hover:gap-5 transition-all duration-300"
            >
              Know More <ArrowRight size={16} />
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative aspect-[4/3] overflow-hidden"
          >
            <img
              src={project6}
              alt="Studio"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 border border-primary/20" />
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="What We Do"
            title="OUR SERVICES"
            align="center"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-md:mt-5">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card p-8 text-center group relative overflow-hidden hover:border-primary/30 transition-colors duration-500 rounded-2xl"
              >
                {/* Background Image */}
                <img
                  src={service.img}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Optional Dark Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-500" />

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="font-display text-xl text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />

      <Footer />
    </div>
  );
};

export default Index;
