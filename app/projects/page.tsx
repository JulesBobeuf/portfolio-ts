import listPropProjectCard, { PropProjectCard } from "./dataProjects";
import { ProjectCard } from "./projectCard";
import styles from "./projects.module.css";

export default function Home() {
  return (
    <>
      <h1 className="m-8 text-4xl">Projects</h1>
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