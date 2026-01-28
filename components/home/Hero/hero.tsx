import styles from "./hero.module.css";
import { Avatar } from "@/components/ui/Avatar";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <Avatar
        size={process.env.AVATAR_SIZE ? +process.env.AVATAR_SIZE : 256}
        src={
          process.env.AVATAR_URL ? process.env.AVATAR_URL : "/avatar/choix.jpg"
        }
      ></Avatar>
      <h1 className={styles.title}>Hi, I'm Jules!</h1>

      <p className={styles.subtitle}>Software Engineer from France</p>
    </section>
  );
}
