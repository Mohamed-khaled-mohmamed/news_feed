import NodeCache from 'node-cache';

import fetch from 'node-fetch';

const cache = new NodeCache({ stdTTL: 60 });

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('query') || 'apple';
  const cachedData = cache.get(query);

  if (cachedData) {
    console.log('Serving from cache');
    return new Response(JSON.stringify(cachedData), { status: 200 });
  }

  try {
    const response = await fetch(`https://newsapi.org/v2/everything?q=${query}&pageSize=100&apiKey=${process.env.NEWS_API_KEY}`);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const data = await response.json();

    // // Process images to detect women
    // const processedArticles = await Promise.all(
    //   data.articles.map(async (article) => {
    //     if (article.urlToImage) {
    //       const hasWomen = await detectGender(article.urlToImage);
    //       return { ...article, hasWomen };
    //     }
    //     return article;
    //   })
    // );
    // console.log(processedArticles);

    cache.set(query, data);

    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    return new Response('Error fetching data', { status: 500 });
  }
}
