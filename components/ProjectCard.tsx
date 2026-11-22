import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRightIcon } from 'lucide-react'
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card'
import type { Project } from '@/data/projects'

const ProjectCard = (props: Project) => {
    return (
        <Link href={props.repository} target="_blank" rel="noopener noreferrer" className="group block h-full">
            <Card className="h-full gap-0 pt-0 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:ring-foreground/20">
                <div className="relative aspect-video overflow-hidden border-b">
                    <Image
                        src={props.image}
                        alt={props.title}
                        fill
                        sizes="(min-width: 640px) 368px, 100vw"
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                </div>
                <CardContent className="flex flex-col gap-2 pt-4">
                    <CardTitle className="flex items-center justify-between gap-2 text-base font-semibold">
                        {props.title}
                        <ArrowUpRightIcon className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
                    </CardTitle>
                    <CardDescription className="leading-relaxed">{props.description}</CardDescription>
                </CardContent>
            </Card>
        </Link>
    )
}

export default ProjectCard
