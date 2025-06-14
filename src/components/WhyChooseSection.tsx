
const WhyChooseSection = () => {
  const whyChooseItems = [
    "World Class instructors",
    "1 on 1 Mentorship",
    "Industrial Training", 
    "Placement Assistant"
  ];

  return (
    <section className="py-8 bg-white border-4 border-blue-500 mx-4 my-6 rounded-2xl">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-gray-600 mb-3 bg-gray-100 inline-block px-3 py-2 rounded-full text-sm">World-Class Instructors</p>
            <h2 className="text-2xl font-bold mb-4">
              Why Choose <br/><span className="text-blue-600">Stem for Society</span> ?
            </h2>
          </div>
          <div className="space-y-3">
            {whyChooseItems.map((item, index) => (
              <div key={index} className="bg-gray-100 rounded-lg p-3 text-base font-medium">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
