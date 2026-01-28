import { Card } from "@/components/ui/Card";
import { Carousel } from "@/components/ui/Carousel";
import { certifications } from "@/data/certification";
import styles from "./certification.module.css";

export default function Certification() {
  return (
    <section>
      <h1>Certifications & Test Scores</h1>

      <Carousel>
        {certifications.map((c) => (
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
