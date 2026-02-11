import styles from "./career.module.css";
import { career } from "@/data/career";

const PX_PER_MONTH = 14;
const AXIS_PADDING_MONTHS = 6;

function toMonthIndex(date: string) {
  if (date === "present") {
    const now = new Date();
    return now.getFullYear() * 12 + now.getMonth() + 1;
  }

  const [y, m] = date.split("-").map(Number);
  return y * 12 + m;
}

export default function Career() {
  const items = career.map((item) => {
    const startIndex = toMonthIndex(item.start);
    const endIndex = toMonthIndex(item.end);

    return {
      ...item,
      startIndex,
      endIndex,
      centerIndex: (startIndex + endIndex) / 2,
    };
  });

  // newest first
  items.sort((a, b) => b.startIndex - a.startIndex);

  const min = Math.min(...items.map((i) => i.startIndex));
  const max = Math.max(...items.map((i) => i.endIndex));

  const axisTop = max + AXIS_PADDING_MONTHS;
  const axisBottom = min - AXIS_PADDING_MONTHS;

  const totalHeight =
    (axisTop - axisBottom) * PX_PER_MONTH;

  return (
    <section className={styles.wrapper}>
      <h1>Career Timeline</h1>

      <div
        className={styles.timeline}
        style={{ height: totalHeight }}
      >
        {/* Main axis */}
        <div className={styles.axis} />

        {items.map((item, i) => {
          const durationTop =
            (axisTop - item.endIndex) * PX_PER_MONTH;

          const durationHeight =
            (item.endIndex - item.startIndex) * PX_PER_MONTH;

          const cardCenterTop =
            (axisTop - item.centerIndex) * PX_PER_MONTH;

          return (
            <div key={i}>
              {/* duration bar */}
              <div
                className={`${styles.duration} ${
                  item.side === "left"
                    ? styles.left
                    : styles.right
                }`}
                style={{
                  top: durationTop,
                  height: durationHeight,
                }}
              />

              {/* card */}
              <div
                className={`${styles.card} ${
                  item.side === "left"
                    ? styles.left
                    : styles.right
                }`}
                style={{
                  top: cardCenterTop,
                }}
              >
                <div className={styles.connector} />

                <div className={styles.content}>
                  <h3>{item.title}</h3>

                  <span className={styles.period}>
                    {item.start} → {item.end}
                  </span>

                  <p className={styles.place}>{item.place}</p>

                  <p className={styles.desc}>
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
