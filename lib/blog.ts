// -----------------------------------------------------------------------------
// EDIT ME: Your blog posts live here. To add a post, copy one block ({ ... })
// and change the values. The "content" field supports simple formatting:
//   ## Heading        -> a section heading
//   - list item       -> a bullet point
//   blank line        -> a new paragraph
// To remove a post, delete its block.
// -----------------------------------------------------------------------------

export type Post = {
  slug: string
  title: string
  excerpt: string
  date: string // YYYY-MM-DD
  readingTime: string
  content: string
}

export const posts: Post[] = [
  {
  slug: "understanding-rag",
  title: "Understanding Retrieval-Augmented Generation (RAG)",
  excerpt:
    "Why combining retrieval with Large Language Models leads to more accurate, reliable, and up-to-date AI applications.",
  date: "2026-07-01",
  readingTime: "4 min read",
  content: `Large Language Models are powerful, but they don't always have access to the latest or domain-specific information. Retrieval-Augmented Generation (RAG) addresses this limitation by allowing an LLM to retrieve relevant documents before generating a response.

## How RAG works

A typical RAG pipeline consists of three steps:

- Index documents into a vector database.
- Retrieve the most relevant documents for a user's query.
- Provide the retrieved context to the LLM to generate an informed response.

This approach grounds the model's answers in real data instead of relying solely on its internal knowledge.

## Why use RAG?

RAG offers several advantages:

- More accurate and trustworthy responses.
- Access to private and domain-specific knowledge.
- Up-to-date information without retraining the model.
- Reduced hallucinations by grounding responses in retrieved context.

## Final Thoughts

RAG has become one of the most important techniques for building production-ready AI applications. Whether it's a chatbot, document assistant, or knowledge management system, combining retrieval with language models enables AI systems to provide more reliable and context-aware responses.`,
}
]

// Helper: posts sorted newest-first. Used across the site.
export const sortedPosts = [...posts].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
)
