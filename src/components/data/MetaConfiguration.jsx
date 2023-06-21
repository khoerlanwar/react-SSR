import axios from "axios";

export async function getDataMeta({ path }) {
  const response = await axios.get('https://api-sandbox.nmwclinic.co.id/seo', {
    params: {
      path: path
    }
  })

  return response.data
}