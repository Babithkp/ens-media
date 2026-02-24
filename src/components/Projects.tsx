import Autoplay from "embla-carousel-autoplay";import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import SectionHeading from "./SectionHeading";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import { motion } from "framer-motion";

import b1 from "@/assets/ens/b1.jpeg";
import b2 from "@/assets/ens/b2.jpeg";
import b3 from "@/assets/ens/b3.jpeg";
import b4 from "@/assets/ens/b4.jpeg";
import b5 from "@/assets/ens/b5.jpeg";
import b6 from "@/assets/ens/b6.png";
import b7 from "@/assets/ens/b7.jpeg";
import b8 from "@/assets/ens/b8.jpeg";
import b9 from "@/assets/ens/b9.jpeg";
import b10 from "@/assets/ens/b10.jpeg";
import b11 from "@/assets/ens/b11.jpeg";
import b12 from "@/assets/ens/b12.jpeg";
import b13 from "@/assets/ens/b13.jpeg";

import p1 from "@/assets/ens/p1.jpeg";
import p2 from "@/assets/ens/p2.jpeg";
import p3 from "@/assets/ens/p3.jpeg";
import p4 from "@/assets/ens/p4.jpeg";

import h1 from "@/assets/ens/h1.jpeg";
import h2 from "@/assets/ens/h2.jpeg";
import h3 from "@/assets/ens/h3.jpeg";

import c1 from "@/assets/ens/c1.jpeg";
import c2 from "@/assets/ens/c2.jpeg";
import c3 from "@/assets/ens/c3.jpeg";
import c4 from "@/assets/ens/c4.jpeg";
import c5 from "@/assets/ens/c5.jpeg";
import c6 from "@/assets/ens/c6.jpeg";

import pb1 from "@/assets/ens/pb1.jpeg";
import pb2 from "@/assets/ens/pb2.jpeg";
import pb3 from "@/assets/ens/pb3.jpeg";
import pb4 from "@/assets/ens/pb4.jpeg";
import pb5 from "@/assets/ens/pb5.jpeg";
import pb6 from "@/assets/ens/pb6.jpeg";

const projects = [
  {
    img: project1,
    title: "Live Production",
    description:
      "We deliver end-to-end live production for concerts, large-scale shows, smartphone launches, and corporate events. Our portfolio includes production support for smartphone launch events by iQOO, Lenovo Tech world 2026 and Samsung, ensuring seamless execution, technical precision, and impactful audience experiences.",
    images: [
      { img: p1, title: "Music Concert" },
      { img: p2, title: "DJ Concert" },
      { img: p3, title: "Acer Predator League Studio Production" },
      { img: p4, title: "IQOO India League" },
      { img: pb1, title: "Lenovo Tech world" },
      { img: pb2, title: "Cricket Auction" },
      { img: pb3, title: "ESports Event" },
    ],
  },
  {
    img: project2,
    title: "Live Broadcasting",
    description:
      "We provide high-definition, real-time live broadcasting across digital platforms for sports, eSports, and institutional productions. Our brand partnerships include Intel, Flipkart, Lenovo, AMD, and Entity, with event coverage for Acer Predator League, iQOO India League, PUBG Mobile tournaments, cricket broadcasts, and productions at IIT Delhi and NIT Calicut.",
    images: [
      { img: b2, title: "WCG" },
      { img: b3, title: "Pubg Mobile global championship" },
      { img: b4, title: "University LAN championship" },
      { img: b5, title: "ESports Event Broadcast" },
      { img: b7, title: "Cricket League Broadcast" },
      { img: b8, title: "Samsung Play Galaxy cup" },
      { img: b9, title: "Maharashtra ESports LAN event" },
      { img: b10, title: "Maharashtra ESports open championship" },
      { img: b11, title: "Flipkart event" },
      { img: b12, title: "Esports BGMI event" },
      { img: b13, title: "AMD Hackthon IIT Dehli" },
      { img: pb5, title: "Collegiate LAN" },
      { img: pb6, title: "University Championship NIT Calicut" },
    ],
  },
  {
    img: project3,
    title: "Emcee / Host Services",
    description:
      "We offer professional emcee and hosting services with commanding stage presence and strong audience engagement. We have worked with PlayStation and Lenovo, hosting major events including Comic Con India and large-scale brand launches.",
    images: [
      { img: h2, title: "University event MIT WPU" },
      { img: h3, title: "Free Fire domain expansion" },
    ],
  },
  {
    img: project3,
    title: "Campus Tours & Brand Activations",
    description:
      "We execute nationwide campus tours and immersive brand activations that drive on-ground engagement. Our collaborations include Krafton, PlayStation, Riot Games, and Smaaash across institutions such as IITs, NITs, and NSUT.",
    images: [
      { img: c1, title: "Krafton campus tour NIT" },
      { img: c2, title: "Lenovo yoga" },
      { img: c3, title: "Krafton campus tour Bangalore in 10+ colleges" },
      { img: c4, title: "playStation league in 20+ colleges" },
      { img: c5, title: "playStation league" },
      { img: c6, title: "Krafton campus tour" },
    ],
  },
];

const brands = [
  "Intel",
  "Flipkart",
  "Lenovo Tech world 2026",
  "Lenovo",
  "AMD",
  "Acer Predator League",
  "iQOO India League",
  "PUBG Mobile",
  "IIT Delhi",
  "NIT Calicut",
  "iQOO",
  "Samsung",
  "OnePlus",
  "Riot Games",
  "Smaaash",
  "PlayStation",
  "Krafton",
  "IITs",
  "NITs",
  "NSUT",
  "tournaments",
  "cricket broadcasts",
  "emcee and hosting services",
  "Comic Con India",
  "social media marketing",
  "digital campaign management",
  "content creation",
  "Entity",
  "concerts",
  "large-scale shows",
  "smartphone launches",
  "corporate events",
];

const highlightsbrands = (text: string) => {
  const regex = new RegExp(`\\b(${brands.join("|")})\\b`, "gi");

  const parts = text.split(regex);

  return parts.map((part, index) => {
    const matchedBrand = brands.find(
      (brand) => brand.toLowerCase() === part.toLowerCase(),
    );

    if (matchedBrand) {
      return (
        <span
          key={index}
          className=" font-semibold text-[#F77325]"
        >
          {part}
        </span>
      );
    }

    return part;
  });
};
export default function Projects() {
  return (
    <section className="section-padding max-w-7xl mx-auto">
      <SectionHeading label="Featured Work" title="SELECTED PROJECTS" />
      <div className="grid grid-cols-1  lg:grid-cols-2 gap-4 max-md:gap-20 max-md:mt-5">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="group  aspect-square  cursor-pointer"
          >
            
            <div className=" inset-0 bg-background/70  duration-500 flex flex-col justify-end py-6 gap-2">
              <span className="font-display text-2xl text-foreground mt-1">
                {project.title}
              </span>
              <span className="text-xs ">
                {highlightsbrands(
                  project.description)}
              </span>
            </div>
            <Carousel
              className="w-full max-w-xl mx-auto"
              opts={{ loop: true }}
              plugins={[
                Autoplay({
                  delay: 5000,
                  stopOnInteraction: false,
                }),
              ]}
            >
              <CarouselContent>
                {project.images.map((src, index) => (
                  <CarouselItem key={index}>
                    <>
                      <img
                        src={src.img}
                        alt={`Slide ${index + 1}`}
                        className=" w-full h-80 object-cover"
                      />
                      <p>{src.title}</p>
                    </>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
