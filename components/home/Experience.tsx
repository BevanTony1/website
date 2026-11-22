import { differenceInMonths, format } from 'date-fns'
import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import Section from '@/components/Section'
import { EXPERIENCE } from '@/data/experience'

/** "1 yr 10 mos", "6 mos" */
function formatDuration(start: Date, end: Date = new Date()) {
    const months = differenceInMonths(end, start) + 1
    const years = Math.floor(months / 12)
    const rest = months % 12
    return [years && `${years} yr${years > 1 ? 's' : ''}`, rest && `${rest} mo${rest > 1 ? 's' : ''}`]
        .filter(Boolean)
        .join(' ')
}

const Experience = () => (
    <Section id="experience" eyebrow="Career" title="Work Experience">
        <ol className="relative ml-1.5 border-l border-border">
            {EXPERIENCE.map((job) => (
                <li key={`${job.role}-${job.company}`} className="group relative pb-10 pl-8 last:pb-0">
                    <span
                        className={cn(
                            'absolute top-1.5 -left-[7px] size-3.5 rounded-full border-2 border-background',
                            job.end
                                ? 'bg-muted-foreground/40 transition-colors group-hover:bg-foreground'
                                : 'bg-emerald-500 ring-4 ring-emerald-500/20'
                        )}
                    />
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                        <h3 className="font-semibold">
                            {job.role} <span className="font-normal text-muted-foreground">@ {job.company}</span>
                        </h3>
                        <span className="shrink-0 text-xs text-muted-foreground tabular-nums">
                            {format(job.start, 'MMM yyyy')} — {job.end ? format(job.end, 'MMM yyyy') : 'Present'}
                        </span>
                    </div>
                    <Badge variant="outline">
                        {job.status}
                    </Badge>
                    <Badge variant="secondary" className="mt-2 font-normal">
                        {formatDuration(job.start, job.end)}
                    </Badge>
                </li>
            ))}
        </ol>
    </Section>
)

export default Experience
