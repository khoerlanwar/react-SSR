import { Helmet } from "react-helmet-async";

export default function SEOConfiguration({ title, description, image, url }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="https://dummyimage.com/300.png/09f/fff" />
      <meta property="og:url" content={'https://beta-nmwclinic.co.id'} />
    </Helmet>
  )
}

