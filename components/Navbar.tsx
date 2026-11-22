import { useState } from 'react'
import { flushSync } from 'react-dom'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTheme } from 'next-themes'
import { MenuIcon, MoonIcon, SunIcon, XIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Collapsible, CollapsibleContent } from '@/components/ui/collapsible'

interface NavItem {
    label: string,
    href: string
}

const NAV_ITEMS: Array<NavItem> = [
    { label: 'About', href: '/' },
    { label: 'Projects', href: '/project' },
]

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const { resolvedTheme, setTheme } = useTheme()
    const { pathname } = useRouter()

    // Cross-fade between themes where the browser supports View Transitions;
    // otherwise (or with reduced motion) it switches instantly as before.
    const toggleTheme = () => {
        const next = resolvedTheme === 'dark' ? 'light' : 'dark'
        const apply = () => {
            flushSync(() => setTheme(next))
            document.documentElement.classList.toggle('dark', next === 'dark')
        }
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        if (!document.startViewTransition || reduceMotion) {
            apply()
            return
        }
        document.startViewTransition(apply)
    }

    const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href))

    return (
        <Collapsible
            open={isOpen}
            onOpenChange={setIsOpen}
            className="sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60"
        >
            <nav className="mx-auto flex h-16 w-full max-w-3xl items-center gap-2 px-4">
                <Link href="/" className="mr-4 flex items-center gap-2 font-semibold tracking-tight">
                    <span className="flex size-8 items-center justify-center rounded-lg bg-foreground text-sm font-bold text-background">
                        BT
                    </span>
                    <span className="hidden sm:inline">Bevan Tony</span>
                </Link>

                <div className="hidden items-center gap-1 md:flex">
                    {NAV_ITEMS.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                'rounded-md px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground',
                                isActive(item.href) && 'bg-muted text-foreground'
                            )}
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>

                <div className="flex-1" />

                <Button
                    variant="ghost"
                    size="icon"
                    aria-label="Toggle Theme"
                    onClick={toggleTheme}
                >
                    <SunIcon className="dark:hidden" />
                    <MoonIcon className="hidden dark:block" />
                </Button>
                <Button
                    variant="ghost"
                    size="icon"
                    className="md:hidden"
                    aria-label="Toggle Navigation"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <XIcon /> : <MenuIcon />}
                </Button>
            </nav>
            <CollapsibleContent className="md:hidden">
                <div className="mx-auto flex max-w-3xl flex-col gap-1 px-4 pb-4">
                    {NAV_ITEMS.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className={cn(
                                'rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground',
                                isActive(item.href) && 'bg-muted text-foreground'
                            )}
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
            </CollapsibleContent>
        </Collapsible>
    )
}

export default Navbar
