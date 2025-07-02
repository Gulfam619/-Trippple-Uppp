import { motion } from "framer-motion";
import { ServicesDetails } from "../../constants";
import CompHeader from "../CompHeader";

const Services = () => {
  return (
    <div className="w-full pb-12 pt-40 md:pt-44">
      <CompHeader
        heading="Our Services"
        description="Discover how Estrom Innovation can help your business thrive."
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true, amount: 0.3 }}
        className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full px-2 md:w-[85%] mx-auto py-12"
      >
        {ServicesDetails.map((service, index) => (
          <div
            key={index}
            className="bg-gradient-to-t from-[#050E25] to-[#1D263B] backdrop-blur-sm rounded-lg px-6 py-6 border border-slate-700"
          >
            <h3 className="mb-4 text-xl md:text-2xl text-white">
              {service.title}
            </h3>
            <p className="md:text-md text-base text-t-base text-primary-gray">
              {service.description}
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Services;
