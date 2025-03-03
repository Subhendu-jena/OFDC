function OdishStories() {
  const stories = [
    {
      id: 1,
      image:
        'https://ofdc.octamy.com/wp-content/uploads/2020/09/New-Project-2.png',
      alt: 'Odisha Story 1',
    },
    {
      id: 2,
      image:
        'https://ofdc.octamy.com/wp-content/uploads/2020/09/New-Project-3.png',
      alt: 'Odisha Story 2',
    },
    {
      id: 3,
      image:
        'https://ofdc.octamy.com/wp-content/uploads/2020/09/New-Project-9.png',
      alt: 'Odisha Story 3',
    },
    {
      id: 4,
      image:
        'https://ofdc.octamy.com/wp-content/uploads/2020/09/New-Project-4.png',
      alt: 'Odisha Story 4',
    },
  ];
  return (
    <div
      className="w-full bg-white"
      style={{ backgroundImage: "url('/api/placeholder/1200/800')" }}
    >
      <div className="">
        <div className="w-full rounded-lg overflow-hidden">
          {/* Heading Section */}
          <div className="w-full py-8">
            <div className="container mx-auto">
              <div className="w-full">
                <div
                  className={`text-center transform transition-transform duration-1000 ${true ? 'translate-x-0' : '-translate-x-full'}`}
                >
                  <div className="inline-block mb-3">
                    <div className="text-[#FC3C3C] font-semibold text-xl">
                      <span>ODISHA</span>
                    </div>
                  </div>
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-800 ">
                    <span>Odisha: Stories Beyond The Lens</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
          {/* Stories Slider Section */}
          <div className="w-full py-8 transform transition-all duration-1000 translate-x-0 opacity-100">
            <div className="container mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {stories.map((story) => (
                  <div
                    key={story.id}
                    className="w-full hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="text-center">
                      <div className="relative overflow-hidden rounded-lg">
                        <img
                          className="w-full h-auto transform hover:scale-125 transition-transform duration-4000 min-h-[300px]"
                          src={story.image}
                          alt={story.alt}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OdishStories;
