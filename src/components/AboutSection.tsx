import aboutData from "@/data/about.json";

const AboutSection = () => {
  return (
    <div className=" py- md:py-16">
      {/* About Section */}
      <section id="about" className="container mx-auto px-2 ">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-3xl font-extrabold  tracking-wide">
            {aboutData.title}
          </h2>
          <p className="text-xl md:text-2xl  mt-4 font-light max-w-3xl mx-auto">
            {aboutData.description}
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* History Card */}
          <div className="relative bg-white border p-8 overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-gray-500"></div>
            <h3 className="text-xl md:text-xl font-bold  mb-6">
              {aboutData.history.title} 
            </h3>
            <p className="text-gray-700 leading-relaxed text-base md:text-md">
              {aboutData.history.content}
            </p>
          </div>

          {/* Facts and Special Card */}
          <div className="space-y-8">
            {/* Facts Card */}
            <div className="bg-gray-100 border p-8">
              <h3 className="text-2xl md:text-3xl font-bold  mb-6">
                {aboutData.facts.title}
              </h3>
              <ul className="space-y-4">
                {aboutData.facts.items.map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <span className="0 text-xl">◆</span>
                    <div>
                      <strong className="font-semibold">
                        {item.label}:
                      </strong>{" "}
                      <span className="text-gray-700">{item.value}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Special Card */}
            <div className="bg-white border p-8">
              <h3 className="text-2xl md:text-3xl font-bold  mb-6">
                {aboutData.special.title}
              </h3>
              <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-4">
                {aboutData.special.intro}
              </p>
              <ul className="space-y-4">
                {aboutData.special.items.map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <span className=" text-xl">◆</span>
                    <div>
                      <strong className=" font-semibold">
                        {item.label}:
                      </strong>{" "}
                      <span className="text-gray-700">{item.value}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;