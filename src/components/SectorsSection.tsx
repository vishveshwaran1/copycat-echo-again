
const SectorsSection = () => {
  // Four-corner star SVG component (Gemini AI logo style)
  const FourCornerStar = () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
      <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" fill="currentColor"/>
    </svg>
  );

  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-500 text-center md:text-left">Sectors we Focus</h2>
        <div className="max-w-6xl mx-auto">
          {/* Row 1 - 3 items */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
            <div className="bg-blue-200 rounded-2xl p-4 flex items-center space-x-3">
              <div className="w-5 h-5 text-blue-800 flex-shrink-0">
                <FourCornerStar />
              </div>
              <span className="text-gray-800 font-medium text-base">Climate Change</span>
            </div>
            <div className="bg-blue-200 rounded-2xl p-4 flex items-center space-x-3">
              <div className="w-5 h-5 text-blue-800 flex-shrink-0">
                <FourCornerStar />
              </div>
              <span className="text-gray-800 font-medium text-base">Technology</span>
            </div>
            <div className="bg-blue-200 rounded-2xl p-4 flex items-center space-x-3">
              <div className="w-5 h-5 text-blue-800 flex-shrink-0">
                <FourCornerStar />
              </div>
              <span className="text-gray-800 font-medium text-base">Life science</span>
            </div>
          </div>
          
          {/* Row 2 - 4 items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-3">
            <div className="bg-blue-200 rounded-2xl p-4 flex items-center space-x-3">
              <div className="w-5 h-5 text-blue-800 flex-shrink-0">
                <FourCornerStar />
              </div>
              <span className="text-gray-800 font-medium text-base">Innovation</span>
            </div>
            <div className="bg-blue-200 rounded-2xl p-4 flex items-center space-x-3">
              <div className="w-5 h-5 text-blue-800 flex-shrink-0">
                <FourCornerStar />
              </div>
              <span className="text-gray-800 font-medium text-base">Finance</span>
            </div>
            <div className="bg-blue-200 rounded-2xl p-4 flex items-center space-x-3">
              <div className="w-5 h-5 text-blue-800 flex-shrink-0">
                <FourCornerStar />
              </div>
              <span className="text-gray-800 font-medium text-base">Pharmacy</span>
            </div>
            <div className="bg-blue-200 rounded-2xl p-4 flex items-center space-x-3">
              <div className="w-5 h-5 text-blue-800 flex-shrink-0">
                <FourCornerStar />
              </div>
              <span className="text-gray-800 font-medium text-base">Agriculture</span>
            </div>
          </div>
          
          {/* Row 3 - 3 items */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
            <div className="bg-blue-200 rounded-2xl p-4 flex items-center space-x-3">
              <div className="w-5 h-5 text-blue-800 flex-shrink-0">
                <FourCornerStar />
              </div>
              <span className="text-gray-800 font-medium text-base">Entrepreneurship</span>
            </div>
            <div className="bg-blue-200 rounded-2xl p-4 flex items-center space-x-3">
              <div className="w-5 h-5 text-blue-800 flex-shrink-0">
                <FourCornerStar />
              </div>
              <span className="text-gray-800 font-medium text-base">Veterinary</span>
            </div>
            <div className="bg-blue-200 rounded-2xl p-4 flex items-center space-x-3">
              <div className="w-5 h-5 text-blue-800 flex-shrink-0">
                <FourCornerStar />
              </div>
              <span className="text-gray-800 font-medium text-base">Medicine</span>
            </div>
          </div>
          
          {/* Row 4 - 2 items centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-2xl mx-auto">
            <div className="bg-blue-200 rounded-2xl p-4 flex items-center space-x-3">
              <div className="w-5 h-5 text-blue-800 flex-shrink-0">
                <FourCornerStar />
              </div>
              <span className="text-gray-800 font-medium text-base">Allied health science</span>
            </div>
            <div className="bg-blue-200 rounded-2xl p-4 flex items-center space-x-3">
              <div className="w-5 h-5 text-blue-800 flex-shrink-0">
                <FourCornerStar />
              </div>
              <span className="text-gray-800 font-medium text-base">Environmental Science</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectorsSection;
