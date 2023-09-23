import Hero from '@/components/Hero'
import About from '@/components/About'
import VerticalTimeline  from '@/components/Timeline'
import PreviousWork from '@/components/PreviousWork'
import ContactCard from '@/components/ContactCard'
import HireMeCard from '@/components/HireMe'
import Footer from '@/components/Footer'
import Navbar from '@/components/NavBar'

export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <VerticalTimeline/>
      <PreviousWork/>
      <ContactCard/>
      <HireMeCard/>
      <Footer/>
    </>
  )
}