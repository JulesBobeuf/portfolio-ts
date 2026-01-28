import styles from "./card.module.css";

type CardProps = {
  title: string;
  description: string;
  link: string;
};

export default function Card({ title, description, link }: CardProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.card}
    >
      <h3>{title}</h3>
      <p>{description}</p>
    </a>
  );
}
