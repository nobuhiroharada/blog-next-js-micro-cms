import Link from 'next/link'
import Image from 'next/image'

export default function Posts({ posts }) {
  return (
    <div className="grid grid-cols-2 gap-12">
      {posts.map(({ title, slug, eyecatch }) => (
        <article key={slug}>
          <Link href={`/blog/${slug}`}>
            <a>
              <figure className="relative aspect-video">
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
              <h2 className="mt-4 text-xl font-medium">{title}</h2>
            </a>
          </Link>
        </article>
      ))}
    </div>
  )
}
