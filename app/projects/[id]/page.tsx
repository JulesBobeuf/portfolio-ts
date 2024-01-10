import { PropProjectArticle, listPropProjectArticle } from "../dataProjects";
import { ProjectArticle } from "../projectArticle";

export default async function ProjectItem({ params }: { params: { id: string }}) {
    let project: PropProjectArticle | undefined = listPropProjectArticle.find((p) => p.href===params.id)
    if (project !== undefined) {
        return <>
        <ProjectArticle projectArticle={project}></ProjectArticle>
        </>
    }
    return <p>404 Not Found</p>
}