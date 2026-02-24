import { motion } from "framer-motion";

const ratesDetails = [  {
    title: "Successful projects",
    metrics: "250+",
  },
  {
    title: "Satisfied Brands",
    metrics: "50+",
  },
  {
    title: "Different domains",
    metrics: "10+",
  },
];
export default function Metrics() {
  return (
    <section className="  w-full flex justify-center ">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="w-[90%] flex flex-col items-center justify-center"
      >
        <div>
        <p className="text-5xl text-cen font-medium font-display bg-gradient-to-r from-[#3C248E] via-[#F77325] to-[#30C0E5] bg-clip-text text-transparent max-md:text-center">
          Broadcasting Excellence & Producing Impact.
        </p>
        </div>
        <div className="flex justify-evenly max-md:flex-wrap max-md:gap-5 mt-20 w-full">
          {ratesDetails.map((rate, i) => (
            <div className="bg-white p-6 rounded-lg border" key={i}>
              <h3 className="text-center text-4xl font-bold ">
                {rate.metrics}
              </h3>
              <p className="text-center text-lg">{rate.title}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
