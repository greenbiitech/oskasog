"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";

const FoundersVisionPage = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    },
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="relative  bg-[#18254F] text-white py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/legacy-bg.png"
            alt="University campus background"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-[#18254F]/50"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 mt-6">
          <div className="grid lg:grid-cols-5 gap-8 items-start">
            {/* Left side - Text content */}
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              animate="visible"
              className="lg:col-span-2 space-y-6"
            >
              <motion.h1
                className="text-3xl lg:text-5xl font-bold leading-tight text-white drop-shadow-lg mt-4"
                variants={fadeInUp}
              >
                The Evolutionary Tale of Oba (Dr.) Sikiru Kayode Adetona&#39;s
                School of Governance
              </motion.h1>
              <motion.p
                className="text-blue-100 text-base leading-relaxed drop-shadow-md"
                variants={fadeInUp}
              >
                The Oba (Dr.) Sikiru Kayode Adetona School of Governance at
                Olabisi Onabanjo University, Ago-Iwoye, Ogun State, Nigeria,
                emerges as a story of visionary leadership and unwavering
                dedication to transforming governance and leadership education.
                Established by Oba (Dr.) Sikiru Kayode Adetona, the Awujale of
                Ijebuland, this school has quickly become a symbol of excellence
                in the field of governance studies.
              </motion.p>
            </motion.div>

            {/* Right side - Images layout */}
            <motion.div
              className="lg:col-span-3 grid grid-cols-2 gap-4 mt-6"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {/* Large image on the left */}
              <motion.div variants={scaleIn} className="row-span-2">
                <Card className="overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 h-full">
                  <Image
                    src="/images/oba1.png"
                    alt="Oba Sikiru Kayode Adetona in traditional regalia"
                    fill
                    className="object-cover"
                  />
                </Card>
              </motion.div>

              {/* Top right image */}
              <motion.div variants={scaleIn}>
                <Card className="overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 h-48 relative">
                  <Image
                    src="/images/f-vision.png"
                    alt="Oba Adetona Portrait"
                    fill
                    className="object-cover"
                  />
                </Card>
              </motion.div>

              {/* Bottom right image - School Crest */}
              <motion.div variants={scaleIn}>
                <Card className="overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 h-48 relative">
                  <Image
                    src="/images/emblem.png"
                    alt="School Crest and Emblem"
                    fill
                    className="object-cover"
                  />
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Embarking on a Visionary Mission Section */}

      <section className="py-16 bg-gradient-to-br from-purple-50 via-blue-50 to-purple-100 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div
            className="grid lg:grid-cols-2 gap-16 items-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={fadeInLeft}>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Embarking on a Visionary Mission
              </h2>
            </motion.div>
            <motion.div variants={fadeInRight}>
              <p className="text-gray-700 leading-relaxed text-lg">
                The school&#39;s origins date back to the creation of the
                Professorial Chair in Governance in 2018, a significant
                milestone in Oba Adetona&#39;s dream to enhance Nigeria&#39;s
                tertiary education sector. The collaborative spirit of the
                university&#39;s administration, particularly under the guidance
                of Professor Saburi Adesanya and Professor Ganiyu Olatunde,
                played a critical role in realizing this dream.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Vision Quote Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            {/* Blue header bar */}
            <div className="h-2 bg-blue-500"></div>

            <div className="p-12">
              {/* Quote text */}
              <motion.div className="text-center mb-8" variants={fadeInUp}>
                <blockquote className="text-lg leading-relaxed text-gray-800 mb-6">
                  &quot;I envisage the burgeoning School as a centre of topical
                  discourse of innovative ideas and research that will transform
                  higher education and policy-focused governance interventions
                  beyond their current mediocrity. In the same breath, I will
                  hope&#39; that as it grows, it will bring around far-flung
                  network of scholars from the rest of Africa and the world who
                  will contribute their quota on governance, policy and theory.&quot;
                </blockquote>

                <p className="text-base leading-relaxed text-gray-700 mb-8">
                  Consequently, I expect it to stimulate the current and next
                  generation of scholars, technocrats and intellectuals to
                  develop homegrown solutions to the seemingly intractable
                  problems of our world. I hope the School will be at the
                  forefront of intellectual agenda setting and provide
                  theoretical and empirical grist for the kind of innovations
                  that will move our world out of the wilderness in which it has
                  been stranded for too long.
                </p>
              </motion.div>

              {/* Author section with image */}
              <motion.div
                className="flex flex-col items-center"
                variants={fadeInUp}
              >
                {/* Profile image */}
                <div className="mb-4">
                  <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-pink-300 relative">
                    <Image
                      src="/images/oba1.png"
                      alt="Oba (Dr.) Sikiru Kayode Adetona"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Author details */}
                <div className="text-center">
                  <h3 className="font-bold text-gray-900 text-lg mb-1">
                    Oba (Dr.) Sikiru Kayode Adetona
                  </h3>
                  <p className="text-gray-600 text-sm font-medium">
                    The Awujale of Ijebuland / Founder
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Dark accent on the right */}
            <div className="absolute top-0 right-0 w-16 h-12 bg-gray-800"></div>
          </motion.div>
        </div>
      </section>

      {/* Legacy Section */}
      <section className="py-10 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="grid lg:grid-cols-2 gap-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={fadeInLeft}>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                A Legacy Rooted in Governance Excellence
              </h2>
            </motion.div>
            <motion.div variants={fadeInRight}>
              <p className="text-gray-700 leading-relaxed text-lg">
                Inspired by his tenure as a minister in the Western Regional
                Government of the 1960s, Oba Adetona envisioned a school that
                would address the challenges of modern governance. His vision
                was to create an institution dedicated to nurturing a new breed
                of governance that marked his stellar experiences in public
                service.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Establishment Section */}
      <section className="py-10  bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="grid lg:grid-cols-2 gap-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={fadeInLeft}>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                The Establishment of the School
              </h2>
            </motion.div>
            <motion.div variants={fadeInRight}>
              <p className="text-gray-700 leading-relaxed text-lg">
                The idea for the school was initially proposed by Professor
                Tunji Olaopa in 2018 and materialized shortly with Oba Adetona,
                the goal was to create a centre of excellence that would not
                only enhance governance studies but also elevate educational
                standards to match global best practices. The school represents
                a significant leap forward in governance.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Intellectual Excellence Section */}
      <section className="py-10 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="grid lg:grid-cols-2 gap-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={fadeInLeft}>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                A Center for Intellectual Excellence
              </h2>
            </motion.div>
            <motion.div variants={fadeInRight}>
              <p className="text-gray-700 leading-relaxed text-lg">
                Launched in May 2021 with Professor Adagbo Onoja at the helm,
                the school rapidly established itself as a hub for innovative
                governance research and policy development. It was envisioned to
                be a solution to the long-standing governance challenges,
                setting the stage for transformative change.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Philanthropic Foundations Section */}
      <section className="py-10 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="grid lg:grid-cols-2 gap-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={fadeInLeft}>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                The Philanthropic Foundations
              </h2>
            </motion.div>
            <motion.div variants={fadeInRight}>
              <p className="text-gray-700 leading-relaxed text-lg">
                Oba Adetona&#39;s sustained generosity has been a cornerstone of the
                school&#39;s development. His substantial financial contributions
                have enabled the construction of modern facilities and the
                provision of top-tier resources, underpinning his commitment to
                societal betterment and educational advancement.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Transformative Future Section */}
      <section className="py-10 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="grid lg:grid-cols-2 gap-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={fadeInLeft}>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Envisioning a Transformative Future
              </h2>
            </motion.div>
            <motion.div variants={fadeInRight}>
              <p className="text-gray-700 leading-relaxed text-lg">
                The Oba (Dr.) Sikiru Kayode Adetona School of Governance is
                envisioned as a crucible for path-breaking research and academic
                excellence. It aims to be a gathering place for scholars,
                practitioners, and thought leaders committed to addressing
                contemporary global issues and theories. The school is
                positioned to be a driving force in developing localized
                solutions to global governance challenges.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Global Epicenter Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="grid lg:grid-cols-2 gap-12 mb-16"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={fadeInLeft}>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                A Global Epicenter of Governance Studies
              </h2>
            </motion.div>
            <motion.div variants={fadeInRight}>
              <div className="space-y-6">
                <p className="text-gray-700 leading-relaxed text-lg">
                  The school stands as a beacon of knowledge and innovation in
                  governance and leadership, attracting a diverse community of
                  scholars and students worldwide. Its mission is to foster
                  critical thinking, research excellence, and practical
                  solutions to governance challenges that nations contributing
                  significantly to global discourse in the field. Through its
                  comprehensive and varied, this Academy has established a
                  strong level of policy relevance.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg">
                  The Oba (Dr.) Sikiru Kayode Adetona School of Governance is a
                  testament to the power of visionary leadership and its ability
                  to effect meaningful change in educational and governance
                  sectors. As it continues to evolve and expand, the school
                  remains committed to enhancing innovation and service to every
                  aspect of our teaching and community engagement.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Bottom Image */}
          <motion.div
            className="mt-16"
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-[1.02] relative h-[26.5rem]">
              {" "}
              {/* Adjusted height to ~664px */}
              <Image
                src="/images/oskasog-library-1.jpg"
                alt="School library and study area"
                fill
                className="object-cover" // Using object-cover to fill the space
              />
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FoundersVisionPage;
