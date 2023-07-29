import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ArticleList from '../components/ArticleList'
import { server } from '../config'

export default function Home({ articles }: any) {
  return (
    <div>
      <ArticleList articles={articles} />
    </div>
  )
}

export const getStaticProps = async () => {
  const NEWS_KEY = process.env.NEWS_API_KEY;
  const result = await fetch(`http://api.mediastack.com/v1/news?access_key=${NEWS_KEY}`);
  const articles = await result.json();

  return {
    props: {
      articles
    }
  }
}