import Hero from '@/components/home/Hero'
import Experience from '@/components/home/Experience'
import TechStack from '@/components/home/TechStack'
import NowPlaying from '@/components/home/NowPlaying'
import Contact from '@/components/home/Contact'

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-3xl px-4">
      <Hero />
      <Experience />
      <TechStack />
      <NowPlaying />
      <Contact />
    </main>
  )
}
