import listPropProjectCard, { PropProjectCard } from "../../data/project";
import { ProjectCard } from "../../components/project/ProjectCard";
import styles from "./projects.module.css";

export default function Home() {
  return (
    <>
      <h1 className={styles.title}>Projects</h1>
      <div className={styles.projects}>
        {listPropProjectCard.map((prop: PropProjectCard) => (
          <ProjectCard
            key={prop.title}
            projectCard={prop}
          ></ProjectCard>
        ))}
      </div>
    </>
  );
}