import { Button } from "@/components/ui/button";

export default function AboutUs() {
    const aboutItems = [
      {
        title: "Our Story",
        description:
          "Founded with a mission to make music education accessible to everyone, our journey has been built on a passion for teaching and community.",
        image: "/landing/our_story.webp",
        link: "/about/our-story",
      },
      {
        title: "Our Mission & Vision",
        description:
          "We envision a world where every student, regardless of their background, can access high-quality music education to help them grow.",
        image: "/landing/our_mission.webp",
        link: "/about/our-mission",
      },
      {
        title: "Our People",
        description:
          "Our team is made up of passionate educators, mentors, and volunteers dedicated to making a positive impact in the world through music.",
        image: "/landing/our_people.webp",
        link: "/about/our-people",
      },
    ];
  
    return (
        <section className="py-20 bg-white dark:bg-gray-900" id="about">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold text-black dark:text-white">
                About Us
              </h2>
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mt-4">
                Learn more about our journey, mission, and the amazing people behind our work.
              </p>
            </div>
    
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {aboutItems.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-between rounded-lg bg-gray-50 dark:bg-gray-800 p-6 shadow-lg transition-transform transform hover:scale-105"
                >
                  {/* Image */}
                  <div className="mb-6 w-full overflow-hidden rounded-md">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-80 object-cover rounded-md"
                    />
                  </div>
    
                  {/* Text Content */}
                  <h3 className="text-xl font-semibold text-black dark:text-white mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-center mb-4">
                    {item.description}
                  </p>
    
                  {/* Learn More Button */}
                  <Button variant="ghost">Learn More</Button>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
  }  