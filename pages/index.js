import Container from 'components/container'
import Meta from 'components/meta'
import Top from 'components/top'
import SocialLeft from 'components/social-left'
import Experience from 'components/Experience'
import Posts from 'components/posts'
import Pagination from 'components/pagination'
import { getAllPosts } from 'lib/api'
import { eyecatchLocal } from 'lib/constants'
import { getPlaiceholder } from 'plaiceholder'

export default function Home({ posts }) {
  return (
    <Container>
      <Meta />
      <Top />

      <Experience />
      <Posts posts={posts} />
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

  return {
    props: {
      posts: posts,
    },
  }
}
