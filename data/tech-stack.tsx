import type { ReactNode } from 'react'
import { DiCss3, DiReact } from 'react-icons/di'
import { SiMysql, SiPostgresql, SiNextdotjs, SiJavascript, SiDjango, SiSass, SiGithub, SiTrello, SiFirebase, SiTypescript, SiFrappe, SiDrizzle, SiGitlab, SiVercel, SiSupabase, SiNuxt, SiClaude } from 'react-icons/si'
import { RiOpenaiFill } from 'react-icons/ri'
import { FaAws } from 'react-icons/fa'
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
            { icon: <SiNuxt />, label: 'Nuxt' },
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
            { icon: <SiGitlab />, label: 'GitLab' },
            { icon: <FaAws />, label: 'AWS' },
            { icon: <SiVercel />, label: 'Vercel' },
            { icon: <SiTrello />, label: 'Trello' },
            { icon: <BiPyramid />, label: 'Prisma' },
            { icon: <SiDrizzle />, label: 'Drizzle' },
            { icon: <SiSupabase />, label: 'Supabase' },
            { icon: <SiFirebase />, label: 'Firebase' },
            { icon: <SiPostgresql />, label: 'Postgres' },
            { icon: <SiMysql />, label: 'Mysql' },
        ],
    },
    {
        title: 'AI Tools',
        items: [
            { icon: <SiClaude />, label: 'Claude' },
            { icon: <RiOpenaiFill />, label: 'Codex' },
        ],
    },
]
