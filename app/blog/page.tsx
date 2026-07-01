import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BlogCard } from "@/components/blog-card"
import { sortedPosts } from "@/lib/blog"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  title: `Blog | ${siteConfig.name}`,
  description: "Notes and write-ups on electronics and engineering.",
}

export default function BlogPage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />

      <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-16">
        <header>
          <h1 className="text-2xl font-semibold tracking-tight text-foreground">
            Blog
          </h1>
          <p className="mt-2 text-muted-foreground text-pretty">
            Short write-ups on things I&apos;m learning and building.
          </p>
        </header>

        <div className="mt-8 grid gap-4">
          {sortedPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
