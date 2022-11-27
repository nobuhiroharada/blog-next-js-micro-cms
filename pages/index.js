import Container from 'components/container'
import Meta from 'components/meta'
import Top from 'components/top'
import SocialLeft from 'components/social-left'
import Experience from 'components/experience'
import Posts from 'components/posts'
import Pagination from 'components/pagination'
import { getAllPosts, getAllCategories } from 'lib/api'
import { eyecatchLocal } from 'lib/constants'
import { getPlaiceholder } from 'plaiceholder'

export default function Home({ posts, blogCategories }) {
  return (
    <Container>
      <Meta />
      <Top />

      <Experience />
      <Posts posts={posts} blogCategories={blogCategories} categoryName="" />
      <Pagination nextUrl="/blog" nextText="More Posts" />
      <SocialLeft />
    </Container>
  )
}

export async function getStaticProps() {
  const posts = await getAllPosts(4)

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
