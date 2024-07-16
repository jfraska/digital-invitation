import { animate, stagger } from "motion";

const animations = {
  slideIn: (element) => {
    animate(
      element,
      { y: [-50, 0] },
      {
        delay: stagger(0.2),
        duration: 1,
        easing: [0.22, 0.03, 0.26, 1],
      }
    );
  },
  fadeIn: (element) => {
    animate(
      element,
      { opacity: [0, 0.5, 1] },
      {
        duration: 1,
        easing: [0.22, 0.03, 0.26, 1],
      }
    );
  },
  fadeSlide: (element) => {
    animate(
      element,
      {
        y: [-50, 0],
        opacity: [0, 0.5, 1],
      },
      {
        delay: stagger(0.7),
        duration: 1,
        easing: [0.22, 0.03, 0.26, 1],
      }
    );
  },
  rotateIn: (element) => {
    animate(
      element,
      {
        transform: ["rotate(90deg)", "rotate(45deg)", "none"],
      },
      {
        delay: stagger(0.5),
        duration: 1,
        easing: [0.22, 0.03, 0.26, 1],
      }
    );
  },
  wipePop: (element) => {
    const fullHeight = element.scrollHeight + 'px';
    element.style.height = '0';
    element.style.overflow = 'hidden'; 
    animate(
      element,
      { height: [0, fullHeight], 
        opacity: [0, 0.1, 0.3, 0.5, 0.7, 1],
      },
      {
        duration: 1,
        easing: [0.22, 0.03, 0.26, 1],
        fill: "forwards" 
      }
    ).finished.then(() => {
      element.style.height = 'auto'; 
    });
  },
  wipe: (element) => {
    animate(
      element,
      { opacity: [0, 0.1, 0.3, 0.5, 0.7, 1] },
      {
        delay: stagger(0.5),
        duration: 1.5,
        easing: [0.22, 0.03, 0.26, 1],
      }
    );
  },
  slowFade: (element) => {
    animate(
      element,
      {
        opacity: [0, 0.1, 0.3, 0.5, 0.7, 1],
      },
      {
        duration: 1,
        easing: [0.22, 0.03, 0.26, 1],
        fill: "forwards",
      }
    );
  },
};

export default animations;
