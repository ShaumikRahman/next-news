import Head from "next/head";
import styles from "../styles/About.module.scss";
import Link from "next/link";

export const about = () => {
  return (
    <div className="container">
      <Head>
        <title>About</title>
        <meta name="description" content="About page" />
      </Head>
      <div className={styles.about}>
        <h1 className={styles.title}>About</h1>
        <h3 className={styles.text}>
          This is my first project using Next.js, I decided to make a news
          appliction using{" "}
          <Link href="https://newsapi.org/">
            <a className={styles.link}>News API </a>
          </Link>
          to practice using the framework and learn its different data fetching
          methods as well as using CSS modules.
        </h3>
        <h3 className={styles.text}>
            Check my other projects <Link href="https://ShaumikRahman.github.io"><a className={styles.link}>Here</a></Link>
        </h3>
      </div>
    </div>
  );
};

export default about;
