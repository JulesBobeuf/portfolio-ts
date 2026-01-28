"use client";

import { useEffect, useState } from "react";
import styles from "./carousel.module.css";

type CarouselProps = {
  children: React.ReactNode[];
};

export default function Carousel({ children }: CarouselProps) {
  const total = children.length;

  const [visible, setVisible] = useState(1);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const updateVisible = () => {
      const width = window.innerWidth;

      if (width < 352) {
        setVisible(0);
      } else if (width < 640) {
        setVisible(1);
      } else if (width < 960) {
        setVisible(2);
      } else if (width < 1280) {
        setVisible(3);
      } else {
        setVisible(4);
      }

      setIndex(0);
    };

    updateVisible();

    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  if (visible === 0) {
    return null; // Hide the entire carousel if screen is too small
  }

  const maxIndex = Math.max(total - visible, 0);
  const canScroll = maxIndex > 0;

  const next = () => setIndex((i) => Math.min(i + 1, maxIndex));
  const prev = () => setIndex((i) => Math.max(i - 1, 0));

  const trackStyle = {
    transform: `translateX(-${index * 344}px)`,
    width: canScroll ? 'fit-content' : '100%',
    justifyContent: canScroll ? 'flex-start' : 'center',
  };

  return (
    <div className={styles.carousel}>
      {canScroll && (
        <button className={styles.left} onClick={prev}>
          ‹
        </button>
      )}

      {canScroll && (
        <button className={styles.right} onClick={next}>
          ›
        </button>
      )}

      <div className={styles.viewport}>
        <div
          className={styles.track}
          style={trackStyle}
        >
          {children}
        </div>
      </div>

      {canScroll && (
        <div className={styles.dots}>
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <span
              key={i}
              className={`${styles.dot} ${
                i === index ? styles.active : ""
              }`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      )}
    </div>
  );
}