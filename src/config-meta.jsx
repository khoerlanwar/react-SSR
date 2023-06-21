import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

export default function SEOConfiguration({ path }) {
  const [isTitle, setIsTitle] = useState('Official NMW Clinic')
  const [isDescription, setIsDesription] = useState('Belanja produk di nmw clinic jadi lebih mudah di NMW Clinic Marketplace')
  const [isCallBackURL, setIsCallBackURL] = useState('https://nmwclinic.co.id')
  const [isImage, setIsImage] = useState('https://dummyimage.com/300.png/09f/fff')

  const dynamicMeta = async () => {
    await axios.get('http://192.168.3.176:3000/seo', {
      params: {
        path: path
      }
    }).then(({ data }) => {
      if (!data.status) return;
      const { image, title, description, path } = data.result

      setIsTitle(title)
      setIsDesription(description)
      setIsImage(image)
      setIsCallBackURL(path)
    })
  }

  useEffect(() => {
    dynamicMeta()
  }, [])

  return (
    <Helmet>
      <title>{isTitle}</title>
      <meta name="title" content={isTitle} />
      <meta name="description" content={isDescription} />
      <meta property="og:title" content={isTitle} />
      <meta property="og:description" content={isDescription} />
      <meta property="og:image" content={isImage} />
      <meta property="og:url" content={isCallBackURL} />
    </Helmet>
  )
}

