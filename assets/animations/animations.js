export const easing = [0.6, -0.05, 0.01, 0.99];

export const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.6, ease: easing }
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: easing }
  }
};

export const zoomIn = {
  initial: {
    scale: 0.8,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.6, ease: easing }
  }
};

export const menuOpenClose = {
  open: {
    opacity: 1,
    right: 0,
    transition: { duration: 0.6, ease: easing }
  },
  closed: {
    opacity: 0,
    right: -300,
    transition: { duration: 0.6, ease: easing }
  },
}
