import CTA from '../components/sections/CTA'
import Features from '../components/sections/Features'
import Hero from '../components/sections/Hero'
import Showcase from '../components/sections/Showcase'
import Marquee from '../components/sections/Marquee'
import ParallaxSections from '../components/sections/ParallaxSections'
import Portfolio from '../components/sections/Portfolio'
import InfoSegment from '../components/sections/InfoSegment'


export default function Home() {
  return (
    <>
        <Hero />
        <Showcase />
        <Marquee />
        <Features />
        <ParallaxSections />
        <Portfolio />
        <InfoSegment />
        <Marquee />
        <CTA />
    </>
  )
}
