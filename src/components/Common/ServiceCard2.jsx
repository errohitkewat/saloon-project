
const ServiceCard2 = (props) => {
  return (
    <div className="lg:flex  items-center justify-between border-b border-[#393230]">
        <div style={{fontFamily: 'Fahkwang'}} className="lg:w-1/2 mb-3 text-[22px] lg:text-[30px] lg:py-7.5 font-thin text-[#393230e2]   ">
            <h1>{props.serviceName} </h1>
        </div>
        <div style={{fontFamily: "HelveticaW01-Light"}} className="lg:text-[18px] mb-2 font-thin lg:py-7.5 lg:pl-37.5 text-[#393230e2] w-1/2  ">
            <p>{props.serviceDiscription}</p>
        </div>
    </div>
  )
}

export default ServiceCard2

