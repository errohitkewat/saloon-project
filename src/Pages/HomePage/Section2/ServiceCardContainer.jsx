import ServiceCard from '../../../components/Common/ServiceCard'

const ServiceCardContainer = (props) => {
  return (
    <div className='w-full py-7.5 lg:flex shrink-0 flex-wrap items-center justify-center gap-10 ' id='ServiceCardContainer'>
        {props.cardDetails.map((elem,idx)=> {
          return <ServiceCard key={idx} cardTitle = {elem.cardTitle} image={elem.image} price={elem.price} time={elem.time} />
        })}
    </div>
  )
}

export default ServiceCardContainer


