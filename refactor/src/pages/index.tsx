// pages/index.tsx
import Head from "next/head";
// import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Landing Page</title>
        <meta name="description" content="Welcome to our landing page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Our Landing Page</h1>
        <p className={styles.description}>
          This is a simple landing page built with Next.js and TypeScript.
        </p>

        <div className={styles.grid}>
          <a href="#" className={styles.card}>
            <h3>Feature 1 &rarr;</h3>
            <p>Learn more about this feature.</p>
          </a>

          <a href="#" className={styles.card}>
            <h3>Feature 2 &rarr;</h3>
            <p>Discover more about this feature.</p>
          </a>

          <a href="#" className={styles.card}>
            <h3>Feature 3 &rarr;</h3>
            <p>Find out more about this feature.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>Powered by Next.js</p>
      </footer>
    </div>
  );
};

export default Home;
