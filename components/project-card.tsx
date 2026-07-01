import { ArrowUpRight } from "lucide-react"
import { GithubIcon } from "@/components/brand-icons"
import type { Project } from "@/lib/projects"

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex flex-col rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary/40">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-base font-medium leading-snug text-card-foreground text-balance">
          {project.title}
        </h3>
        <span className="shrink-0 font-mono text-xs text-muted-foreground">
          {project.year}
        </span>
      </div>

      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {project.summary}
      </p>

      <ul className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full bg-secondary px-2.5 py-0.5 font-mono text-xs text-secondary-foreground"
          >
            {tag}
          </li>
        ))}
      </ul>

      {(project.repo || project.demo) && (
        <div className="mt-4 flex items-center gap-4 border-t border-border pt-4">
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <GithubIcon className="h-4 w-4" />
              Code
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowUpRight className="h-4 w-4" />
              Demo
            </a>
          )}
        </div>
      )}
    </article>
  )
}
