import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

export default function SignUpPage() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Sign Up
        </h1>

        {/* Tabs */}
        <Tabs defaultValue="parent" className="w-full">
          {/* Tab List */}
          <TabsList className="flex justify-center mb-6">
            <TabsTrigger value="parent" className="w-1/2">
              Parent Sign-Up
            </TabsTrigger>
            <TabsTrigger value="teacher" className="w-1/2">
              Teacher Sign-Up
            </TabsTrigger>
          </TabsList>

          {/* Parent Sign-Up Form */}
          <TabsContent value="parent">
            <form className="space-y-6 bg-white shadow-md p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-center">Parent Sign-Up</h2>
              
              {/* Parent's Full Name */}
              <div>
                <label
                  htmlFor="parent-name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Parent's Full Name
                </label>
                <Input
                  id="parent-name"
                  type="text"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              {/* Parent's Email */}
              <div>
                <label
                  htmlFor="parent-email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Parent's Email Address
                </label>
                <Input
                  id="parent-email"
                  type="email"
                  placeholder="Enter your email"
                  required
                />
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Password
                </label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  required
                />
              </div>

              {/* Terms Checkbox */}
              <Checkbox id="agree-terms" required>
                <span className="ml-2 text-sm text-gray-600">
                  I agree to Music Academia's{" "}
                  <a href="/terms" className="text-blue-500 underline">
                    terms and conditions
                  </a>{" "}
                  and{" "}
                  <a href="/privacy" className="text-blue-500 underline">
                    privacy policy
                  </a>.
                </span>
              </Checkbox>

              {/* Submit Button */}
              <Button type="submit" className="w-full">
                Sign Up as Parent
              </Button>
            </form>
          </TabsContent>

          {/* Teacher Sign-Up Form */}
          <TabsContent value="teacher">
            <form className="space-y-6 bg-white shadow-md p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-center">Teacher Sign-Up</h2>
              
              {/* Teacher's Full Name */}
              <div>
                <label
                  htmlFor="teacher-name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Teacher's Full Name
                </label>
                <Input
                  id="teacher-name"
                  type="text"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              {/* Teacher's Email */}
              <div>
                <label
                  htmlFor="teacher-email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Teacher's Email Address
                </label>
                <Input
                  id="teacher-email"
                  type="email"
                  placeholder="Enter your email"
                  required
                />
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Password
                </label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  required
                />
              </div>

              {/* Terms Checkbox */}
              <Checkbox id="agree-terms" required>
                <span className="ml-2 text-sm text-gray-600">
                  I agree to Music Academia's{" "}
                  <a href="/terms" className="text-blue-500 underline">
                    terms and conditions
                  </a>{" "}
                  and{" "}
                  <a href="/privacy" className="text-blue-500 underline">
                    privacy policy
                  </a>.
                </span>
              </Checkbox>

              {/* Submit Button */}
              <Button type="submit" className="w-full">
                Sign Up as Teacher
              </Button>
            </form>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}