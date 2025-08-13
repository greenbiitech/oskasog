"use client";
import PrincipalOfficersSection from "@/components/PrincipalOfficersSection";
import { motion } from "framer-motion";

const PrincipalOfficers = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-[#53524F] flex items-center justify-center">
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
            Principal Officers
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
            Motivated and Driven
          </motion.p>
        </motion.div>
      </section>
      <PrincipalOfficersSection />
    </div>
  );
};

export default PrincipalOfficers;
