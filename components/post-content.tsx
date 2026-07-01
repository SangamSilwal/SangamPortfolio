import { Fragment } from "react"

// A tiny renderer for the simple format used in lib/blog.ts:
//   ## Heading   -> h2
//   - item       -> bullet list
//   blank line   -> paragraph break
export function PostContent({ content }: { content: string }) {
  const blocks = content.trim().split(/\n\s*\n/)

  return (
    <div className="flex flex-col gap-5 leading-relaxed text-foreground/90">
      {blocks.map((block, i) => {
        const trimmed = block.trim()

        if (trimmed.startsWith("## ")) {
          return (
            <h2
              key={i}
              className="mt-2 text-lg font-semibold text-foreground text-balance"
            >
              {trimmed.replace(/^##\s+/, "")}
            </h2>
          )
        }

        const lines = trimmed.split("\n")
        const isList = lines.every((line) => line.trim().startsWith("- "))

        if (isList) {
          return (
            <ul key={i} className="flex list-disc flex-col gap-1.5 pl-5">
              {lines.map((line, j) => (
                <li key={j} className="text-muted-foreground">
                  {line.replace(/^-\s+/, "")}
                </li>
              ))}
            </ul>
          )
        }

        return (
          <p key={i} className="text-pretty">
            {lines.map((line, j) => (
              <Fragment key={j}>
                {line}
                {j < lines.length - 1 && <br />}
              </Fragment>
            ))}
          </p>
        )
      })}
    </div>
  )
}
