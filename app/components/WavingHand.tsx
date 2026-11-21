'use client';

import { motion } from 'framer-motion';

export default function WavingHand({ className = '' }: { className?: string }) {
  return (
    <motion.span
      className={`inline-block origin-[70%_70%] cursor-default select-none ${className}`.trim()}
      animate={{
        rotate: [0, 14, -8, 14, -4, 10, 0, 0],
      }}
      transition={{
        duration: 2.2,
        repeat: Infinity,
        repeatDelay: 1.2,
        ease: 'easeInOut',
      }}
      whileHover={{
        rotate: [0, 20, -12, 20, -8, 14, 0],
        transition: { duration: 0.8, ease: 'easeInOut' },
      }}
      aria-label="waving hand emoji"
      role="img"
    >
      👋
    </motion.span>
  );
}
