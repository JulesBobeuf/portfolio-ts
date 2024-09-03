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
          <p className={styles.text}> Hello! My name is Jules, I&apos;m a 21 year old French man that currently studies computer science!</p>
          <p className={styles.text}> On this website, you can find all the relevant information you may need about what I do in IT. However, here is a little resume of mine: </p>
          <p className={styles.text}> I am currently persuing a Master&apos;s degree in Software Engineering at the University of Calais, France.</p>
          <p className={styles.text}> I graduated from my Bachelor&apos;s degree at the University Institute of Technology of Lens, France in 2024. </p>
          <p className={styles.text}> I graduated from high school with Mathematics and English Specialties with distinctions in 2021. </p>
          <p className={styles.text}>I also obtained my end of study certificate in music theory with honors in 2019. </p>
          <p className={styles.text}>During my studies, I have explored all fields in Computer Science, but programming applications has been my favorite. </p>

          <hr className="my-8"></hr>

          <h2 className={styles.subtitle}>Projects</h2>
          <p className={styles.text}>Want to see my projects? Please head to the projects page!</p>
          <button className={styles.btn}><Link className={styles.navlink} href="/projects" aria-label="Projects">Projects</Link></button>
          
          <hr className="my-8"></hr>
          
          <Work></Work>

          <hr className="my-8"></hr>

          <h2 className={styles.subtitle}>Certifications/Test Scores</h2>

          <a className={styles.link} href="https://www.ets.org/toefl.html">TOEFL iBT 107/120 (C1)</a>
          <p className={styles.text}>TOEFL is a full english test made by ETS.</p>
          <a className={styles.link} href="https://www.ets.org/toeic.html">TOEIC 970/990 (C1)</a>
          <p className={styles.text}>TOEIC is an english test made by ETS.</p>
          <a className={styles.link} href="https://swerc.eu/2022/">SWERC 2022 (C1)</a>
          <p className={styles.text}>SWERC is a renowned european student&apos;s contest in programming and algorithmics hosted by ICPC.</p>
          <a className={styles.link} href="https://pix.fr/">Pix : P-CT2W4QJF</a>
          <p className={styles.text}>Pix is a public French service that certifies French Students&apos; numerical skills.</p>
          
          <hr className="my-8"></hr>

          <h2 className={styles.subtitle}>Online Courses</h2>

          <a className={styles.link} href="https://www.udemy.com/certificate/UC-174b96a6-078f-46c1-a580-dd6db84f6d4a/">C# Masterclass</a>
          <p className={styles.text}>Udemy course about C#, WPF, Unity, Linq, and .NET as a whole.</p>
          <a className={styles.link} href="https://www.udemy.com/certificate/UC-8c44e76c-05ff-478c-ae68-cb037c69458b/">Spring Framework</a>
          <p className={styles.text}>Udemy course about the core of Spring.</p>
          <a className={styles.link} href="https://www.udemy.com/certificate/UC-2e5c5972-3072-493c-8e3f-ea009ab62c20/">SpringBoot Fundamentals</a>
          <p className={styles.text}>Udemy course about SpringBoot: How it works, it&apos;s core principles and good practice.</p>
          <a className={styles.link} href="https://www.udemy.com/certificate/UC-ca877fa5-8928-48f2-9009-adee38a2ec4e/">SpringBoot RestAPI</a>
          <p className={styles.text}>Udemy course about making proper RestAPIs using SpringBoot.</p>
          <a className={styles.link} href="https://www.udemy.com/certificate/UC-a5a4d28c-6844-4859-9526-ffb735925b8b/">Maven Crash Course</a>
          <p className={styles.text}>Udemy course about how Maven works, it&apos;s core principles and good practice.</p>
          <a className={styles.link} href="https://www.udemy.com/certificate/UC-969fc0e2-cf49-4b7b-b461-4821dc9ca37e/">The Complete Haskell Course</a>
          <p className={styles.text}>Udemy course about Haskell, functionnal programming, and a little bit of mathematics and data structures!</p>
      </div>
    </div>
  );
}
