import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.scss";
import breaking from "../img/breaking.jpg";

export default function Home({ articles, results, status }) {
  console.log(articles);

  return (
    <div className="container">
      <Head>
        <title>Next News</title>
        <meta name="description" content="The best source for news" />
      </Head>
      <h1 className={styles.title}>Next News</h1>
      <p className={styles.results}>Found {results} articles</p>
      <div className={styles.articles}>
        {status === "ok" &&
          articles.map((article, index) => {
            return (
              <Link href={`/read/${index+1}`} key={index} >
                <a className={styles.link}>
                  <div className={styles.article} id={index+1} >
                    <h1>{article.title}</h1>
                    <div className={styles.small}>
                      {!!article.publishedAt && (
                        <p className={styles.date}>{article.publishedAt}</p>
                      )}
                      {!!article.author && (
                        <p className={styles.author}>{article.author}</p>
                      )}
                    </div>
                    {article.urlToImage ? (
                      <img src={article.urlToImage} alt="test" />
                    ) : (
                      <Image src={breaking} />
                    )}
                    {!!article.description && (
                      <h3 className="article__desc">{article.description}</h3>
                    )}
                  </div>
                </a>
              </Link>
            );
          })}
      </div>
    </div>
  );
}

export const getStaticProps = async (pageContext) => {
  const response = await fetch(
    "https://newsapi.org/v2/top-headlines?country=gb",
    {
      headers: {
        Authorization: `Bearer ${process.env.API_KEY}`,
      },
    }
  );

  const data = await response.json();

  return {
    props: {
      articles: data.articles,
      results: data.totalResults,
      status: data.status,
    },
    revalidate: 15
  };
};
