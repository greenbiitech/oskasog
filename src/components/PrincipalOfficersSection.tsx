import { Linkedin } from "lucide-react";
import XIcon from "./ui/XIcon";
import { motion } from "framer-motion";
import Image from "next/image";

const PrincipalOfficersSection = () => {
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
      socialLinks: [{ platform: "twitter", url: "#", icon: XIcon }],
    },
    {
      name: "Professor Olatundun",
      title: "Ojo-Babalunde",
      role: "Member",
      image: "/images/Prof-O.png",
      socialLinks: [{ platform: "twitter", url: "#", icon: XIcon }],
    },
    {
      name: "Mr. Olufemi Ayodele",
      title: "Osunrombi",
      role: "Member",
      image: "/images/MrOlu.png",
      socialLinks: [{ platform: "twitter", url: "#", icon: XIcon }],
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
      socialLinks: [{ platform: "twitter", url: "#", icon: XIcon }],
    },
  ];
  return (
    <motion.section
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={staggerChildren}
      className="py-20 px-6 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          variants={fadeInUp}
          transition={fadeInUpTransition}
          className="md:w-1/2 mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet our dedicated Principal Officers
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Meet our Principal Officers and Management team, key drivers of our
            operational success and strategic goals. Their diverse expertise and
            leadership are crucial to our progress. Click on each image for
            their full profiles to learn more about their roles and experience.
          </p>
        </motion.div>

        {/* Board Members Grid */}
        <motion.div
          variants={staggerChildren}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {boardMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              transition={{ ...fadeInUpTransition, delay: 0.1 * index }}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row items-center gap-6 p-6">
                {/* Image */}
                <div className="relative w-32 h-32 md:w-40 md:h-40 flex-shrink-0 rounded-lg overflow-hidden border-2 border-gray-100">
                  <Image
                    src={member.image}
                    alt={`${member.name} - ${member.role}`}
                    width={160} // Adjusted for better quality
                    height={160} // Adjusted for better quality
                    className="object-cover transition-transform duration-300 hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                  />
                </div>

                {/* Info */}
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-md md:text-lg font-semibold text-gray-700 mb-1">
                    {member.title}
                  </p>
                  <p className="text-sm md:text-base text-gray-600 mb-2">
                    {member.role}
                  </p>

                  {/* Social Links */}
                  <div className="flex gap-4 mt-2">
                    {member.socialLinks.map((link, linkIndex) => {
                      const IconComponent = link.icon;
                      return (
                        <a
                          key={linkIndex}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-500 hover:text-blue-600 transition-colors hover:underline"
                        >
                          <IconComponent className="w-5 h-5 md:w-6 md:h-6" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default PrincipalOfficersSection;
