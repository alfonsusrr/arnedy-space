import Image from 'next/image'
import Nav from './containers/Nav'
import About from './containers/About'
import Featured from './containers/Featured'
import Skills from './containers/Skills'
import Education from './containers/Education'
import Experiences from './containers/Experiences'
import Projects from './containers/Projects'
import Publications from './containers/Publications'
import Footer from './containers/Footer'
import NavSmall from './containers/NavSmall'

export default function Home() {
  return (
    <main className="bg-gradient-to-r from-dark-1 via-dark-2 to-dark-1 h-full">
      <div className="lg:inline hidden">
        <Nav/>
      </div>
      <div className="inline lg:hidden">
        <NavSmall/>
      </div>
      <div className='md:px-12 lg:px-20 xl:px-18 2xl:px-60 3xl:px-72 py-10 2xl:py-16 w-full relative'>
        <About/>
        <Featured/>
      </div>
      <Skills/>
      <Education/>
      <Experiences/>
      <Projects/>
      <Publications/>
      <Footer/>
    </main>
  )
}
