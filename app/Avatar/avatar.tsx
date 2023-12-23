import styles from "./avatar.module.css";

const Avatar = (prop:  {size: number, src: string} ) => {
  return (
    <span className={styles.avatar} style={{ "--size": `${prop.size}px` } as object}>
      <img
        width={prop.size}
        height={prop.size}
        decoding="async"
        loading="lazy"
        {...{ async: true }}
        {...{ importance: "low" }}
        alt="me:)"
        title="Avatar"
        src={prop.src}
        className={styles.ready}
      />
    </span>
  );
};

export default Avatar;