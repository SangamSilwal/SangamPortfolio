import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ProjectCard } from "@/components/project-card"
import { projects } from "@/lib/projects"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  title: `Projects | ${siteConfig.name}`,
  description: "Engineering projects and prototypes.",
}

export default function ProjectsPage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />

      <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-16">
        <header>
          <h1 className="text-2xl font-semibold tracking-tight text-foreground">
            Projects
          </h1>
          <p className="mt-2 text-muted-foreground text-pretty">
            A selection of projects
            I&apos;ve built.
          </p>
        </header>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
