"use client";

import { Card, CardContent } from "@/components/ui/card";
import FacilitiesCarousel from "@/components/FacilitiesCarousel";
import Navbar from "@/components/Navbar";
import NewHero from "@/components/NewHero";
import OriginalHero from "@/components/OriginalHero";
import VideoPlayer from "@/components/videoPlayer";
import XIcon from "@/components/ui/XIcon";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  BookOpen,
  Eye,
  Facebook,
  Globe,
  Heart,
  Instagram,
  Lightbulb,
  Mail,
  MapPin,
  Phone,
  Sun,
  Twitter,
  Users,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [showNewHero, setShowNewHero] = useState(false);

  const programs = [
    {
      title: "Undergraduate Studies",
      description: "Build your foundation in governance and leadership",
      category: "Bachelor's",
    },
    {
      title: "Postgraduate Studies",
      description: "Advanced studies in public administration",
      category: "Master's",
    },
    {
      title: "Short-term Courses",
      description: "Professional development programs",
      category: "Certificate",
    },
    {
      title: "Research Programs",
      description: "Cutting-edge governance research",
      category: "PhD",
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNewHero(true);
    }, 5000); // 5000ms = 5 seconds

    // Cleanup timer on component unmount
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section with Animation */}
      <AnimatePresence mode="wait">
        {!showNewHero ? <OriginalHero key="original" /> : <NewHero key="new" />}
      </AnimatePresence>

      {/* Mission Cards Section */}
      <motion.section
        className="py-20 bg-gray-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Welcome Text and Profile */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <p className="text-sm text-gray-600 mb-2">Welcome to OSKASOG</p>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Where knowledge, innovation, and leadership converge
                </h1>
              </motion.div>

              {/* Professor Profile Card */}
              <motion.div
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex items-stretch space-x-4">
                  {/* Changed to items-stretch */}
                  <div className="w-20 flex-shrink-0">
                    <div className="w-full h-full bg-gray-300 rounded-xl overflow-hidden">
                      <img
                        src="/images/prof-A-A.png"
                        alt="Professor A. A. Anyaegbunam"
                        className="w-full h-full object-cover" // h-full will match the parent
                      />
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <p className="text-gray-700 text-sm leading-relaxed mb-3">
                      We offer a wide range of academic and professional
                      postgraduate courses, including diplomas, masters,
                      doctorate degrees and short-term executive courses.
                    </p>
                    <div>
                      <p className="font-semibold text-gray-900">
                        Professor A. A. Anyaegbunam
                      </p>
                      <p className="text-xs text-gray-500 uppercase tracking-wide">
                        CHAIRPERSON
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  icon: Lightbulb,
                  title: "Our Philosophy",
                  desc: "Explore how we address governance challenges and advocate for effective leadership in Sub-Saharan Africa.",
                  gradient: "from-yellow-400 to-amber-500",
                },
                {
                  icon: Eye,
                  title: "Vision & Mission",
                  desc: "Learn more about our vision to redefine governance and our mission to influence all sectors...",
                  gradient: "from-red-600 to-red-700",
                },
                {
                  icon: Heart,
                  title: "Our Core Values",
                  desc: "Find out more about our steadfast commitment to excellence, integrity, and inclusivity in governance...",
                  gradient: "from-blue-700 to-blue-800",
                },
                {
                  icon: Sun,
                  title: "Our Mandate",
                  desc: "Discover our commitment and strategic approaches to teaching, research, and community service in governance...",
                  gradient: "from-yellow-500 to-amber-600",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  className={`bg-gradient-to-br ${item.gradient} rounded-2xl p-6 text-white shadow-xl`}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                >
                  <div className="mb-4">
                    <item.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-white/90 text-sm mb-6 leading-relaxed">
                    {item.desc}
                  </p>
                  <motion.button
                    className="flex items-center text-white hover:text-white/80 transition-colors"
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="text-sm font-medium">Learn More</span>
                    <motion.svg
                      className="ml-2 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      whileHover={{ x: 3 }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </motion.svg>
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="py-24 relative overflow-hidden" // Set white background
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Background Image with White Base */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/legacy-bg.png" // Replace with your background image path
            alt="Legacy Section Background"
            fill // Fills the parent container
            className="object-cover opacity-60" // Reduced opacity to preserve white background
            priority // Loads eagerly for above-the-fold content
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Images and Coat of Arms */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Main Portrait */}
              <div className="relative rounded-2xl overflow-hidden">
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src="/images/oba-image.png"
                    alt="Oba (Dr.) Sikiru Kayode Adetona in traditional royal attire"
                    className="w-full h-auto object-cover"
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* Right Column - Content */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div>
                <motion.p
                  className="text-sm uppercase tracking-wide text-gray-600 mb-4" // Adjusted for white background
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  Founder's Vision
                </motion.p>

                <motion.h2
                  className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight" // Adjusted for white background
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                >
                  A Royal Legacy
                </motion.h2>
              </div>

              <motion.div
                className="space-y-6 text-gray-700 leading-relaxed" // Adjusted for white background
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <p>
                  Founded under the visionary leadership of Oba (Dr.) Sikiru
                  Kayode Adetona, the Awujale of Ijebuland, our institution is a
                  living testament to his unwavering commitment to addressing
                  leadership failures and governance deficit in Nigeria and the
                  African continent.
                </p>

                <p>
                  Oba Adetona's dedication to fostering a new era of accountable
                  and effective leadership is woven into the fabric of our
                  programmes, ensuring that each student is equipped to drive
                  change and promote good governance. We are proud to continue
                  this legacy, upholding the values of integrity,
                  responsibility, and service in every aspect of our teaching
                  and community engagement.
                </p>
              </motion.div>

              {/* Learn More Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1, duration: 0.6 }}
              >
                <motion.button
                  className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2 shadow-md"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>LEARN MORE</span>
                  <motion.div
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowRight className="h-5 w-5" />
                  </motion.div>
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Programs Section */}
      <motion.section
        id="programmes"
        className="py-20 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm text-gray-600 mb-2">What we Offer</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Programmes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our diverse range of educational and research programmes,
              each designed to inspire excellence and innovation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Postgraduate Diplomas & Masters",
                image: "/images/girl-library.png",
                alt: "Student in library with books",
              },
              {
                title: "PhD Programmes",
                image: "/images/library-stud.png",
                alt: "Students in library",
              },
              {
                title: "Short-term Courses",
                image: "/images/lady.png",
                alt: "Professional woman with arms crossed",
              },
              {
                title: "Research",
                image: "/images/research.png",
                alt: "Mature professional man",
              },
            ].map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                  {/* Image Container */}
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={program.image}
                      alt={program.alt}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300" />

                    {/* Content Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-white text-xl font-bold mb-3 leading-tight">
                        {program.title}
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
          </div>
        </div>
      </motion.section>

      {/* Discover Our Journey Section */}
      <motion.section
        className="py-20 bg-gradient-to-br from-slate-800 to-slate-900"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <motion.div
              className="text-white space-y-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                Discover
                <br />
                Our Journey
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                The Beginning, the Present and the Future. Founded on the
                principles of knowledge, innovation, and community.
              </p>
            </motion.div>

            {/* Right Column - Video Player */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <VideoPlayer videoId="sRESR9sVRhE" />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Ready to Transform Your Future Section */}
      <motion.section
        className="py-20 bg-gradient-to-br from-red-600 to-red-500"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content and Buttons */}
            <motion.div
              className="text-white space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="space-y-6">
                <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                  Ready to Transform
                  <br />
                  Your Future?
                </h2>
                <p className="text-lg text-white/90 leading-relaxed max-w-lg">
                  Embark on a journey of learning and growth with us. Take the
                  next step towards achieving your academic and professional
                  goals.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  APPLY NOW
                </motion.button>

                <motion.button
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-all duration-300 flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Phone className="h-5 w-5" />
                  CALL US
                </motion.button>
              </div>
            </motion.div>

            {/* Right Column - Image Grid */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="grid grid-cols-2 gap-4">
                {/* Large Image - Student with sunglasses */}
                <motion.div
                  className="row-span-2"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="h-96 bg-gray-300 rounded-2xl overflow-hidden shadow-xl">
                    {/* Increased from implicit height to h-80 (320px) */}
                    <img
                      src="/images/future-one.png"
                      alt="Confident student wearing sunglasses and yellow top"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>

                {/* Top Right Image - Online Learning */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="h-45 bg-yellow-100 rounded-2xl overflow-hidden shadow-xl">
                    {/* Increased from h-32 (128px) to h-48 (192px) */}
                    <img
                      src="/images/future-two.png"
                      alt="Students using technology for learning"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>

                {/* Bottom Right Image - Classroom */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="h-45 bg-yellow-200 rounded-2xl overflow-hidden shadow-xl">
                    {/* Increased from h-32 (128px) to h-48 (192px) */}
                    <img
                      src="/images/future-three.jpg"
                      alt="Modern classroom with students"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 bg-white/20 rounded-full blur-xl"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-white/10 rounded-full blur-xl"
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Our Campus and Facilities Section */}
      <motion.section
        className="py-20 bg-gray-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Campus and Facilities
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Nestled in the heart of Olabisi Onabanjo University's main campus
              in Ago Iwoye, Ogun State,
              takes pride in its modern and fully-equipped facilities. From
              versatile multipurpose expansive office complexes to state-of-the-art lecture theatres,
              every space is designed to enhance learning and innovation.
            </p>
          </motion.div>

          {/* Image Carousel */}
          <FacilitiesCarousel />
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        className="bg-slate-800 text-white py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Logo and Address Section */}
            <div className="lg:col-span-2">
              <motion.div
                className="flex items-center space-x-3 mb-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                {/* Logo placeholder - replace with actual logo */}
                <Image
                  src="/images/logo-light.png"
                  alt="OSKASOG Logo"
                  width={340}
                  height={100}
                  className="h-14 w-auto object-contain" // Adjusted for larger navbar
                  priority // Load eagerly for navbar
                />
              </motion.div>

              <motion.div
                className="space-y-2 text-gray-400 text-sm"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <p>Road 9,</p>
                <p>Olabisi Onabanjo University, Main</p>
                <p>Campus,</p>
                <p>Ago Iwoye, Ogun State,</p>
                <p>Nigeria.</p>
              </motion.div>
            </div>

            {/* Quick Links */}
            <div>
              <motion.h3
                className="text-lg font-semibold mb-6"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                Quick Links
              </motion.h3>
              <ul className="space-y-3">
                {["Home", "About us", "Admission", "Portal", "Contact us"].map(
                  (link, index) => (
                    <motion.li
                      key={link}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                      >
                        {link}
                      </a>
                    </motion.li>
                  )
                )}
              </ul>
            </div>

            {/* Our Programmes */}
            <div>
              <motion.h3
                className="text-lg font-semibold mb-6"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                Our Programmes
              </motion.h3>
              <ul className="space-y-3">
                {[
                  "PG Diplomas & Masters",
                  "PhD Programmes",
                  "Short-Term Courses",
                  "Research",
                ].map((programme, index) => (
                  <motion.li
                    key={programme}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                    >
                      {programme}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Contact and CTA */}
            <div>
              <motion.h3
                className="text-lg font-semibold mb-6"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                Contact
              </motion.h3>

              <div className="space-y-4 mb-8">
                <motion.div
                  className="text-gray-400 text-sm"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <p>info@oskasog.org</p>
                </motion.div>

                <motion.div
                  className="text-gray-400 text-sm"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
                  <p>+234 811 111 3080</p>
                </motion.div>

                {/* Social Media Icons */}
                <motion.div
                  className="flex space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  {[
                    { icon: Facebook, href: "https://facebook.com/oskasog" },
                    { icon: Instagram, href: "https://instagram.com/oskasog" },
                    { icon: XIcon, href: "https://x.com/oskasog" },
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      className="bg-gray-700 hover:bg-gray-600 p-2 rounded transition-colors duration-300"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <social.icon className="h-4 w-4" />
                    </motion.a>
                  ))}
                </motion.div>
              </div>

              {/* Transform Your Future CTA */}
              <motion.div
                className="bg-slate-700 rounded-lg p-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <h4 className="text-white font-semibold mb-2">
                  Transform Your future Now !!!
                </h4>
                <motion.button
                  className="bg-yellow-500 hover:bg-yellow-600 text-slate-800 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 flex items-center space-x-2"
                  whileHover={{ scale: 1.05, y: -1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>APPLY</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </motion.button>
              </motion.div>
            </div>
          </div>

          {/* Bottom Copyright Section */}
          <motion.div
            className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gray-400 text-sm">
              © 2024 Oba (Dr.) S.K Aderona School of Governance. All Rights
              Reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Cookie Settings
              </a>
            </div>
          </motion.div>
        </div>
      </motion.footer>
    </div>
  );
}
