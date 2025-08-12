"use client";
import GoverningBoardSection from "@/components/GoverningBoardSection";
import { motion } from "framer-motion";

const GoverningBoard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-gradient-to-r from-blue-900/80 to-blue-800/80 flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("/images/admin-building.jpg")' }}
        />
        <div className="absolute inset-0 bg-blue-900/60" />

        <motion.div
          className="relative z-10 text-center text-white max-w-4xl mx-auto px-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1] as const,
          }}
        >
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Governing Board
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.6,
              delay: 0.4,
              ease: [0.6, -0.05, 0.01, 0.99],
            }}
            className="text-lg md:text-xl text-gray-200 font-normal"
          >
            Distinguished and Dedicated
          </motion.p>
        </motion.div>
      </section>

      <GoverningBoardSection />
    </div>
  );
};

export default GoverningBoard;
