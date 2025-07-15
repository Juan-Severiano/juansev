"use client";

import { useState, useEffect } from "react";

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  delay: number;
  translateX: number;
  translateY: number;
  moveDuration: number;
  pulseDuration: number;
}

export default function AnimatedStars() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars = [];
      for (let i = 0; i < 150; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.4 + 0.1,
          delay: Math.random() * 4,
          translateX: (Math.random() - 0.5) * 20,
          translateY: (Math.random() - 0.5) * 20,
          moveDuration: Math.random() * 10 + 5,
          pulseDuration: Math.random() * 2 + 1,
        });
      }
      setStars(newStars);
    };
    generateStars();
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animationDelay: `${star.delay}s`,
            // @ts-ignore
            "--tw-translate-x": `${star.translateX}px`,
            "--tw-translate-y": `${star.translateY}px`,
            animation: `
                pulse ${star.pulseDuration}s infinite ease-in-out alternate,
                star-float ${star.moveDuration}s infinite ease-in-out alternate
              `,
          }}
        />
      ))}
    </div>
  );
}
