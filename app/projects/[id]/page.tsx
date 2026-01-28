import { ProjectArticle } from "@/components/project/projectArticle";
import { PropProjectArticle, listPropProjectArticle } from "@/data/project";

export default async function ProjectItem(props: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await props.params;

  const project: PropProjectArticle | undefined = listPropProjectArticle.find(
    (p) => p.href === id
  );

  if (project) {
    return <ProjectArticle projectArticle={project} />;
  }

  return <p>404 Not Found</p>;
}
