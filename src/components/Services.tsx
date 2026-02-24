import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import pb3 from "@/assets/ens/pb3.jpeg";
import b3 from "@/assets/ens/b3.jpeg";
import h1 from "@/assets/ens/comic.jpeg";
import c4 from "@/assets/ens/c4.jpeg";

const services = [
    {
      title: "Live Production",
      desc: "We manage comprehensive live event production for concerts, corporate showcases, and high-profile smartphone unveilings. Our work includes launch events for iQOO and Samsung, delivering structured execution, advanced technical management, and refined audience-focused experiences.",
      img: pb3,
    },
    {
      title: "Live Broadcasting",
      desc: "We specialize in multi-platform live streaming for sports, eSports, and institutional events with consistent quality and reliability. Our portfolio includes collaborations with Intel, Flipkart, Lenovo, AMD, and Entity, alongside broadcast coverage for Acer Predator League, iQOO India League, PUBG Mobile tournaments, cricket events, and productions at IIT Delhi and NIT Calicut.",
      img: b3,
    },
    {
      title: "Emcee / Host Services",
      desc: "Our professional hosting services bring clarity, confidence, and energy to every stage. Having partnered with PlayStation and Lenovo, and hosted platforms such as Comic Con India and major brand showcases, we ensure smooth transitions, audience connection, and impactful event delivery.",
      img: h1,
    },
    {
      title: "Campus Tours & Brand Activations",
      desc: "We design and execute strategic campus outreach and brand engagement programs across leading institutions. Working with Krafton, PlayStation, Riot Games, and Smaaash, we have delivered activations across IITs, NITs, and NSUT, creating strong brand presence and meaningful student engagement.",
      img: c4,
    },
  ];

export default function Services() {
  return (
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
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-500" />

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
  )
}
