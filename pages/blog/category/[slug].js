import Container from 'components/container'
import PostHeader from 'components/post-header'
import Posts from 'components/posts'
import Meta from 'components/meta'
import { getAllCategories, getPostsByCategoryId } from 'lib/api'
import { eyecatchLocal } from 'lib/constants'
import { getPlaiceholder } from 'plaiceholder'

export default function Category({ name, posts, blogCategories }) {
  return (
    <Container>
      <Meta pageTitle={name} pageDesc={`${name}に関する記事`} />
      <Posts
        posts={posts}
        blogCategories={blogCategories}
        categoryName={name}
      />
    </Container>
  )
}

export async function getStaticPaths() {
  const allCategories = await getAllCategories()
  return {
    paths: allCategories.map(({ slug }) => `/blog/category/${slug}`),
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const categorySlug = context.params.slug
  const allCategories = await getAllCategories()
  const category = allCategories.find(({ slug }) => slug === categorySlug)

  const posts = await getPostsByCategoryId(category.id)

  for (const post of posts) {
    if (!post.hasOwnProperty('eyecatch')) {
      post.eyecatch = eyecatchLocal
    }
    const { base64 } = await getPlaiceholder(post.eyecatch.url)
    post.eyecatch.blurDataURL = base64
  }

  const blogCategories = await getAllCategories()
  blogCategories.sort((a, b) => {
    if (a.name < b.name) return -1
    if (a.name > b.name) return 1
    return 0
  })

  return {
    props: {
      name: category.name,
      posts: posts,
      blogCategories: blogCategories,
    },
  }
}
