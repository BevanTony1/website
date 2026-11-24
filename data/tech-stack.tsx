import type { ReactNode } from 'react'
import { DiCss3, DiReact } from 'react-icons/di'
import { SiMysql, SiPostgresql, SiNextdotjs, SiJavascript, SiDjango, SiSass, SiGithub, SiTrello, SiFirebase, SiTypescript, SiFrappe } from 'react-icons/si'
import { BiPyramid } from 'react-icons/bi'
import { IoLogoPython, IoLogoHtml5 } from 'react-icons/io'

export interface TechGroup {
    title: string
    items: { icon: ReactNode; label: string }[]
}

export const TECH_STACK: TechGroup[] = [
    {
        title: 'Frameworks',
        items: [
            { icon: <SiFrappe />, label: 'Frappe' },
            { icon: <SiNextdotjs />, label: 'Nextjs' },
            { icon: <DiReact />, label: 'Reactjs' },
            { icon: <SiDjango />, label: 'Django' },
        ],
    },
    {
        title: 'Languages',
        items: [
            { icon: <IoLogoPython />, label: 'Python' },
            { icon: <SiJavascript />, label: 'JavaScript' },
            { icon: <SiTypescript />, label: 'TypeScript' },
            { icon: <IoLogoHtml5 />, label: 'HTML' },
            { icon: <DiCss3 />, label: 'CSS' },
            { icon: <SiSass />, label: 'SASS' },
        ],
    },
    {
        title: 'Tools',
        items: [
            { icon: <SiGithub />, label: 'Github' },
            { icon: <SiTrello />, label: 'Trello' },
            { icon: <BiPyramid />, label: 'Prisma' },
            { icon: <SiFirebase />, label: 'Firebase' },
            { icon: <SiPostgresql />, label: 'Posgres' },
            { icon: <SiMysql />, label: 'Mysql' },
        ],
    },
]
