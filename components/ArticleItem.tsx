import articleStyles from '../styles/Article.module.css'
import Link from 'next/link'

const ArticleItem = ({ article }: any) => {

  return (
      <div className={articleStyles.card}>
        <a href={`${article.url}`} target='_blank' rel='noreferrer'>
            <div>
              <p>By: {article.author || 'Unknown'}</p>
              <p>{new Date(article.published_at).toDateString()}</p>
            </div>
            <h3>{article.title.substring(0, 50) + '...'} &rarr;</h3>
            <p>{article.description.substring(0, 100) + '...'}</p>
        </a>
    </div>
  )
}

export default ArticleItem