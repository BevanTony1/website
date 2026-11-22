import type { ReactNode } from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

export interface Social {
    label: string
    href: string
    icon: ReactNode
}

export const SOCIALS: Social[] = [
    { label: 'Github', href: 'https://github.com/Bevantootskie', icon: <AiFillGithub /> },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/bevan-tony-medrano-544151179/', icon: <AiFillLinkedin /> },
]
