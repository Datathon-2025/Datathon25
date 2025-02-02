import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 to-black text-white py-54 text-center overflow-hidden">
      <div className="absolute inset-0 bg-opacity-20 bg-[radial-gradient(circle,_rgba(255,255,255,0.1)_10%,_transparent_70%)]"></div>
      <div className="max-w-8xl mx-auto px-8 lg:px-16 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-8xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
        >
          Campify
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-8 text-2xl md:text-3xl text-gray-300"
        >
          AI-Driven Digital Marketing Optimization
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="mt-12 flex justify-center space-x-6"
        >
          <Link
            to="/demo"
            className="px-7 py-3 bg-blue-500 hover:bg-purple-500 transition-all rounded-full font-semibold text-xl shadow-lg hover:scale-105 duration-300"
          >
            Request a Demo
          </Link>
          <Link
            to="/learn-more"
            className="px-7 py-3 border border-gray-400 hover:border-white transition-all rounded-full font-semibold text-xl shadow-lg hover:scale-105 duration-300"
          >
            Learn More
          </Link>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 h-48 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-3xl opacity-30"
      ></motion.div>
    </section>
  );
};

export default Hero;