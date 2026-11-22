import ProjectCard from '@/components/ProjectCard'
import Section from '@/components/Section'
import { PROJECTS } from '@/data/projects'

const Projects = () => (
    <main className="mx-auto w-full max-w-3xl px-4 pt-4">
        <Section eyebrow="Portfolio" title="Projects" description="A few things I've built and contributed to.">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {PROJECTS.map((project) => (
                    <ProjectCard key={project.repository} {...project} />
                ))}
            </div>
        </Section>
    </main>
)

export default Projects
