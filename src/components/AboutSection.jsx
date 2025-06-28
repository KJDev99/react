const AboutSection = () => {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-5 flex flex-col md:flex-row">
        <div className="md:flex-1 md:pr-10 mb-10 md:mb-0">
          <h2 className="text-4xl md:text-[46px] font-bold mb-5">About Us</h2>
          <div className="w-24 h-0.5 bg-gray-800 my-5"></div>
          <p className="text-base max-w-[500px] leading-relaxed">
            The company «UTI-TRANZIT» was established in 2020 with the aim of
            providing optimal transport solutions to its customers. We provide
            only high-quality and thoughtful solutions for our clients in order
            to optimize cargo transportation issues.
            <br />
            <br />
            More than 500 clients have already started cooperation with us and
            to this day they remain satisfied with our services.
            <br />
            <br />
            Try it and you!
          </p>
        </div>

        <div className="md:flex-1">
          <img
            src="https://static.tildacdn.one/tild6133-6366-4632-b766-376664336432/d313.jpg"
            alt="About UTI Transit"
            className="w-full h-[60vh] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
