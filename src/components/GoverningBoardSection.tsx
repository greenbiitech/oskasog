import { Linkedin } from "lucide-react";
import XIcon from "./ui/XIcon";
import { motion } from "framer-motion";
import Image from "next/image";

const GoverningBoardSection = () => {
  const fadeInUp = {
    initial: { y: 60, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  const fadeInUpTransition = {
    duration: 0.8,
    delay: 0.3,
    ease: [0.6, -0.05, 0.01, 0.99] as const,
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const boardMembers = [
    {
      name: "Professor A. Adetona",
      title: "Ayegbajunam",
      role: "Chairperson",
      image: "/images/prof-A-A.png",
      socialLinks: [
        { platform: "twitter", url: "#", icon: XIcon },
        { platform: "linkedin", url: "#", icon: Linkedin },
      ],
    },
    {
      name: "Professor Chris",
      title: "Ogbechie",
      role: "Member",
      image: "/images/Prof-C.png",
      socialLinks: [{ platform: "twitter", url: "#",  icon: XIcon }],
    },
    {
      name: "Professor Olatundun",
      title: "Ojo-Babalunde",
      role: "Member",
      image: "/images/Prof-O.png",
      socialLinks: [{ platform: "twitter", url: "#",  icon: XIcon }],
    },
    {
      name: "Mr. Olufemi Ayodele",
      title: "Osunrombi",
      role: "Member",
      image: "/images/MrOlu.png",
      socialLinks: [{ platform: "twitter", url: "#",  icon: XIcon }],
    },
    {
      name: "Mr. Lekan",
      title: "Belo",
      role: "Member",
      image: "/images/lekan.png",
      socialLinks: [{ platform: "twitter", url: "#", icon: XIcon }],
    },
    {
      name: "Professor Ayodeji",
      title: "Johnson Oloyinlola",
      role: "Agboola",
      subRole: "Member",
      image: "/images/Prof-Ayo.png",
      socialLinks: [{ platform: "twitter", url: "#",  icon: XIcon }],
    },
  ];
  return (
    <motion.section
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={staggerChildren}
      className="py-20 px-6 bg-gray-50"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          variants={fadeInUp}
          transition={fadeInUpTransition}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet our esteemed Governing Board
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A collective of experienced leaders who shape our strategic
            direction and uphold our commitment to excellence. Each member
            brings unique expertise and insight, driving our success.
          </p>
        </motion.div>

        {/* Board Members Grid */}
        <motion.div
          variants={staggerChildren}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {boardMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              transition={{ ...fadeInUpTransition, delay: 0.1 * index }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Member Photo */}
              <div className="relative h-64 bg-gray-200">
                <Image
                  src={member.image}
                  alt={`${member.name} - ${member.role}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Member Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <h4 className="text-lg font-semibold text-gray-700 mb-1">
                  {member.title}
                </h4>
                <p className="text-base text-gray-600 mb-1">{member.role}</p>
                {member.subRole && (
                  <p className="text-base text-gray-600 mb-3">
                    {member.subRole}
                  </p>
                )}

                {/* Social Links */}
                <div className="flex gap-3 mt-4">
                  {member.socialLinks.map((link, linkIndex) => {
                    const IconComponent = link.icon;
                    return (
                      <a
                        key={linkIndex}
                        href={link.url}
                        className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <IconComponent className="w-4 h-4" />
                        <span className="text-sm">x</span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default GoverningBoardSection