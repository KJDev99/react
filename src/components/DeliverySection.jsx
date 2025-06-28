import React from "react";

const countries = [
  {
    name: "China",
    img: "https://static.tildacdn.one/tild6561-6233-4763-b237-636237303033/photo.png",
  },
  {
    name: "Russia",
    img: "https://static.tildacdn.one/tild6435-3932-4366-b337-633261653962/photo.png",
  },
  {
    name: "Lithuania",
    img: "https://static.tildacdn.one/tild3231-3032-4638-b139-636331356461/photo.png",
  },
  {
    name: "Spain",
    img: "https://static.tildacdn.one/tild3536-3731-4431-b462-643231386333/photo.png",
  },
  {
    name: "France",
    img: "https://static.tildacdn.one/tild3732-6137-4863-a339-366432396533/photo.png",
  },
  {
    name: "Italy",
    img: "https://static.tildacdn.one/tild6231-6534-4462-a261-333336396232/photo.png",
  },
  {
    name: "Latvia",
    img: "https://static.tildacdn.one/tild6135-3263-4766-b130-333466396131/photo.png",
  },
  {
    name: "Belarus",
    img: "https://static.tildacdn.one/tild3330-6462-4435-a338-623738643134/photo.png",
  },
  {
    name: "Georgia",
    img: "https://static.tildacdn.one/tild3961-3163-4632-b063-393836306130/photo.png",
  },
  {
    name: "Great Britain",
    img: "https://static.tildacdn.one/tild6132-3064-4238-b239-613963393434/photo.png",
  },
  {
    name: "Germany",
    img: "https://static.tildacdn.one/tild3434-3633-4733-b632-626232356532/photo.png",
  },
  {
    name: "Türkiye",
    img: "https://static.tildacdn.one/tild6332-3233-4931-b933-373962363339/photo.png",
  },
];

const DeliverySection = () => {
  return (
    <section className="bg-white py-16 pb-8">
      {/* Header */}
      <div className="mx-auto mb-14 max-w-3xl px-5 text-center">
        <h2 className="mb-5 text-3xl font-bold text-[#222] sm:text-4xl">
          Where and from where we deliver?
        </h2>
        <p className="text-lg text-[#555] leading-relaxed">
          Our company delivers goods to the countries of Europe, CIS and Asia
        </p>
      </div>

      {/* Countries Grid */}
      <div className="mx-auto flex max-w-[1200px] flex-wrap justify-center gap-5 px-5">
        {countries.map((country, index) => (
          <div
            key={index}
            className="w-full max-w-[calc(25%-40px)] text-center max-md:max-w-[calc(50%-40px)]"
          >
            <div className="mx-auto mb-4 h-[120px] w-[120px] overflow-hidden rounded-full border-2 border-gray-100 max-md:h-20 max-md:w-20">
              <img
                src={country.img}
                alt={country.name}
                className="h-full w-full object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold text-[#222]">
              {country.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DeliverySection;
