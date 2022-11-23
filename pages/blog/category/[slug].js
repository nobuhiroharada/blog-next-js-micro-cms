import Container from 'components/container'
import PostHeader from 'components/post-header'
import Posts from 'components/posts'
import Meta from 'components/meta'
import { getAllCategories, getPostsByCategoryId } from 'lib/api'
import { eyecatchLocal } from 'lib/constants'
import { getPlaiceholder } from 'plaiceholder'

export default function Category({ name, posts }) {
  return (
    <Container>
      <Meta pageTitle={name} pageDesc={`${name}に関する記事`} />
      {/* <PostHeader title={name} subtitle="Blog Category" /> */}
      <h1 className="mt-10">{name}</h1>
      <Posts posts={posts} categoryName={name} />
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
  console.log(allCategories)
  const category = allCategories.find(({ slug }) => slug === categorySlug)

  const posts = await getPostsByCategoryId(category.id)

  for (const post of posts) {
    if (!post.hasOwnProperty('eyecatch')) {
      post.eyecatch = eyecatchLocal
    }
    const { base64 } = await getPlaiceholder(post.eyecatch.url)
    post.eyecatch.blurDataURL = base64
  }

  return {
    props: {
      name: category.name,
      posts: posts,
    },
  }
}
