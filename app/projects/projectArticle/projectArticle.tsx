import Image from "next/image";
import styles from "./avatar.module.css";
import PropProjectArticle, { Contributor } from "./propProjectArticle";

const projectArticle = (prop: {
   projectArticle : PropProjectArticle;
}) => {
  return (
    <>
      <div className={styles.rectangle}>
        <div className={styles.inRectangle}>
          <p>Type</p>
          <p>{prop.projectArticle.projectType}</p>
        </div>
        <div className={styles.inRectangle}>
          <p>Contributors</p>
          <p> {prop.projectArticle.nbContributors} </p>
        </div>
        <div className={styles.inRectangle}>
          <p>End date</p>
          <p> {prop.projectArticle.endDate}</p>
        </div>
        <div className={styles.inRectangle}>
          <p>Project Link</p>
          <a className={`hover:${styles.filterWhite}`} href={prop.projectArticle.codeLink} target="_blank">
            <img src={ process.env.GITHUB_ICON ? process.env.GITHUB_ICON : "/icons/github.svg"} 
                className={`h-6 w-6 ${styles.filterWhite}`}/>
          </a>
        </div>
      </div>
      <div className={styles.projectsContent}>
        <div className="colortest">
          <h1>{prop.projectArticle.title}</h1>

          <div className="text-center">
            <p>{prop.projectArticle.text1}</p>
          </div>

          <div>
            <figure>
              <Image src={prop.projectArticle.image1} alt=""/>
            </figure>
          </div>

          <div className="text-center">
            <p>{prop.projectArticle.text2}</p>
          </div>

          <div>
            <figure>
              <Image src={prop.projectArticle.image2} alt=""/>
            </figure>
          </div>

          <div className="text-center">
            <p>{prop.projectArticle.text3}</p>
          </div>

          <div>
            <h2 className="p-4">Contributors</h2>
            <ul>
              {prop.projectArticle.listContributors.map((c: Contributor) => (
                  <li>{c.name} : <a href={c.link}></a></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default projectArticle;
