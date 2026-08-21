export const springTransition = {
  type: "spring",
  stiffness: 260,
  damping: 20,
};

export const snappySpring = {
  type: "spring",
  stiffness: 400,
  damping: 30,
};

export const gentleSpring = {
  type: "spring",
  stiffness: 120,
  damping: 14,
};

export const smoothTransition = {
  duration: 0.5,
  ease: [0.25, 0.1, 0.25, 1],
};

export const fadeIn = (direction = "up", delay = 0, duration = 0.5) => {
  return {
    hidden: {
      y: direction === "up" ? 24 : direction === "down" ? -24 : 0,
      x: direction === "left" ? 24 : direction === "right" ? -24 : 0,
      opacity: 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 24,
        duration,
        delay,
      },
    },
  };
};

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 24,
    },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.94 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 22,
    },
  },
};

export const slideInLeft = {
  hidden: { opacity: 0, x: -30 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 24,
    },
  },
};

export const slideInRight = {
  hidden: { opacity: 0, x: 30 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 24,
    },
  },
};

export const staggerContainer = (staggerChildren = 0.08, delayChildren = 0) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const wordRevealContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.1,
    },
  },
};

export const wordRevealItem = {
  hidden: { opacity: 0, y: "60%" },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 26,
    },
  },
};

export const floatingAnimation = {
  y: [0, -8, 0],
  transition: {
    duration: 3.5,
    repeat: Infinity,
    ease: "easeInOut",
  },
};
