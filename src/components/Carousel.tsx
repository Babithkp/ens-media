import { motion } from "framer-motion";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project6 from "@/assets/project-6.jpg";
const clients = [project1, project2, project3, project6];

const Carousel = () => (
  <section className="overflow-hidden ">
    <div className="relative">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...clients, ...clients].map((client, i) => (
          <div
            key={`${i}`}
            className="flex shrink-0 items-center justify-center rounded-xl border border-border"
          >
            <img
              src={client}
              alt="Behind the scenes"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Carousel;
