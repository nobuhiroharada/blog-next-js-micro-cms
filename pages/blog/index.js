import Hero from 'components/hero'
import Container from 'components/container'
import Meta from 'components/meta'
import Posts from 'components/posts'
import SocialLeft from 'components/social-left'
import { getAllPosts, getAllCategories } from 'lib/api'
import { eyecatchLocal } from 'lib/constants'
import { getPlaiceholder } from 'plaiceholder'

export default function Blog({ posts, blogCategories }) {
  return (
    <Container>
      <Meta pageTitle="ブログ一覧" pageDesc="ブログの記事一覧" />
      <Posts posts={posts} blogCategories={blogCategories} categoryName="" />
      <SocialLeft />
    </Container>
  )
}

export async function getStaticProps() {
  const posts = await getAllPosts()

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
      posts: posts,
      blogCategories: blogCategories,
    },
  }
}
