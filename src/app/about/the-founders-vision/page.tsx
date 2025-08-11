"use client";

import { Card, CardContent } from "@/components/ui/card";
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

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-8 items-start">
            {/* Left side - Text content */}
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              animate="visible"
              className="lg:col-span-2 space-y-6"
            >
              <motion.h1
                className="text-4xl lg:text-5xl font-bold leading-tight text-white drop-shadow-lg"
                variants={fadeInUp}
              >
                The Evolutionary Tale of Oba (Dr.) Sikiru Kayode Adetona's
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
              className="lg:col-span-3 grid grid-cols-2 gap-4"
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="grid lg:grid-cols-2 gap-12 items-start"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={fadeInLeft}>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Embarking on a Visionary Mission
              </h2>
            </motion.div>
            <motion.div variants={fadeInRight}>
              <p className="text-gray-700 leading-relaxed text-lg">
                The school's origins date back to the creation of the
                Professorial Chair in Governance in 2018, a significant
                milestone in Oba Adetona's dream to enhance Nigeria's tertiary
                education sector. The collaborative spirit of the university's
                administrative apparatus, along with other stakeholders, played
                a pivotal role in nurturing this vision and transforming it into
                a critical role in realizing this dream.
              </p>
            </motion.div>
          </motion.div>

          {/* Vision Quote */}
          <motion.div
            className="mt-16"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Card className="shadow-xl hover:shadow-2xl transition-all duration-500">
              <CardContent className="p-10 text-center">
                <motion.blockquote
                  className="text-xl italic text-gray-800 mb-6 leading-relaxed"
                  variants={fadeInUp}
                >
                  "I envisage the burgeoning School as a centre of topical
                  discourse of innovative ideas and research that will transform
                  higher education and policy-focused governance interventions
                  beyond their current mediocrity. In the same breath, I will
                  hope that as it grows, it will bring forth fruits of
                  governance and policy expertise that will define new standards
                  and expand their space in governance practice, policy and
                  theory."
                </motion.blockquote>
                <motion.p
                  className="text-gray-600 mb-8 leading-relaxed"
                  variants={fadeInUp}
                >
                  Consequently, I expect it to stimulate the current and next
                  generation of scholars, technocrats and intellectuals to
                  develop homegrown solutions to the seemingly intractable
                  problems of our world. I hope the School will be at the
                  forefront of intellectual agenda setting and provide
                  leadership that will transform governance practice in our
                  troubled world for the better, creating wilderness in which to
                  bud have branded for our long.
                </motion.p>
                <motion.div className="border-t pt-6" variants={fadeInUp}>
                  <p className="font-bold text-gray-900 text-lg">
                    Oba (Dr.) Sikiru Kayode Adetona
                  </p>
                  <p className="text-gray-600 font-medium">
                    The Awujale of Ijebuland (Founder)
                  </p>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Legacy Section */}
      <section className="py-20 bg-white">
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
      <section className="py-20 bg-gray-50">
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
      <section className="py-20 bg-white">
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
      <section className="py-20 bg-gray-50">
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
                Oba Adetona's sustained generosity has been a cornerstone of the
                school's development. His substantial financial contributions
                have enabled the construction of modern facilities and the
                provision of top-tier resources, underpinning his commitment to
                societal betterment and educational advancement.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Transformative Future Section */}
      <section className="py-20 bg-white">
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
      <section className="py-20 bg-gray-50">
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
            <Card className="overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-[1.02]">
              <img
                src="/api/placeholder/800/400"
                alt="School library and study area"
                className="w-full h-96 object-cover"
              />
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FoundersVisionPage;
