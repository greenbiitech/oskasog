import { motion } from "framer-motion";
import { Play, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

type VideoPlayerProps = {
  videoId: string;
};

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoId }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  const handleCloseClick = () => {
    setIsPlaying(false);
  };

  return (
    <div className="relative">
      {!isPlaying ? (
        // Video Thumbnail with Play Button
        <motion.div
          className="relative rounded-2xl overflow-hidden shadow-2xl cursor-pointer group"
          whileHover={{ scale: 1.02 }}
          onClick={handlePlayClick}
        >
          {/* Video Thumbnail - Using YouTube thumbnail */}
           <div className="aspect-video bg-gray-800 rounded-2xl overflow-hidden relative">
            <Image
              src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
              alt="OSKASOG Hall - Discover Our Journey"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 1280px) 100vw, 1280px" // Optional: Helps with responsive sizing
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-all duration-300" />
          </div>

          {/* Play Button */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="bg-red-600 hover:bg-red-700 rounded-full p-4 shadow-2xl transition-colors duration-300">
              <Play className="h-8 w-8 text-white ml-1" fill="currentColor" />
            </div>
          </motion.div>

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.div>
      ) : (
        // Embedded YouTube Video
        <motion.div
          className="relative rounded-2xl overflow-hidden shadow-2xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          {/* Close Button */}
          <button
            onClick={handleCloseClick}
            className="absolute top-4 right-4 z-10 bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full p-2 text-white transition-all duration-300"
          >
            <X className="h-5 w-5" />
          </button>

          {/* YouTube Embed */}
          <div className="aspect-video">
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
              title="OSKASOG Journey Video"
              className="w-full h-full rounded-2xl"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default VideoPlayer