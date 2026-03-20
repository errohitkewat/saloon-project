
const Section5 = () => {

  const galleryItems = [
    {
      id: 1,
      image: "https://t3.ftcdn.net/jpg/18/87/12/84/240_F_1887128493_Nw5eYy9u1CqZZkd8fD0xyLnCBPkdKw19.jpg",
      className: "col-span-2 lg:row-start-2"
    },
    {
      id: 2,
      image: "https://t3.ftcdn.net/jpg/16/45/76/40/360_F_1645764056_DsWvxDZ5y8r5aiZMeAqLAXVjDwZkgQo5.jpg",
      className: "lg:col-start-1 lg:row-start-3"
    },
    {
      id: 3,
      image: "https://t4.ftcdn.net/jpg/11/60/86/11/240_F_1160861121_0bv1knsh7ZyNS32lxgD5dv7XAYNobzMB.jpg",
      className: "lg:col-start-2 lg:row-start-3"
    },
    {
      id: 4,
      image: "https://m.media-amazon.com/images/I/A1Wf-1LmTOL._CR3,0,1914,1080_SR684,386_.jpg",
      className: "lg:col-start-1 lg:row-start-4"
    },
    {
      id: 5,
      image: "https://thecutby.com/cdn/shop/files/DSCF3818.jpg?v=1716327276&width=1440",
      className: "lg:col-start-2 lg:row-start-4"
    },
    {
      id: 6,
      image: "https://www.salontonight.com/assets/71762/6f2da6b3-6a51-40d4-828d-a01c7378db28.jpg",
      className: "col-span-2 lg:row-start-5"
    }
  ];

  return (
    <div
      className="
        grid 
        grid-cols-2 
        gap-3 
        px-3 py-10
        grid-rows-[auto_30vh_15vh_15vh_30vh]
        bg-[#1d1d1d]
        lg:p-25
        lg:gap-10
        lg:grid-rows-[auto_80vh_40vh_40vh_80vh]
      "
    >
      {/* Heading */}
      <h1
        style={{ fontFamily: "Fahkwang" }}
        className="col-span-2 text-[38px] lg:text-[60px] text-[#f5f5f5]"
      >
        Gallery
      </h1>

      {galleryItems.map((item) => (
        <div
          key={item.id}
          className={`relative overflow-hidden group h-full w-full ${item.className}`}
        >
          <img
            src={item.image} 
            alt="Gallary Image"
            className="w-full h-full object-cover transition-all duration-500 scale-105 group-hover:scale-100"
          />
          <div className="absolute -top-full left-0 w-full h-full bg-linear-to-b from-black/50 to-transparent transition-all duration-500 group-hover:top-0"></div>
        </div>
      ))}
    </div>
  );
};

export default Section5;
