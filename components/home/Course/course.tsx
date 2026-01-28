import { Card } from "@/components/ui/Card";
import { Carousel } from "@/components/ui/Carousel";
import styles from "./course.module.css";
import { courses } from "@/data/course";

export default function Course() {
  return (
    <section>
      <h2 className={styles.subtitle}>Online Courses</h2>

      <Carousel>
        {courses.map((c) => (
          <Card
            key={c.title}
            title={c.title}
            description={c.description}
            link={c.link}
          />
        ))}
      </Carousel>
    </section>
  );
}
