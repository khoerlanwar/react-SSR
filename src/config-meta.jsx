import { Helmet } from "react-helmet-async";

export default function SEOConfiguration({ title, description, image, url }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="title" content={title} data-react-helmet="true" />
      <meta name="description" content={description} data-react-helmet="true" />
      <meta property="og:title" content={title} data-react-helmet="true" />
      <meta property="og:description" content={description} data-react-helmet="true" />
      <meta property="og:image" content={image} data-react-helmet="true" />
      <meta property="og:url" content={url} data-react-helmet="true" />
    </Helmet>
  )
}
