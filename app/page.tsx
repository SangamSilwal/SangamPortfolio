import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Mail, Download } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ProjectCard } from "@/components/project-card"
import { BlogCard } from "@/components/blog-card"
import { siteConfig } from "@/lib/site-config"
import { projects } from "@/lib/projects"
import { sortedPosts } from "@/lib/blog"

export default function HomePage() {
  const featured = projects.filter((p) => p.featured).slice(0, 3)
  const recentPosts = sortedPosts.slice(0, 2)

  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />

      <main className="mx-auto w-full max-w-3xl flex-1 px-6">
        {/* Hero */}
        <section className="py-16 sm:py-24">
          <div className="flex flex-col items-start gap-8 sm:flex-row sm:items-center">
            {/* Avatar */}
            {siteConfig.avatar && (
              <div className="group relative h-48 w-48 shrink-0 sm:h-64 sm:w-64 lg:h-72 lg:w-72">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/40 via-primary/10 to-transparent blur-xl transition-opacity duration-300 group-hover:opacity-80" />
                <div className="relative h-full w-full overflow-hidden rounded-full ring-2 ring-border ring-offset-4 ring-offset-background shadow-lg transition-transform duration-300 group-hover:scale-[1.03]">
                  <Image
                    src={siteConfig.avatar || "/placeholder.svg"}
                    alt={`${siteConfig.name} profile photo`}
                    width={256}
                    height={256}
                    className="h-full w-full object-cover object-center"
                    priority
                  />
                </div>
              </div>
            )}

            {/* Text content */}
            <div className="min-w-0 flex-1">
              <p className="font-mono text-sm text-primary">{siteConfig.role}</p>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight text-foreground text-balance sm:text-4xl">
                {siteConfig.name}
              </h1>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground text-pretty">
                {siteConfig.tagline}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-1.5 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                >
                  View projects
                  <ArrowRight className="h-4 w-4" />
                </Link>
                {siteConfig.email && (
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="inline-flex items-center gap-1.5 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
                  >
                    <Mail className="h-4 w-4" />
                    Get in touch
                  </a>
                )}
                {siteConfig.links.resume && (
                  <a
                    href={siteConfig.links.resume}
                    download
                    className="inline-flex items-center gap-1.5 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
                  >
                    <Download className="h-4 w-4" />
                    Download CV
                  </a>
                )}
              </div>

              <div className="mt-6 flex items-center gap-4">
                {siteConfig.links.github && (
                  <a
                    href={siteConfig.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                    aria-label="GitHub"
                  >
                    <GithubIcon className="h-5 w-5" />
                  </a>
                )}
                {siteConfig.links.linkedin && (
                  <a
                    href={siteConfig.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                    aria-label="LinkedIn"
                  >
                    <LinkedinIcon className="h-5 w-5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="border-t border-border py-12">
          <h2 className="font-mono text-sm text-muted-foreground">About</h2>
          <p className="mt-4 leading-relaxed text-foreground/90 text-pretty">
            {siteConfig.about}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {siteConfig.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-border bg-card px-3 py-1 font-mono text-xs text-muted-foreground"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Featured projects */}
        <section className="border-t border-border py-12">
          <div className="flex items-center justify-between">
            <h2 className="font-mono text-sm text-muted-foreground">
              Featured projects
            </h2>
            <Link
              href="/projects"
              className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
            >
              All projects
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {featured.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>

        {/* Recent posts */}
        <section className="border-t border-border py-12">
          <div className="flex items-center justify-between">
            <h2 className="font-mono text-sm text-muted-foreground">
              Recent writing
            </h2>
            <Link
              href="/blog"
              className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
            >
              All posts
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="mt-6 grid gap-4">
            {recentPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}