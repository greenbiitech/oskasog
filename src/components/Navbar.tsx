"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import MobileMenuSection from "./MobileMenu";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const menuItems = {
    About: [
      "About Us",
      "The Founders Vision",
      "Identity Vision and Values",
      "Governing Board",
      "Principal Officers",
      "Virtual Tour",
    ],
    Programmes: [
      "Postgraduate Diplomas & Masters",
      "PhD Programmes",
      "Short-Term Courses",
      "Research"
    ],
    News: ["Announcements", "Blog", "Events", "Press Releases"],
  };

  const simpleMenuItems = ["Admissions", "Portal", "Contact"];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={isScrolled ? "dark" : "light"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={
                    isScrolled
                      ? "/images/logo-dark.png"
                      : "/images/logo-light.png"
                  }
                  alt="OSKASOG Logo"
                  width={340}
                  height={100}
                  className="h-14 w-auto object-contain"
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList className="space-x-2">
                {Object.entries(menuItems).map(([item, subItems], index) => (
                  <NavigationMenuItem key={item}>
                    <NavigationMenuTrigger
                      className={`font-medium transition-colors hover:text-red-600 bg-transparent hover:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent ${
                        isScrolled ? "text-gray-700" : "text-white/90"
                      }`}
                    >
                      <motion.span
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                        whileHover={{ y: -2 }}
                      >
                        {item}
                      </motion.span>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-64 p-2">
                        {subItems.map((subItem, subIndex) => (
                          <NavigationMenuLink key={subItem} asChild>
                            <Link
                              href={
                                subItem === "About Us"
                                  ? "/about"
                                  : `/about/${subItem
                                      .toLowerCase()
                                      .replace(/\s+/g, "-")}`
                              }
                              className="block px-4 py-3 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
                            >
                              <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: subIndex * 0.05 }}
                              >
                                {subItem}
                              </motion.div>
                            </Link>
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ))}

                {simpleMenuItems.map((item, index) => (
                  <NavigationMenuItem key={item}>
                    <NavigationMenuLink
                      href={`#${item.toLowerCase()}`} // Update to actual routes if needed
                      className={`font-medium transition-colors hover:text-red-600 px-4 py-2 ${
                        isScrolled ? "text-gray-700" : "text-white/90"
                      }`}
                    >
                      <motion.span
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          delay:
                            (Object.keys(menuItems).length + index) * 0.1 + 0.3,
                          duration: 0.5,
                        }}
                        whileHover={{ y: -2 }}
                      >
                        {item}
                      </motion.span>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="hidden md:block"
          >
            <Button className="bg-red-600 text-white hover:bg-red-700 transition-all duration-300 hover:scale-105">
              Apply Now
            </Button>
          </motion.div>

          {/* Mobile menu */}
          <div className="md:hidden">
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="p-0">
                  <Menu
                    className={`h-6 w-6 ${
                      isScrolled ? "text-gray-900" : "text-white"
                    }`}
                  />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 p-0">
                <div className="flex flex-col h-full">
                  <div className="p-4 border-b">
                    <h2 className="text-lg font-semibold">Menu</h2>
                  </div>
                  <div className="flex-1 overflow-y-auto p-4">
                    <nav className="space-y-2">
                      {/* Items with dropdowns */}
                      {Object.entries(menuItems).map(([item, subItems]) => (
                        <MobileMenuSection
                          key={item}
                          title={item}
                          items={subItems}
                          onItemClick={() => setIsMenuOpen(false)}
                        />
                      ))}

                      {/* Simple menu items */}
                      {simpleMenuItems.map((item) => (
                        <a
                          key={item}
                          href={`#${item.toLowerCase()}`}
                          className="block py-3 text-gray-700 hover:text-red-600 font-medium border-b border-gray-100"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item}
                        </a>
                      ))}
                    </nav>
                  </div>
                  <div className="p-4 border-t">
                    <Button
                      className="w-full bg-red-600 text-white hover:bg-red-700"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Apply Now
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;
