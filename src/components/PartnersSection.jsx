const PartnersSection = () => {
  const partners = [
    "https://static.tildacdn.one/tild3264-3833-4438-b163-323932633539/Frame_13.jpg",
    "https://static.tildacdn.one/tild6565-3735-4331-b032-333361623164/Frame_12.jpg",
    "https://static.tildacdn.one/tild6234-3131-4265-b361-313634353366/Frame_14.jpg",
    "https://static.tildacdn.one/tild3662-6231-4535-b530-363861366137/Frame_11.jpg",
    "https://static.tildacdn.one/tild6533-3233-4834-b034-636630666135/Frame_10.jpg",
    "https://static.tildacdn.one/tild3366-6361-4532-b030-383330646530/Frame_9.jpg",
    "https://static.tildacdn.one/tild6632-3732-4236-a166-383531363630/Frame_8.jpg",
    "https://static.tildacdn.one/tild3366-3066-4231-a537-313361666237/Frame_7.jpg",
    "https://static.tildacdn.one/tild3637-3131-4533-a133-656532353362/Frame_6.jpg",
  ];

  return (
    <section className="py-8 md:py-16">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-left mb-16 md:mb-[105px]">
          <h2 className="text-4xl md:text-[46px] font-bold mb-5">
            Our partners
          </h2>
          <p className="text-base max-w-[560px] leading-relaxed">
            Our partners try to cooperate with us on an ongoing basis to
            maintain high-quality transport supplies and optimize transport
            routes.
            <br />
            We, in turn, are trying to give our partners the best conditions for
            cooperation!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 items-center">
          {partners.map((partner, index) => (
            <img
              key={index}
              src={partner}
              alt={`Partner ${index + 1}`}
              className="max-w-[150px] h-auto mx-auto"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
