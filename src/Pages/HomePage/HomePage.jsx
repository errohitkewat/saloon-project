
import Section1 from './Section1/Section1'
import Section2 from './Section2/Section2'
import Section3 from './Section3/Section3'
import Section4 from './Section4/Section4'
import Section5 from './Section5/Section5'
import ContactSection from './Section6/ContactSection'
import Footer from '../../components/Layout/Footer/Footer'

const HomePage = () => {
  return (
    <div>
        <div id='fixedBackground'></div>   
        <div id='mainContent'>
          <Section1 />
          <Section2 />
          <Section3 />
          <Section4 />
          <Section5 />
          <ContactSection />
          <Footer />
        </div>
    </div>
  )
}

export default HomePage


