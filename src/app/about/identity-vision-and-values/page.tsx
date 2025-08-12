"use client";

import { motion } from "framer-motion";
import {
  ChevronRight,
} from "lucide-react";
import Image from "next/image";

const OurIdentityPage = () => {
  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
  };

  const fadeInUpTransition = {
    duration: 0.6,
    ease: [0.6, -0.05, 0.01, 0.99] as const,
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const coreValues = [
    {
      text: "Objectivity in reasoning and in the analysis of teaching and research outcomes.",
    },
    {
      text: "Integrity, honesty, promptness and selflessness in the discharge of teaching, research and community related responsibilities.",
    },
    {
      text: "Hard work, perseverance, commitment and dedication to duties and responsibilities with respect to advancing the knowledge and understanding of the subject matter of Governance.",
    },
    {
      text: "Freedom in all aspects, components and areas in the academic, practical and policy enterprises of Governance.",
    },
    { text: "Excellence as a desired goal." },
    {
      text: "Meaningful, purposeful, efficient and effective participation and inclusiveness in all matters involving political choices and alternatives by all.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-gradient-to-r from-blue-900/80 to-blue-800/80 flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("/images/students.png")' }}
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
            Our Identity
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
            A Look at the Founder&#39;s Vision
          </motion.p>
        </motion.div>
      </section>

      {/* Vision and Mission Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerChildren}
        className="py-20 px-6 max-w-7xl mx-auto"
      >
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Our Vision */}
          <motion.div variants={fadeInUp} transition={fadeInUpTransition}>
            <div className="p-6">
              <div className="mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Our Vision
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  A world-class and highly reputable institution for the
                  advancement and understanding of theory, practice and policy
                  of Governance and a reference point and vanguard in efforts at
                  redefining and reinventing the processes of governance in
                  Africa and Nigeria in particular.
                </p>
              </div>

              <div className="relative w-full h-64 rounded-2xl overflow-hidden">
                <Image
                  src="/images/books.png"
                  alt="Books and glasses representing vision and learning"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </motion.div>

          {/* Our Mission */}
          <motion.div
            variants={fadeInUp}
            transition={{ ...fadeInUpTransition, delay: 0.4 }}
          >
            <div className="p-6">
              <div className="mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Our Mission
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  To organise teaching, training, research, public engagement
                  and advocacy for the promotion and enhancement of the ideals
                  of effective governance in the public and private sectors of
                  life in general.
                </p>
              </div>

              <div className="relative w-full h-64 rounded-2xl overflow-hidden">
                <Image
                  src="/images/graduation.png"
                  alt="Graduates celebrating representing mission achievement"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Our Mandate Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerChildren}
        className="relative min-h-[600px] text-white overflow-hidden"
      >
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("/images/campus-view.jpg")',
          }}
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-slate-900/60 z-10" />

        {/* Content Container */}
        <div className="relative z-20 h-full flex flex-col justify-center py-20 px-6 max-w-7xl mx-auto">
          {/* Title */}
          <motion.h2
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            transition={fadeInUpTransition}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Our Mandate
          </motion.h2>

          {/* Content Grid */}
          <motion.div
            variants={staggerChildren}
            className="grid grid-cols-1 gap-12 relative"
          >
            {/* Teaching/Training - Top Left */}
            <motion.div
              variants={fadeInUp}
              transition={{ ...fadeInUpTransition, delay: 0.1 }}
              className="max-w-md"
            >
              <h3 className="text-2xl font-bold mb-4 text-white">
                Teaching/Training
              </h3>
              <p className="text-gray-200 leading-relaxed text-base">
                This aims at equipping graduates with the requisite skills and
                knowledge for the in-depth analysis and logical dissemination of
                thought processes relating to governance for the well-being of
                the polity. The emphasis is on short term as well as
                postgraduate programmes in governance on full and part time
                basis.
              </p>
            </motion.div>

            {/* Research - Center Right */}
            <motion.div
              variants={fadeInUp}
              transition={{ ...fadeInUpTransition, delay: 0.3 }}
              className="max-w-md ml-auto"
            >
              <h3 className="text-2xl font-bold mb-4 text-white">Research</h3>
              <p className="text-gray-200 leading-relaxed text-base">
                The school focuses its research activities on the various
                dimensions of governance with a view to producing cutting edge
                knowledge on the state and effectiveness of good governance at
                local, national, regional and global levels.
              </p>
            </motion.div>

            {/* Community Service - Bottom Left */}
            <motion.div
              variants={fadeInUp}
              transition={{ ...fadeInUpTransition, delay: 0.5 }}
              className="max-w-md"
            >
              <h3 className="text-2xl font-bold mb-4 text-white">
                Community Service
              </h3>
              <p className="text-gray-200 leading-relaxed text-base">
                This is mainly in the realm of systems advocacy and is premised
                on the understanding that governance is not an abstract concept
                but one which touches human lives. The need for participatory
                responses to people&#39;s needs and promote social inclusion.
                Therefore, the Institute will as a policy matter be concerned
                with the practical demonstration of the citizens on governance
                issues.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Core Values Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerChildren}
        className="py-20  mx-auto bg-[#FAF5EE]"
      >
        {/* Header */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          transition={fadeInUpTransition}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Core Values
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8">
            The achievement of the above envisioned philosophy and objectives
            can only take place within certain ideals that have described as
            core values. They are:
          </p>
        </motion.div>

        {/* Core Values List */}
        <motion.div
          variants={staggerChildren}
          className="space-y-4 max-w-4xl mx-auto"
        >
          {coreValues.map((value, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              transition={{ ...fadeInUpTransition, delay: 0.1 * index }}
              className="group cursor-pointer"
            >
              <div className="flex items-center gap-4 p-6 bg-[#F5EBDD] hover:bg-amber-100 transition-all duration-300 rounded-lg">
                {/* Arrow Icon */}
                <div className="flex-shrink-0">
                  <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-gray-800 transition-colors" />
                </div>

                {/* Value Text */}
                <div className="flex-1">
                  <p className="text-gray-800 text-base leading-relaxed">
                    {value.text}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Philosophy Section */}
    <motion.section
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Text Content */}
          <motion.div variants={fadeInUp} transition={fadeInUpTransition}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Our Philosophy
            </h2>

            <div className="space-y-6 text-gray-700 text-base leading-relaxed">
              <p>
                Governance failure has continued to undermine development in most of
                the countries in Sub-Saharan Africa including Nigeria. This manifests
                in ineffectiveness and distortions in service delivery,
                infrastructural decay, conflict of different magnitude and
                dimensions, corruption to mention but a few.
              </p>

              <p>
                Globally, the transformation from the hierarchical mode of steering
                which relied on government institutions to the dispersal of
                government authority to international agencies and institutions at
                the global level and to sub-national agencies through
                decentralization at the local level has a series of ramifications
                on how the affairs of the modern state are managed. These changes
                without doubt have implications for the state as well as
                state-society relations.
              </p>

              <p>
                Globally, the transformation from the hierarchical mode of steering
                which relied on government institutions to the dispersal of
                government authority to international agencies and institutions at
                the global level and to sub-national agencies through
                decentralization at the local level has a series of ramifications
                on how the affairs of the modern state are managed. These changes
                without doubt have implications for the state as well as
                state-society relations.
              </p>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            variants={fadeInUp}
            transition={{ ...fadeInUpTransition, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square w-full rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/lecture-room.jpg"
                alt="Conference room with wooden furniture and presentation screens"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
    </div>
  );
};

export default OurIdentityPage;
