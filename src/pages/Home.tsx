import CTA from '../components/sections/CTA'
import Hero from '../components/sections/Hero'
import Showcase from '../components/sections/Showcase'
import Marquee from '../components/sections/Marquee'
import ParallaxSections from '../components/sections/ParallaxSections'
import Portfolio from '../components/sections/Portfolio'
import InfoSegment from '../components/sections/InfoSegment'
import OutsourcingVAs from '../components/sections/OutsourcingVAs'


export default function Home() {
  return (
    <>
    <div className="min-h-dvh bg-white text-zinc-950 dark:bg-[#050505] dark:text-white">
      <main>
        <Hero />
        <Showcase />
        <OutsourcingVAs />
        <Marquee />
        <ParallaxSections />
        <Portfolio />
        <InfoSegment />
        <Marquee />
        <CTA />
      
      </main>
    </div>
    </>
  )
}
