import { getAge } from "@/utils/getAge";
import styles from "./about.module.css";

export default function About() {
  const age = getAge();

  return (
    <section className={styles.about}>
      <h2>About me</h2>

      <p>
        Hello! My name is Jules, I’m a {age}-year-old French student currently
        studying computer science.
      </p>

      <p>
        I am currently pursuing a <strong>Master’s degree in Software
        Engineering</strong> at the University of Opal Coast in Calais, France.
      </p>

      <p>
        I graduated from my <strong>Bachelor’s degree in Computer Science</strong>{" "}
        at the University Institute of Technology of Lens in 2024.
      </p>

      <p>
        I completed high school in 2021 with Mathematics and English specialties
        and distinctions.
      </p>

      <p>
        I also obtained my end-of-study certificate in music theory with honors
        in 2019.
      </p>

      <p>
        During my studies, I explored many areas of computer science, but
        programming applications quickly became my favorite field.
      </p>
    </section>
  );
}
