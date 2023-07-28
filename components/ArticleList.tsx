import articleStyles from '../styles/Article.module.css'
import ArticleItem from './ArticleItem'

const ArticleList = ({ articles }: any) => {
  // console.log(articles.data[0].title.replace(/ .*/,''))
  return (
    <>
      <h3 className='center'>Click the article card to visit the article source.</h3>
      <div className={articleStyles.grid}> 
        {articles.data?.map((article: any) => (
          <ArticleItem key={article.title.replace(/ .*/,'')} article={article} />
          ))
          
        }
      </div>
    </>
  )
}

export default ArticleList