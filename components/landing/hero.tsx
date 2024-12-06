import { Button } from "@/components/ui/button";
import HeroVideoDialog from "@/components/ui/hero-video-dialog";
import ShimmerButton from "@/components/ui/shimmer-button";

export default function Hero() {
  return (
    <section className="relative py-20 lg:py-32 bg-white dark:bg-black">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="lg:w-1/2 space-y-8">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-black dark:text-white">
              Music Academia
            </h1>
            <p className="text-lg md:text-2xl font-medium text-gray-700 dark:text-gray-300">
              Making music education accessible for every student, everywhere.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <ShimmerButton className="shadow-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300">
                <span className="text-sm md:text-lg font-semibold text-white">
                  Get Started
                </span>
              </ShimmerButton>
              <Button
                size="lg"
                variant="outline"
                className="text-lg border-black dark:border-white text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300"
              >
                Watch Video
              </Button>
            </div>
          </div>
          {/* Right Content */}
          <div className="lg:w-1/2 relative">
            <HeroVideoDialog
              className="hidden dark:block"
              animationStyle="from-center"
              videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
              thumbnailSrc="https://startup-template-sage.vercel.app/hero-dark.png"
              thumbnailAlt="Hero Video"
            />
            <HeroVideoDialog
              className="dark:hidden block"
              animationStyle="from-center"
              videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
              thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
              thumbnailAlt="Hero Video"
            />
          </div>
        </div>
      </div>

      {/* Subtle Background Accents */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-gray-200 dark:bg-gray-800 blur-3xl opacity-30"></div>
        <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-gray-200 dark:bg-gray-800 blur-3xl opacity-30"></div>
      </div>
    </section>
  );
}
