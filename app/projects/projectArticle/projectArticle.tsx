import Image from "next/image";
import styles from "./avatar.module.css";

const projectArticle = (prop: {
  title: string;
  projectType: string;
  nbContributors: string;
  endDate: string;
  codeLink: string;
  image1: string;
}) => {
  return (
    <>
      <div className={styles.rectangle}>
        <div className={styles.inRectangle}>
          <p>Type</p>
          <p>{prop.projectType}</p>
        </div>
        <div className={styles.inRectangle}>
          <p>Contributors</p>
          <p> {prop.nbContributors} </p>
        </div>
        <div className={styles.inRectangle}>
          <p>End date</p>
          <p> {prop.endDate}</p>
        </div>
        <div className={styles.inRectangle}>
          <p>Project Link</p>
          <a className={`hover:${styles.filterWhite}`} href={prop.codeLink} target="_blank">
            <img src={ process.env.GITHUB_ICON ? process.env.GITHUB_ICON : "/icons/github.svg"} 
                className={`h-6 w-6 ${styles.filterWhite}`}/>
          </a>
        </div>
      </div>
      <div className={styles.projectsContent}>
        <div className="colortest">
          <h1>{prop.title}</h1>

          <div>
            <figure>
              <Image src={prop.image1} alt=""/>
            </figure>
          </div>
        </div>
      </div>
    </>
  );
};

export default projectArticle;
