import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function JoinMailingList() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-8">
          Join Our Mailing List
        </h2>
        <p className="text-lg md:text-xl mb-10">
          Stay updated with the latest news, events, and exclusive opportunities from Music Academia.
        </p>

        <form className="max-w-xl mx-auto space-y-6">
          {/* Email Input */}
          <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-6 sm:space-y-0">
            <Input
              type="email"
              placeholder="Enter your email"
              required
              className="w-full sm:w-2/3 py-4 px-6 border-gray-300 focus:ring-2 focus:ring-gray-500 rounded-xl text-lg"
            />
            <Button
              type="submit"
              className="w-full sm:w-auto py-4 px-8 bg-black text-white rounded-xl text-lg hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
            >
              Subscribe
            </Button>
          </div>
        </form>

        <p className="mt-8 text-sm text-gray-400">
          By subscribing, you agree to receive occasional updates from us. You can unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}