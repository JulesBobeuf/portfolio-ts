import listPropProjectCard, { PropProjectCard } from "./dataProjects";
import { ProjectCard } from "./projectCard";

export default function Home() {
  return (
    <>
      <h1 className="m-8 text-4xl">Projects</h1>
      <div className="grid grid-cols-4 gap-6 my-8">
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