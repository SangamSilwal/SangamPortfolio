import Link from "next/link"
import { ArrowRight } from "lucide-react"
import type { Post } from "@/lib/blog"
import { formatDate } from "@/lib/utils"

export function BlogCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary/40"
    >
      <div className="flex items-center gap-3 font-mono text-xs text-muted-foreground">
        <time dateTime={post.date}>{formatDate(post.date)}</time>
        <span aria-hidden>&middot;</span>
        <span>{post.readingTime}</span>
      </div>

      <h3 className="mt-2 text-base font-medium leading-snug text-card-foreground text-balance">
        {post.title}
      </h3>

      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {post.excerpt}
      </p>

      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
        Read post
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </span>
    </Link>
  )
}
