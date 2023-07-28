import Head from "next/head"

const Meta = ({ title, keywords, desctiption }: any) => {
  return (
    <Head>
        <meta name='viewport' content="width=device-width, initial-scale=1" />
        <meta name='keywords' content={keywords} />
        <meta name='description' content={desctiption} />
        <meta charSet='utf-8' />
        <link rel='icon' href='/favicon.ico' />
        <title>{title}</title>
    </Head>
  )
}

Meta.defaultProps = {
    title: 'Global News',
    keywords: 'global news, news, world news',
    description: 'Get the latest news from around the globe'
}

export default Meta