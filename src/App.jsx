import './App.css'
import Navbar from './Navbar'
import Hero from './Hero'
import Heading from './Heading'
import ExpertiseGrid from './ExpertiseGrid'
import Link from './Link'
import AnalysisCardList from './AnalysisCardList'
import BlogSection from './BlogSection'
import BlogCardList from './BlogCardList'
import TestimonialSection from './TestimonialSection'
import Footer from './Footer'
import FaqSection from './FaqSection'
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <section style={{ backgroundColor: "#0e0e0e" }}>
        <span className='Head'>
          <Heading text={"✹ Expertise"} />
          <Link text={"View all"} />
        </span>
        <ExpertiseGrid />
      </section>
      <section style={{ backgroundColor: "#0e0e0e" }} >
        <span className='Head'>
          <Heading text={"✹ Works"} />
          <Link text={"View all"} />
        </span>
        <AnalysisCardList style={{backgroundColor:"#0e0e0e"}} />
      </section>
      <section style={{ backgroundColor: "#0e0e0e" ,padding:"22px"}}>
        <Heading text={"✹ Experience"} />
        <BlogSection></BlogSection>
      </section>
      <section style={{ backgroundColor: "#0e0e0e" }}>
        <span className='Head'>
          <Heading text={"✹ Blogs"} />
          <Link text={"View all"} />
        </span>
        <BlogCardList/>
      </section>
      <section style={{ backgroundColor: "#0e0e0e" }}>
        <span className='Head'>
          <Heading text={"✹ What they Say"} />
        </span>
        <TestimonialSection/>
      </section>
      <FaqSection/>
      <Footer/>
    </>
  )
}

export default App
