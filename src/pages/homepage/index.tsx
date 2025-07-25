
import CTA from "../../components/sections/CTA"
import Features from "../../components/sections/Features"
import Hero from "../../components/sections/Hero"
import HowItWorks from "../../components/sections/HowItWorks"
import Pricing from "../../components/sections/Pricing"
import Testimonials from "../../components/sections/Testimonials"
import ValueProposition from "../../components/sections/ValueProposition"
import VideoIntro from "../../components/sections/VideoIntro"

const Home = () => {
  return (
    <div className="overflow-x-hidden">
        <Hero />
        <VideoIntro />
        <ValueProposition />
        <Pricing />
        <HowItWorks />
        <Features />
        <Testimonials />
        <CTA />
    </div>
  )
}

export default Home