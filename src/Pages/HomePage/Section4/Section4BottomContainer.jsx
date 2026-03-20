import ServiceCard2 from '../../../components/Common/ServiceCard2'

const Section4BottomContainer = (props) => {
  return (
    <div className='py-17.5 w-full flex flex-col gap-12.5 ' id='Section4BottomContainer'>
        {props.services.map((elem, idx)=> {
            return <ServiceCard2 key={idx}  serviceName = {elem.serviceName} serviceDiscription={elem.serviceDiscription}  />
        })}
    </div>
  )
}

export default Section4BottomContainer

