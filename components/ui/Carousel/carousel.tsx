"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./carousel.module.css";

type CarouselProps = {
  children: React.ReactNode[];
};

export default function Carousel({ children }: CarouselProps) {
  const total = children.length;
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(1);
  const frameRef = useRef<HTMLDivElement>(null);

  const CARD = 320;
  const GAP = 24;
  const STEP = CARD + GAP;

  useEffect(() => {
    if (!frameRef.current) return;

    const observer = new ResizeObserver(([entry]) => {
      const width = entry.contentRect.width;
      const count = Math.floor((width + GAP) / STEP);
      setVisible(Math.max(1, count));
      setIndex(0); // reset safely
    });

    observer.observe(frameRef.current);
    return () => observer.disconnect();
  }, []);

  const maxIndex = Math.max(total - visible, 0);

  const prev = () => setIndex((i) => Math.max(i - 1, 0));
  const next = () => setIndex((i) => Math.min(i + 1, maxIndex));

  return (
    <div className={styles.carousel}>
      <div className={styles.frame} ref={frameRef}>
        <button
          className={`${styles.left} ${index === 0 ? styles.disabled : ""}`}
          onClick={prev}
          disabled={index === 0}
          aria-label="Previous"
        />

        <div className={styles.viewport}>
          <div
            className={styles.track}
            style={{ transform: `translateX(-${index * STEP}px)` }}
          >
            {children}
          </div>
        </div>

        <button
          className={`${styles.right} ${index === maxIndex ? styles.disabled : ""}`}
          onClick={next}
          disabled={index === maxIndex}
          aria-label="Next"
        />
      </div>

      {maxIndex > 0 && (
        <div className={styles.dots}>
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <span
              key={i}
              className={`${styles.dot} ${i === index ? styles.active : ""}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
