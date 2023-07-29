import Meta from "../components/Meta"

export default function About() {
    return (
      <div>
        <Meta title='About' />
        <h1>About the Project</h1>
        <p>
          This site was build using Next.js and the Mediastack News API to grab real news articles published by CNN and BBC.<br />
          The data fetching is done using getStaticProps() which is done at build time so the hosted site is static and loads much faster.<br />
          
        </p>
      </div>
    )
  }