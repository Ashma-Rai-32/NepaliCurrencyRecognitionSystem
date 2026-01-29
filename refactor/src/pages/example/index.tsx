import styles from "@/src/styles/Example.module.css";

const Example: React.FC = () => {
  return (
    <div className={styles.container}>
      <aside className={styles.sidebar}></aside>

      <div className={styles["main-content"]}>
        <header className={styles.header}></header>

        <div className={styles.content}>
          <div className={styles["body-content"]}></div>
        </div>

        <footer className={styles.footer}></footer>
      </div>
    </div>
  );
};
export default Example;
