import { Helmet } from "react-helmet-async";

export default function SEOConfiguration({ title, description, url, image }) {
  const isTitle = title ?? 'Official NMW Clinic'
  const isDescription = description ?? 'Belanja produk di nmw clinic jadi lebih mudah di NMW Clinic Marketplace'
  const isCallBackURL = url ?? 'https://nmwclinic.co.id'
  const isImage = image ?? 'https://dummyimage.com/300.png/09f/fff'

  return (
    <Helmet>
      <title>{isTitle}</title>
      <meta name="description" content={isDescription} />
      <meta name="twitter:title" content={isTitle} />
      <meta name="twitter:description" content={isDescription} />
      <meta name="twitter:image" content={isImage} />
      <meta property="og:title" content={isTitle} />
      <meta property="og:description" content={isDescription} />
      <meta property="og:image" content={isImage} />
      <meta property="og:url" content={isCallBackURL} />
    </Helmet>
  )
}

