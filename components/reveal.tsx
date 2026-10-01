"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

type RevealDirection = "up" | "down" | "left" | "right" | "scale";

interface RevealProps {
  children: ReactNode;
  direction?: RevealDirection;
  delay?: number;
  duration?: number;
  className?: string;
  style?: CSSProperties;
  as?: "div" | "article" | "span";
  once?: boolean;
}

export function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration,
  className = "",
  style: customStyle,
  as = "div",
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            setVisible(false);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [once]);

  const Component = as;
  const style = {
    ...customStyle,
    transitionDelay: delay ? `${delay}ms` : undefined,
    transitionDuration: duration ? `${duration}ms` : undefined,
  };

  return (
    <Component
      ref={ref as never}
      style={style}
      className={`reveal reveal-${direction} ${visible ? "reveal-in" : ""} ${className}`}
    >
      {children}
    </Component>
  );
}
