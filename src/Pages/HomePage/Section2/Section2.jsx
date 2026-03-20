import ServiceCardContainer from './ServiceCardContainer'
import SectionHeading from '../../../components/Common/SectionHeading'

const Section2 = () => {
 
  const cardDetails = [
    {
      cardTitle: 'Professional Hail Extention Installation',
      time: '1hr',
      price: '125',
      image: 'https://static.wixstatic.com/media/88aac0_d51c407e9dad49d28a91828c7c9fd026~mv2.jpg/v1/fill/w_760,h_760,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/88aac0_d51c407e9dad49d28a91828c7c9fd026~mv2.jpg'
    },
    {
      cardTitle: 'Custom Color Matching & Blending',
      time: '1hr',
      price: '150',
      image: 'https://static.wixstatic.com/media/88aac0_47460b4450714d23b37740ae9e16b0be~mv2.jpg/v1/fill/w_760,h_760,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/88aac0_47460b4450714d23b37740ae9e16b0be~mv2.jpg'
    },
    {
      cardTitle: 'Extension Maintenance & Care',
      time: '1hr',
      price: '200',
      image: 'https://static.wixstatic.com/media/88aac0_7a92d545bd1c489289ebebb530fa9d0a~mv2.jpg/v1/fill/w_760,h_760,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/88aac0_7a92d545bd1c489289ebebb530fa9d0a~mv2.jpg'
    },
  ]
  
  return (
    <div className='p-3 lg:py-12.5 lg:px-25 w-screen bg-[#cecccb] ' id='Section2'>
        <SectionHeading title={"What we Offer"} />
        <ServiceCardContainer cardDetails = {cardDetails} />
    </div>
  )
}

export default Section2


