import fs from "fs"
import path from "path"

// -----------------------------------------------------------------------------
// EDIT ME: Your blog post metadata lives here. The actual body text is pulled
// from a matching markdown file in /docs at build time — see `content` below.
// To add a post:
//   1. Add a { ... } block here with a unique `slug`.
//   2. Create docs/<slug>.md containing the post body.
// To remove a post, delete its block here AND its docs/<slug>.md file.
// -----------------------------------------------------------------------------
export type PostMeta = {
  slug: string
  title: string
  excerpt: string
  date: string // YYYY-MM-DD
  readingTime: string
}

export type Post = PostMeta & {
  content: string
}

const postsMeta: PostMeta[] = [
  {
    slug: "understanding-rag",
    title: "Understanding Retrieval-Augmented Generation (RAG)",
    excerpt:
      "Why combining retrieval with Large Language Models leads to more accurate, reliable, and up-to-date AI applications.",
    date: "2026-07-01",
    readingTime: "4 min read",
  },
]

const docsDirectory = path.join(process.cwd(), "content")

function readContent(slug: string): string {
  const filePath = path.join(docsDirectory, `${slug}.md`)
  return fs.readFileSync(filePath, "utf8")
}

export const posts: Post[] = postsMeta.map((meta) => ({
  ...meta,
  content: readContent(meta.slug),
}))

// Helper: posts sorted newest-first. Used across the site.
export const sortedPosts = [...posts].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
)