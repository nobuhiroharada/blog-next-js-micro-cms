import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import {
  TwoColumn,
  TwoColumnMain,
  TwoColumnSidebar,
} from 'components/two-column'
import BlogCategories from 'components/blog-categories'

export default function Posts({
  posts,
  blogCategories = [],
  categoryName = '',
}) {
  const router = useRouter()

  return (
    <div name="blog" className="w-full mt-32">
      {router.pathname.match(/\/blog\/category/) ? (
        <div className="text-center mb-10">
          <p className="text-2xl md:text-4xl font-bold border-b-2 border-slate-400 p-2 inline">
            {categoryName}に関する記事
          </p>
          <p className="py-6 text-slate-400">The blogs I&apos;ve written.</p>
        </div>
      ) : (
        <div className="text-center mb-5">
          <p className="text-4xl font-bold border-b-2 border-slate-400 p-2 inline">
            Blog
          </p>
          <p className="py-6 text-slate-400">The blogs I&apos;ve written.</p>
        </div>
      )}
      <TwoColumn>
        <TwoColumnMain>
          <div className="grid sm:grid-cols-2 gap-12">
            {posts.map(({ title, slug, eyecatch }) => (
              <article
                key={slug}
                className="shadow-md rounded-lg p-10 hover:scale-105 duration-500"
              >
                <Link href={`/blog/${slug}`}>
                  <a>
                    <figure className="relative aspect-video border-b-2">
                      <Image
                        src={eyecatch.url}
                        alt=""
                        layout="fill"
                        objectFit="cover"
                        sizes="(min-width: 1152px) 576px, 50vw"
                        placeholder="blur"
                        blurDataURL={eyecatch.blurDataURL}
                      />
                    </figure>

                    <h2 className="mt-6 text-xl font-medium">{title}</h2>
                  </a>
                </Link>
              </article>
            ))}
          </div>
        </TwoColumnMain>
        <TwoColumnSidebar>
          <BlogCategories categories={blogCategories} />
        </TwoColumnSidebar>
      </TwoColumn>
    </div>
  )
}
