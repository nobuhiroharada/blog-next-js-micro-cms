import { createClient } from 'microcms-js-sdk'

export const client = createClient({
  serviceDomain: process.env.SERVICE_DOMAIN,
  apiKey: process.env.API_KEY,
})

export async function getPostBySlug(slug) {
  try {
    const post = await client.get({
      endpoint: 'blogs',
      queries: { filters: `slug[equals]${slug}` },
    })
    return post.contents[0]
  } catch (error) {
    console.log('--- getPostBySlug ---')
    console.log(error)
  }
}

export async function getAllSlugs(limit = 100) {
  try {
    const slugs = await client.get({
      endpoint: 'blogs',
      queries: { field: 'title,slug', orders: '-publishDate', limit: limit },
    })

    return slugs.contents
  } catch (error) {
    console.log('--- getAllSlugs ---')
    console.log(error)
  }
}

export async function getAllPosts(limit = 100) {
  try {
    const posts = await client.get({
      endpoint: 'blogs',
      queries: {
        fields: 'title,slug,eyecatch',
        orders: '-publishDate',
        limit: limit,
      },
    })

    return posts.contents
  } catch (error) {
    console.log('--- getAllPosts ---')
    console.log(error)
  }
}

export async function getAllCategories(limit = 100) {
  try {
    const categories = await client.get({
      endpoint: 'categories',
      queries: {
        fields: 'name,id,slug',
        limit: limit,
      },
    })

    return categories.contents
  } catch (error) {
    console.log('--- getAllCategories ---')
    console.log(error)
  }
}

export async function getPostsByCategoryId(categoryId, limit = 100) {
  try {
    const posts = await client.get({
      endpoint: 'blogs',
      queries: {
        filters: `categories[contains]${categoryId}`,
        fields: 'title,slug,eyecatch',
        orders: '-publishDate',
        limit: limit,
      },
    })

    return posts.contents
  } catch (error) {
    console.log('--- getAllPostsByCategory ---')
    console.log(error)
  }
}
