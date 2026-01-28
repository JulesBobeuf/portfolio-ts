import Image from "next/image";
import styles from "./projectArticle.module.css";
import {PropProjectArticle,  Contributor } from "../../../data/project";

const projectArticle = (prop: {
   projectArticle : PropProjectArticle;
}) => {
  return (
    <>
      <div className={`${styles.rectangle} flex flex-wrap place-items-center`}>
        <div className={styles.inRectangle}>
          <p>Type :</p>
          <p>{prop.projectArticle.projectType}</p>
        </div>
        <div className={styles.inRectangle}>
          <p>Contributors :</p>
          <p> {prop.projectArticle.nbContributors} </p>
        </div>
        <div className={styles.inRectangle}>
          <p>End date :</p>
          <p> {prop.projectArticle.endDate}</p>
        </div>
        <div className={`${styles.inRectangle} flex flex-col place-items-center`}>
          <p>Project Link :</p>
          <a href={prop.projectArticle.codeLink} target="_blank" aria-label="GitHub">
            <img src={ process.env.GITHUB_ICON ? process.env.GITHUB_ICON : "/icons/github.svg"} 
                className={`h-6 w-6 ${styles.filterWhite}`} alt="GitHub Link"/>
          </a>
        </div>
      </div>
      <div className={styles.projectsContent + " flex flex-wrap place-items-center"}>
        <div className={styles.colortest}>
          <h1 className="text-4xl text-center p-4">{prop.projectArticle.title}</h1>

          <div className="text-justify py-4">
            <h2 className="text-2xl text-center m-4">{prop.projectArticle.subtitle1}</h2>
            <p>{prop.projectArticle.text1}</p>
          </div>

          <div className="flex justify-center p-4">
              <Image 
                src={prop.projectArticle.image1} 
                alt={prop.projectArticle.title}
                width={process.env.PROJECT_ARTICLE_IMAGE_WIDTH ? +process.env.PROJECT_ARTICLE_IMAGE_WIDTH : 400}
                height={process.env.PROJECT_ARTICLE_IMAGE_HEIGHT ? +process.env.PROJECT_ARTICLE_IMAGE_HEIGHT : 400}
                loading="lazy"
              />
          </div>
          <div className="text-justify py-4">
            <h2 className="text-2xl text-center m-4">{prop.projectArticle.subtitle2}</h2>
            <p>{prop.projectArticle.text2}</p>
          </div>

          <div className="flex justify-center p-4">
          <Image 
                src={prop.projectArticle.image2} 
                alt={prop.projectArticle.title}
                width={process.env.PROJECT_ARTICLE_IMAGE_WIDTH ? +process.env.PROJECT_ARTICLE_IMAGE_WIDTH : 400}
                height={process.env.PROJECT_ARTICLE_IMAGE_HEIGHT ? +process.env.PROJECT_ARTICLE_IMAGE_HEIGHT : 400}
                loading="lazy"
              />
          </div>

          <div className="text-justify py-4">
            <h2 className="text-2xl text-center m-4">{prop.projectArticle.subtitle3}</h2>
            <p>{prop.projectArticle.text3}</p>
          </div>
          {prop.projectArticle.listContributors.length > 0 ? 
            <>
              <div className="text-center p-4">
              <h2 className="p-4 text-2xl">Contributors</h2>
              <ul>
                {prop.projectArticle.listContributors.map((c: Contributor) => (
                    <li key={c.name}>{c.name} : <a href={c.link} className="p-2 text-white underline" target="_blank" aria-label="LinkedIn">{c.website}</a></li>
                ))}
              </ul>
              </div> 
            </> 
          : <></> }
        </div>
      </div>
    </>
  );
};

export default projectArticle;
