import Image from "next/image";
import styles from "./avatar.module.css";
import Link from "next/link";

const projectCard = (prop: { title: string; desc:string; imgUrl: string; href: string; technos: string[]}) => {
  return (
    <>
        <Link className="projectsA" href={prop.href}>
            <div className="max-w-sm bg-gray-500 rounded overflow-hidden shadow-lg">
                <Image
                    width={60}
                    height={40}
                    src={prop.imgUrl} 
                    alt={prop.title}
                    className="w-full"
                />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{prop.title}</div>
                    <p className="text-gray-700 text-base">{prop.desc}</p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    {prop.technos.map((techno: string) => (
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" key={techno}>{techno}</span>
                    ))}
                </div>
            </div>
        </Link>
    </>
  );
};

export default projectCard;
