import styles from "./avatar.module.css";

const Avatar = (prop:  {size: number, src: string} ) => {
  return (
    <span className={styles.avatar} style={{width: prop.size, height: prop.size}}>
      <img
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