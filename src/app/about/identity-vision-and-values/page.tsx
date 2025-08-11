
"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Award, Badge, BookOpen, ChevronRight, Globe, Heart, Target, Users } from "lucide-react";

const OurIdentityPage = () => {
  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 }
  };

  const fadeInUpTransition = {
    duration: 0.6,
    ease: [0.6, -0.05, 0.01, 0.99] as const
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };



  const coreValues = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Objectivity in reasoning and in the analysis of teaching and research outcomes.",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Integrity, honesty, promptness and selflessness in the discharge of teaching, research and community related responsibilities.",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Hard work, perseverance, commitment and dedication to duties and responsibilities with respect to advancing the knowledge and understanding of the subject matter of Governance.",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Freedom in all respects, components and areas in the academic, practical and policy enterprise of Governance.",
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Excellence in a desired goal.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Meaningful, purposeful, efficient and effective participation and inclusiveness in all matters involving political choices and outcomes by all.",
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative min-h-[600px] flex items-center justify-center bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 overflow-hidden"
      >
        {/* Background overlay */}
        <div className="absolute inset-0 bg-black/40 z-10" />
        
        {/* Background image placeholder - replace with actual image */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
        
        <motion.div 
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={fadeInUpTransition}
          className="relative z-20 text-center text-white max-w-4xl mx-auto px-6"
        >
          <motion.h1 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.6, -0.05, 0.01, 0.99] }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            Our Identity
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.6, -0.05, 0.01, 0.99] }}
            className="text-xl md:text-2xl text-gray-200 font-light"
          >
            A Look at the Founders Vision
          </motion.p>
        </motion.div>
      </motion.section>

      {/* Vision and Mission Section */}
      <motion.section 
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerChildren}
        className="py-20 px-6 max-w-7xl mx-auto"
      >
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Our Vision */}
          <motion.div 
            variants={fadeInUp}
            transition={fadeInUpTransition}
          >
            <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Target className="w-8 h-8 text-blue-600" />
                  <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  A world-class and highly reputable institution for the advancement and understanding of theory, practice and policy of governance in Africa through the inculcation of public sector redefining and reinventing the processes of governance in Africa and Nigeria in particular.
                </p>
                <div className="relative h-48 rounded-lg overflow-hidden">
                  {/* Replace with actual image */}
                  <div className="w-full h-full bg-gradient-to-br from-amber-100 to-orange-200 flex items-center justify-center">
                    <BookOpen className="w-16 h-16 text-amber-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Our Mission */}
          <motion.div 
            variants={fadeInUp}
            transition={fadeInUpTransition}
          >
            <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Target className="w-8 h-8 text-blue-600" />
                  <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  A world-class and highly reputable institution for the advancement and understanding of theory, practice and policy of governance in Africa through the inculcation of public sector redefining and reinventing the processes of governance in Africa and Nigeria in particular.
                </p>
                <div className="relative h-48 rounded-lg overflow-hidden">
                  {/* Replace with actual image */}
                  <div className="w-full h-full bg-gradient-to-br from-amber-100 to-orange-200 flex items-center justify-center">
                    <BookOpen className="w-16 h-16 text-amber-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Our Mission */}
          <motion.div variants={fadeInUp}>
            <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Heart className="w-8 h-8 text-red-600" />
                  <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  To organise teaching, training, research, public engagement and advocacy for the promotion and enhancement of the ideals of governance with respect to the public and private sectors of the general.
                </p>
                <div className="relative h-48 rounded-lg overflow-hidden">
                  {/* Replace with actual image */}
                  <div className="w-full h-full bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center">
                    <Users className="w-16 h-16 text-blue-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      {/* Our Mandate Section */}
      <motion.section 
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="py-20 bg-gradient-to-br from-slate-800 to-slate-900 text-white relative overflow-hidden"
      >
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          {/* <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" /> */}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.h2 
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            transition={fadeInUpTransition}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Our Mandate
          </motion.h2>

          <motion.div 
            variants={staggerChildren}
            className="grid lg:grid-cols-3 gap-8"
          >
            {/* Teaching/Training */}
            <motion.div 
              variants={fadeInUp} 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 h-full">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <BookOpen className="w-8 h-8 text-blue-400" />
                    <h3 className="text-2xl font-bold">Teaching/Training</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    This aims at equipping graduates with the requisite skills and knowledge for the in-depth analysis and logical dissemination of thought processes relating to governance on government programmes in all short term as well as postgraduate programmes in governance at full and part time basis.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Research */}
            <motion.div 
              variants={fadeInUp} 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 h-full">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Target className="w-8 h-8 text-green-400" />
                    <h3 className="text-2xl font-bold">Research</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    The school focuses its research activities on the various dimensions of governance with a view to producing cutting edge knowledge on the state and effectiveness of governance at the local, state, national, continental, regional and global level.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Community Service */}
            <motion.div 
              variants={fadeInUp} 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 h-full">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Heart className="w-8 h-8 text-red-400" />
                    <h3 className="text-2xl font-bold">Community Service</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    This is mainly in the realm of systems advocacy and is premised on the understanding that the governance is not an abstract concept but one which touches human lives. The need for participatory responses to people&#39;s needs and promotes social inclusion. Therefore, the Institute will as a policy matter be concerned with the practical demonstration of the citizens on governance issues.
                  </p>
                </CardContent>
              </Card>
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
        className="py-20 px-6 max-w-7xl mx-auto"
      >
        <motion.div 
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          transition={fadeInUpTransition}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Core Values</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            The achievement of the above envisioned philosophy and objectives can only take place within certain ideals that have described as core values. They are:
          </p>
        </motion.div>

        <motion.div 
          variants={staggerChildren}
          className="grid gap-6"
        >
          {coreValues.map((value, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ x: 10 }}
              className="group"
            >
              <Card className="border-l-4 border-l-blue-600 hover:border-l-blue-800 hover:shadow-md transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                      {value.icon}
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-700 text-lg leading-relaxed">{value.title}</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Philosophy Section */}
      <motion.section 
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="py-20 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInUp}>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Our Philosophy</h2>
              
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p>
                  Governance failure has continued to undermine development in most of the countries in Sub-Saharan Africa including Nigeria. The manifestation on all levels of society at national, regional and global levels has become the conflict of different ideologies and dimensions, corruption to mention but a few.
                </p>
                
                <p>
                  Such that good governance has become some sort of mirage. Indeed the success attained to good governance among African peoples, which aided or government institutions to the detriment of government authority by international agencies and institutions at the global level. This is a series of manifestations on how the effects of governance could be sustained at the global level without doubt have implications for the state as well as state-society relations.
                </p>
                
                <p>
                  Equally, the transformation from the hegemony mode of serving government authority by international institutions to the dispersal of government authority by international agencies and institutions at the global level is a series of ramifications through documentation at the local level and state-society at the national level are mostly but not entirely overlooked. These changes without doubt have implications for the state as well as state-society relations.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="relative">
              <Card className="overflow-hidden shadow-xl">
                <div className="aspect-video bg-gradient-to-br from-amber-100 to-orange-200 flex items-center justify-center">
                  {/* Replace with actual image */}
                  <Globe className="w-24 h-24 text-amber-600" />
                </div>
              </Card>
              
              {/* Floating badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1, type: "spring" }}
                className="absolute -top-4 -right-4 z-10"
              >
                <Badge className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 text-sm">
                  Excellence in Governance
                </Badge>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
        transition={fadeInUpTransition}
        className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white"
      >
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Join Our Mission</h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Be part of transforming governance in Africa through world-class education, 
            research, and community service.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
              Learn More About Our Programs
            </Button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default OurIdentityPage;