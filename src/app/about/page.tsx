"use client";

import FacilitiesCarousel from "@/components/FacilitiesCarousel";
import LegacySection from "@/components/LegacySection";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const AboutPage = () => {
  const stats = [
    { number: "4,000", label: "Postgraduate and masters Students" },
    { number: "200", label: "Teachers and Faculty members" },
    { number: "90%", label: "Post-Graduation Success Rate" },
  ];

  const courses = [
    {
      title: "Postgraduate Diplomas & Masters",
      subtitle: "1 Year • 2 Years",
      image: "/images/girl-library.png",
      description:
        "Advanced diploma and master's programs designed for professional growth",
    },
    {
      title: "PhD Programmes",
      subtitle: "3-5 Years",
      image: "/images/library-stud.png",
      description:
        "Doctoral research programs for academic and research excellence",
    },
    {
      title: "Short-term Courses",
      subtitle: "3-6 Months",
      image: "/images/lady.png",
      description:
        "Intensive courses for skill development and professional advancement",
    },
  ];

  const campusImages = [
    "/images/campus-1.jpg",
    "/images/campus-2.jpg",
    "/images/campus-3.jpg",
    "/images/campus-4.jpg",
    "/images/campus-5.jpg",
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-gradient-to-r from-blue-900/80 to-blue-800/80 flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("/images/admin-and-halls.jpg")' }}
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
            About us
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-white/90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            A Look at Our Flagship Vision
          </motion.p>
        </motion.div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <span className="text-red-600 font-medium text-sm uppercase tracking-wide">
                OSKASOG
              </span>
              <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-6">
                Who we are
              </h2>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-gray-600 leading-relaxed text-lg">
                Welcome to the Oba (Dr) S. K. Adebona School of Governance
                (OSKASOG), a beacon of academic and professional excellence
                located at the esteemed Gadon Onakoya University main campus at
                Ago-Iwoye, Ogun State. We are an institute that understands the
                complexities of our times and is committed to addressing the
                challenges of public governance and corporate leadership.
              </p>
            </motion.div>
          </div>

          {/* Statistics */}
          <motion.div
            className="grid md:grid-cols-3 gap-8 mt-16"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-red-600 text-white p-8 rounded-lg text-center hover:bg-red-700 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="text-4xl font-bold mb-2">{stat.number}</h3>
                <p className="text-white/90">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Founder's Vision Section */}
      <section className="py-20">
        <LegacySection />
      </section>

      {/* Our Courses Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="text-gray-600 font-medium text-sm uppercase tracking-wide">
              Academic & Executive
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-8">
              Our Courses
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-gray-700 leading-relaxed">
              <div>
                <p className="mb-4">
                  At OSKASOG, we offer a diverse array of postgraduate programs,
                  including diplomas, masters, doctorate degrees, and tailored
                  short-term executive courses. Our curriculum is meticulously
                  designed to imbue you with the essential knowledge, skills,
                  and expertise needed to thrive in your chosen field.
                </p>
              </div>
              <div>
                <p>
                  Beyond traditional postgraduate education, we also offer
                  short-term professional courses aimed at enhancing your skill
                  set and keeping you abreast of the latest industry trends and
                  best practices. These courses are perfect for those seeking to
                  upskill, advance their careers, or delve into new areas of
                  expertise.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {courses.map((course, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
                  <div className="relative pb-[120.19%]">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      className="object-cover absolute top-0 left-0 w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-white text-xl font-bold mb-3 leading-tight">
                        {course.title}
                      </h3>
                      {/* More Button */}
                      <motion.button
                        className="flex items-center text-white hover:text-gray-200 transition-colors group/btn"
                        whileHover={{ x: 5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span className="text-sm font-medium mr-2">More</span>
                        <motion.div
                          whileHover={{ x: 3 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ArrowRight className="h-4 w-4" />
                        </motion.div>
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Research Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Text content at the top */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-20 max-w-2xl" // Increased margin for spacing
          >
            <span className="text-gray-600 font-medium text-sm uppercase tracking-wide mb-4 block">
              A Hub for Innovation
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Fostering Innovation in Governance Research
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg ">
              {/* Reduced width */}
              We cultivate an atmosphere of innovation and inquiry, enabling
              researchers to explore critical areas of governance in both public
              and private sectors. Our research endeavours are geared towards
              generating impactful insights and contributing to the development
              of effective governance practices.
            </p>
          </motion.div>

          {/* Images in two columns with offset */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-4 relative"
          >
            {/* Left image */}
            <motion.div variants={fadeInUp} className="relative">
              <div className="rounded-2xl overflow-hidden shadow-lg max-w-[550px]">
                <div
                  className="relative w-full h-0  pb-[102.63%]"
                  style={{ paddingBottom: `${(624 / 608) * 100}%` }}
                >
                  <Image
                    src="/images/research-1.png"
                    alt="Research team analyzing data and charts"
                    fill
                    className="object-cover absolute top-0 left-0 w-full h-full"
                  />
                </div>
              </div>
            </motion.div>

            {/* Right image - elevated/offset upward */}
            <motion.div variants={fadeInUp} className="relative md:-mt-16">
              <div className="rounded-2xl overflow-hidden shadow-lg max-w-[550px]">
                <div
                  className="relative w-full h-0 pb-[102.63%]"
                  style={{ paddingBottom: `${(624 / 608) * 100}%` }}
                >
                  <Image
                    src="/images/research-2.png"
                    alt="Researcher presenting data visualization"
                    fill
                    className="object-cover absolute top-0 left-0 w-full h-full"
                  />
                </div>
              </div>
            </motion.div>

            {/* Background decorative element */}
            <div className="absolute -top-8 -right-8 w-full h-full bg-gradient-to-br from-purple-100 via-blue-50 to-purple-50 rounded-3xl -z-10 opacity-40"></div>
          </motion.div>
        </div>
      </section>

      {/* Campus and Facilities Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Campus and Facilities
            </h2>
            <p className="text-gray-600 leading-relaxed max-w-4xl mx-auto">
              OSKASOG is strategically located within the serene and conducive
              academic environment of Gadon Onakoya University main campus at
              Ago-Iwoye, Ogun State. Our school takes pride in its modern and
              fully equipped facilities. From spacious multipurpose halls and
              impressive office complexes to state-of-the-art lecture theatres,
              every space is designed to enhance learning and innovation.
            </p>
          </motion.div>

          {/* Image Carousel */}
          <FacilitiesCarousel />
        </div>
      </section>
    </div>
  );
};
export default AboutPage;
