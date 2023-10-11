import Header from '../components/header'
import Hero from '../components/hero'
import Features from '../components/features'
import FeaturesBlocks from '../components/features-blocks'
import Testimonials from '../components/testimonials'

export const metadata = {
  title: 'IPPER Techonologies',
  description: 'IPPER Techonologies',
}

export default function Home() {
  return (
    <>
      <Header/>
      <Hero />
      <FeaturesBlocks />
      <Features />    
      {/* <Testimonials /> */}
    </>
  )
}
