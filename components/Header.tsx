import headerStyles from '../styles/Header.module.css'

const Header = () => {
  return (
    <div>
        <h1 className={headerStyles.title}>
            <span>Global</span> News
        </h1>
        <p className={headerStyles.description}>Keep up to date with the latest news from around the globe.</p>
    </div>
  )
}

export default Header