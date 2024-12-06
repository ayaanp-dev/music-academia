export default function OurPrograms() {
    const programs = [
      {
        title: "Learn With Us",
        description:
          "Access high-quality music education and develop your skills with our expert mentors.",
        image: "/landing/learn.webp",
      },
      {
        title: "Teach With Us",
        description:
          "Join us as an educator and inspire the next generation of musicians.",
        image: "/landing/teach.webp",
      },
      {
        title: "Intern With Us",
        description:
          "Gain valuable experience by working with our innovative programs and passionate team.",
        image: "/landing/intern.webp",
      },
    ];
  
    return (
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold text-black dark:text-white">
                Our Programs
              </h2>
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mt-4">
                Explore how you can engage with our mission and grow with us.
              </p>
            </div>
    
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {programs.map((program, index) => (
                <div
                  key={index}
                  className="relative group rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105"
                  style={{ height: "500px" }} // Adjusted card height to fit the image and content
                >
                  {/* Background Image */}
                  <div
                    className="absolute inset-0"
                    style={{ height: "365px", overflow: "hidden" }}
                  >
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover"
                      style={{ height: "365px" }}
                    />
                    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-all duration-300"></div>
                  </div>
    
                  {/* Text Content */}
                  <div className="relative z-10 p-6 mt-[365px] bg-white dark:bg-gray-800 rounded-b-xl">
                    <h3 className="text-xl font-bold text-black dark:text-white mb-2">
                      {program.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      {program.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
  }  