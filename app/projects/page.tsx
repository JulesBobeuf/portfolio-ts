import listPropProjectCard, {propProjectCard} from "./dataProjects";
import { ProjectCard } from "./projectCard";

export default function Home() {
    return (
      <>
        <main className="flex min-h-screen flex-col items-center justify-between p-8 mx-72 bg-gray-500">
            <h1 className="m-16 text-4xl">Projects</h1>
                <div className="grid grid-cols-4 gap-4 my-8">
                    {
                        listPropProjectCard.map((prop: propProjectCard) => (
                                <ProjectCard key={prop.title} title={prop.title} desc={prop.desc} imgUrl={prop.imgUrl} href={prop.href} 
                                technos={prop.technos}></ProjectCard>
                        ))
                    }
                </div>
        </main>
      </>
    )
  }