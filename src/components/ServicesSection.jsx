const ServicesSection = () => {
  const services = [
    {
      icon: "https://static.tildacdn.one/tild6661-6435-4637-b139-343266306237/ph_truck-fill.svg",
      title: "Automobile cargo transportation",
    },
    {
      icon: "https://static.tildacdn.one/tild6632-3133-4664-b262-636161323431/mdi_airplane.svg",
      title: "Aviation cargo transportation",
    },
    {
      icon: "https://static.tildacdn.one/tild6364-3664-4861-b232-653338653033/bxs_ship.svg",
      title: "Sea cargo transportation",
    },
    {
      icon: "https://static.tildacdn.one/tild6339-3838-4336-a162-626331306436/mdi_transit-connecti.svg",
      title: "Multimodal cargo transportation",
    },
    {
      icon: "https://static.tildacdn.one/tild3337-3231-4566-b235-313464636432/ic_baseline-train.svg",
      title: "Rail freight transportation",
    },
    {
      icon: "https://static.tildacdn.one/tild3933-3132-4136-a636-616334633430/bxs_package.svg",
      title: "Combined cargo transportation",
    },
  ];

  return (
    <section className="py-16 bg-[#331f61]">
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="text-4xl md:text-[46px] text-white text-center font-bold mb-24 md:mb-[90px]">
          Wide range of logistics services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <div key={index} className="flex items-center gap-5">
              <img
                src={service.icon}
                alt={service.title}
                className="w-14 h-14 md:w-16 md:h-16"
              />
              <h3 className="text-white text-base uppercase font-sans m-0">
                {service.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
