import { Avatar } from "./Avatar";
import styles from "./main.module.css"
import Link from "next/link";
import { Work } from "./Work";

export default function Home() {
  return (
    <div className={styles.main}>
      <h1 className={styles.title}>Welcome to my Portfolio!</h1>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono lg:flex">
        <Avatar
          size={process.env.AVATAR_SIZE ? +process.env.AVATAR_SIZE : 256}
          src={process.env.AVATAR_URL ? process.env.AVATAR_URL : "/avatar/choix.jpg"}></Avatar>
      </div>
      <div className="container text-center">
        <h2 className={styles.subtitle}>About me</h2>
          <p className={styles.text}> Hello! My name is Jules, I&apos;m a 19 year old French man that currently studies computer science!</p>
          <p className={styles.text}> On this website, you can find all the relevant information you may need about what I do in IT. However, here is a little resume of mine: </p>
          <p className={styles.text}> I graduated from high school with Mathematics and English Specialties with distinctions in 2021. </p>
          <p className={styles.text}>I also obtained my end of study certificate in music theory with honors in 2019. </p>
          <p className={styles.text}>During my studies, I have explored all fields in Computer Science, but programming applications has been my favorite. </p>

          <hr className="my-8"></hr>

          <h2 className={styles.subtitle}>Certifications</h2>

          <a className={styles.link} href="https://www.udemy.com/certificate/UC-174b96a6-078f-46c1-a580-dd6db84f6d4a/">C# Masterclass</a>
          <p className={styles.text}>Udemy course about C#, WPF, Unity, Linq, and .NET as a whole.</p>
          <a className={styles.link} href="https://www.udemy.com/certificate/UC-07ef669a-f88b-4d13-8450-79f3513e8e51/">Ruby For Beginners</a>
          <p className={styles.text}>Udemy course about the basics of Ruby.</p>
          <a className={styles.link} href="https://pix.fr/">Pix : P-CT2W4QJF</a>
          <p className={styles.text}>Pix is a public French service that certifies French Students&apos; numerical skills.</p>

          <hr className="my-8"></hr>

          <h2 className={styles.subtitle}>Projects</h2>
          <p className={styles.text}>Want to see my projects? Please head to the projects page!</p>
          <button className={styles.btn}><Link className={styles.navlink} href="/projects" aria-label="Projects">Projects</Link></button>
          
          <hr className="my-8"></hr>
          
          <Work></Work>
      </div>
    </div>
  );
}
