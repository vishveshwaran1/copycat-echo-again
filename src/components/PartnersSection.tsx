
const PartnersSection = () => {
  const partners = [
    "Company A", "Company B", "Shewell", "Company D"
  ];

  return (
    <section className="py-6 bg-gray-50">
      <div className="container mx-auto px-4 text-center max-w-7xl">
        <h2 className="text-xl font-bold mb-4">Industrial & Academic Partners</h2>
        <div className="flex flex-wrap justify-center items-center gap-6">
          {partners.map((partner, index) => (
            <div key={index} className="text-base font-semibold text-gray-600">
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
