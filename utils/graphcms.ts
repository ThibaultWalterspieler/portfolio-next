import axios from 'axios';

const accessToken = process.env.NEXT_GRAPHCMS_API_KEY || '';
const graphcmsURL = process.env.NEXT_GRAPHCMS_API_URL || '';

async function callGraphCms(query: string, variables = {}) {
  return await axios
    .post(graphcmsURL, JSON.stringify({ query, variables }), {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    })
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err);
    });
}

export default callGraphCms;
