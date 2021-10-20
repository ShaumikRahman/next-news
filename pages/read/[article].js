import styles from "../../styles/Article.module.scss";
import Image from "next/image";
import Link from "next/link";

export const article = ({ article }) => {
  return (
    <div className="container">
      <div className={styles.article}>
        <h3 className={styles.title}>{article.title}</h3>
        <div className={styles.small}>
          <span>{!!article.author && article.author}</span>
          <span> {!!article.publishedAt && article.publishedAt}</span>
        </div>
        {article.urlToImage ? (
          <img src={article.urlToImage} alt="test" />
        ) : (
          <Image src={breaking} />
        )}
        <div className={styles.textContainer}>
          <p className={styles.text}>
            {!!article.content && article.content}
          </p>
        </div>
        <Link href={article.url}>
          <a className={styles.link}>
            <h3 className={styles.linkText}>
              Read on site
            </h3>
          </a>
        </Link>
      </div>
    </div>
  );
};

export const getStaticProps = async (context) => {
  const response = await fetch(
    `https://newsapi.org/v2/top-headlines?country=gb&pageSize=1&page=${context.params.article}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.API_KEY}`,
      },
    }
  );

  const data = await response.json();

  return {
    props: {
      article: data.articles[0],
    },
    revalidate: 15,
  };
};

export const getStaticPaths = async (context) => {
  const response = await fetch(
    "https://newsapi.org/v2/top-headlines?country=gb",
    {
      headers: {
        Authorization: `Bearer ${process.env.API_KEY}`,
      },
    }
  );

  const data = await response.json();

  const paths = await data.articles.map((article, index) => {
    return {
      params: { article: (index + 1).toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export default article;
