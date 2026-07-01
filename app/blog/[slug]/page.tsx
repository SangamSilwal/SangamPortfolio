import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PostContent } from "@/components/post-content"
import { posts } from "@/lib/blog"
import { siteConfig } from "@/lib/site-config"
import { formatDate } from "@/lib/utils"

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = posts.find((p) => p.slug === slug)
  if (!post) return { title: `Not found | ${siteConfig.name}` }
  return {
    title: `${post.title} | ${siteConfig.name}`,
    description: post.excerpt,
  }
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = posts.find((p) => p.slug === slug)

  if (!post) notFound()

  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />

      <main className="mx-auto w-full max-w-2xl flex-1 px-6 py-16">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to blog
        </Link>

        <article className="mt-8">
          <header>
            <div className="flex items-center gap-3 font-mono text-xs text-muted-foreground">
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span aria-hidden>&middot;</span>
              <span>{post.readingTime}</span>
            </div>
            <h1 className="mt-3 text-2xl font-semibold tracking-tight text-foreground text-balance sm:text-3xl">
              {post.title}
            </h1>
          </header>

          <div className="mt-8">
            <PostContent content={post.content} />
          </div>
        </article>
      </main>

      <SiteFooter />
    </div>
  )
}
