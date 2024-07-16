// AnimateOnScroll.jsx
"use client";

import { useEffect, useRef } from "react";
import { useInView } from 'react-intersection-observer';
import animations from "@/styles/animations/animations";

const Animate = ({ animationType, children, className }) => {
  const { ref, inView } = useInView({
    triggerOnce: false, 
    threshold: 0.1,
  });

  const elementRef = useRef(null);

  useEffect(() => {
    if (inView && elementRef.current) {
      console.log("Animating:", elementRef.current); 
      animations[animationType](elementRef.current);
    }
  }, [inView, animationType]);

  return (
    <div ref={(node) => {
        ref(node);
        elementRef.current = node;
      }} 
      className={className}>
      {children}
    </div>
  );
};

export default Animate;
