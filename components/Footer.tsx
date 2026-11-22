import { IoLogoVercel } from 'react-icons/io5'
import { SiNextdotjs, SiShadcnui } from 'react-icons/si'
import { getYear } from 'date-fns'
import { Button } from '@/components/ui/button'
import { SOCIALS } from '@/data/socials'

const BUILT_WITH = [
    { icon: <SiNextdotjs />, label: 'Next.js' },
    { icon: <IoLogoVercel />, label: 'Vercel' },
    { icon: <SiShadcnui />, label: 'shadcn/ui' },
]

const Footer = () => {
    return (
        <footer className="mt-24 border-t border-border/60">
            <div className="mx-auto flex w-full max-w-3xl flex-col gap-6 px-4 py-10 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-col gap-2">
                    <p className="text-sm font-medium">© {getYear(new Date())} Bevan Tony Medrano</p>
                    <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
                        Built with
                        {BUILT_WITH.map((item) => (
                            <span key={item.label} className="inline-flex items-center gap-1">
                                {item.icon} {item.label}
                            </span>
                        ))}
                    </p>
                </div>
                <div className="flex gap-1">
                    {SOCIALS.map((social) => (
                        <Button key={social.href} asChild variant="ghost" size="icon" aria-label={`${social.label} Link`}>
                            <a href={social.href} target="_blank" rel="noopener noreferrer">
                                {social.icon}
                            </a>
                        </Button>
                    ))}
                </div>
            </div>
        </footer>
    )
}

export default Footer
