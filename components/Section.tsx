import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SectionProps {
    id?: string
    eyebrow: string
    title: ReactNode
    description?: ReactNode
    className?: string
    children: ReactNode
}

/** A page section with the small uppercase label, title and optional description. */
const Section = ({ id, eyebrow, title, description, className, children }: SectionProps) => (
    <section id={id} className={cn('scroll-mt-20 py-12', className)}>
        <div className="mb-8 flex flex-col gap-2">
            <span className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">{eyebrow}</span>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
            {description && <p className="text-muted-foreground">{description}</p>}
        </div>
        {children}
    </section>
)

export default Section
