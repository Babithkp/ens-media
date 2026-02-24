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
import iitdelhi from "@/assets/iit-delhi.png"
import iitkharagpur from "@/assets/iit-kharagpur.png"
import nitcalicut from "@/assets/iit-calicut.webp"
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const services = [
  {
    title: "Live Production",
    desc: "We deliver end-to-end live production for concerts, large-scale shows, smartphone launches, and corporate events. Our portfolio includes production support for smartphone launch events by iQOO and Samsung, ensuring seamless execution, technical precision, and impactful audience experiences.",
    img: project2,
  },
  {
    title: "Live Broadcasting",
    desc: "We provide high-definition, real-time live broadcasting across digital platforms for sports, eSports, and institutional productions. Our brand partnerships include Intel, Flipkart, Lenovo, AMD, and Entity, with event coverage for Acer Predator League, iQOO India League, PUBG Mobile tournaments, cricket broadcasts, and productions at IIT Delhi and NIT Calicut.",
    img: project3,
  },
  {
    title: "Emcee / Host Services",
    desc: "We offer professional emcee and hosting services with commanding stage presence and strong audience engagement. We have worked with PlayStation and Lenovo, hosting major events including Comic Con India and large-scale brand launches.",
    img: project1,
  },
  {
    title: "Campus Tours & Brand Activations",
    desc: "We execute nationwide campus tours and immersive brand activations that drive on-ground engagement. Our collaborations include Krafton, PlayStation, Riot Games, and Smaaash across institutions such as IITs, NITs, and NSUT.",
    img: project3,
  },
];


const clients = [
  entity, garena, intel, alienware, krafton, samsung, oneplus, riot, iqoo, flipkart, playstation, acer, lenovo,comic_con,amd,iitdelhi,iitkharagpur,nitcalicut
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="relative h-screen flex items-center overflow-hidden text-center">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Production studio" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
          <div className="absolute inset-0 bg-background/50" />
        </div>
        <div className="relative z-10 section-padding md:pb-32 w-full max-w-7xl mx-auto ">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <span className="font-body text-xs tracking-[0.4em] uppercase text-primary mb-4 block">About Us</span>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground leading-[0.9] ">
              BUILT ON <span className="text-gradient">CRAFT</span>,<br />
              DRIVEN BY VISION
            </h1>
          </motion.div>
        </div>
      </section>


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
                <img src={client} alt="Behind the scenes" className="w-full h-40  rounded-lg" />

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
              <img src={project1} alt="Behind the scenes" className="w-full h-full object-cover" />
              <div className="absolute inset-0 border border-primary/20" />
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
                ENS Media is a full-service media production company based in Los Angeles.
                We specialize in creating cinematic content that moves audiences — from brand campaigns
                and documentaries to live broadcasts and corporate media.
              </p>
              <p>
                Our approach is rooted in collaboration, creative integrity, and technical excellence.
                Every project begins with understanding the story our clients want to tell, and we bring
                the expertise, equipment, and artistry to bring that story to life.
              </p>
              <p>
                With a team of experienced producers, directors, cinematographers, and editors,
                we deliver broadcast-quality content that meets the highest industry standards.
              </p>
            </div>
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

export default About;
