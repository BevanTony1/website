import Section from '@/components/Section'
import { TECH_STACK } from '@/data/tech-stack'

const TechStack = () => (
    <Section id="tech-stack" eyebrow="Toolbox" title="Tech Stack">
        <div className="flex flex-col gap-6">
            {TECH_STACK.map((group) => (
                <div key={group.title} className="grid gap-3 sm:grid-cols-[8rem_1fr] sm:gap-6">
                    <h3 className="pt-1 text-sm font-medium text-muted-foreground">{group.title}</h3>
                    <div className="flex flex-wrap gap-2">
                        {group.items.map((item) => (
                            <span
                                key={item.label}
                                className="inline-flex items-center gap-2 rounded-full border bg-card px-3 py-1.5 text-sm transition-colors hover:border-foreground/30 hover:bg-muted [&_svg]:size-4"
                            >
                                {item.icon} {item.label}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </Section>
)

export default TechStack
