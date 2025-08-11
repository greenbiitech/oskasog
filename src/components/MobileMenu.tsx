"use client"

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

type MobileMenuSectionProps = {
  title: string;
  items: string[];
  onItemClick?: () => void; // optional
};
const MobileMenuSection = ({ title, items, onItemClick }: MobileMenuSectionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-100 last:border-b-0">
      <button
        className="flex items-center justify-between w-full py-3 text-left font-medium text-gray-700 hover:text-red-600"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <ChevronDown 
          className={`w-4 h-4 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="pb-2"
          >
            {items.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="block px-4 py-2 text-sm text-gray-600 hover:text-red-600 hover:bg-gray-50 rounded"
                onClick={onItemClick}
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileMenuSection