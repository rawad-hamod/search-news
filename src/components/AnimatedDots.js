import React from "react";
import { motion } from "framer-motion";

// Utility function to generate random values
const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

// Animated dots component
const AnimatedDots = ({ count }) => {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => {
        const size = random(5, 15); // Random size for dots
        const duration = random(3, 6); // Random animation duration
        const delay = random(0, 2); // Random delay for animation

        return (
          <motion.div
            key={i}
            style={{
              position: "absolute",
              top: `${random(0, 100)}%`,
              left: `${random(0, 100)}%`,
              width: `${size}px`,
              height: `${size}px`,
              borderRadius: "50%",
              backgroundColor: `hsl(${random(0, 360)}, 50%, 50%)`, // Random color
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        );
      })}
    </>
  );
};

export default AnimatedDots;