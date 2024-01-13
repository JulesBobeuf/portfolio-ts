import Image from "next/image";
import styles from "./projectCard.module.css";
import Link from "next/link";
import { PropProjectCard } from "../dataProjects";

const projectCard = (prop: { projectCard: PropProjectCard}) => {
  return (
    <>            
        <Link href={`/projects/${prop.projectCard.href}`} className="my-4">
            <div className={`${styles.card} max-w-sm bg-gray-800 rounded overflow-hidden shadow-lg`}>
                <div className={styles.imgcontainer}>
                    <Image
                        src={prop.projectCard.img} 
                        alt={prop.projectCard.title}
                        fill
                    />
                </div>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{prop.projectCard.title}</div>
                    <p className="text-white text-base">{prop.projectCard.desc}</p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    {prop.projectCard.technos.map((techno: string) => (
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" key={techno}>{techno}</span>
                    ))}
                </div>
            </div>
        </Link>
    </>
  );
};

export default projectCard;
