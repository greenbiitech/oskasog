import { motion } from "framer-motion";
import { Button } from "./ui/button";
import Link from "next/link";

const NewHero = () => {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 1.1, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="relative h-screen flex items-center justify-center text-center overflow-hidden"
    >
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/images/hero-video.mp4"
      />

      {/* Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-indigo-900/80 z-10"></div>

      <div className="relative z-20 max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Advancing Governance and Leadership Skills
          </motion.h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <Button
            asChild
            className="bg-red-600 text-white hover:bg-red-700 px-8 py-4 text-lg font-semibold rounded-lg shadow-2xl transition-all duration-300"
            size="lg"
          >
            <Link href="/about">
              <motion.span whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                LEARN MORE
              </motion.span>
            </Link>
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
};


export default NewHero;