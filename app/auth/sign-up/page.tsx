"use client";

import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

export default function SignUpPage() {
  const [parentName, setParentName] = useState("");
  const [parentEmail, setParentEmail] = useState("");
  const [password, setPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleParentSignUp = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!termsAccepted) {
      alert("You must accept the terms and conditions to sign up.");
      return;
    }

    const parentData = {
      full_name: parentName,
      email: parentEmail,
      password: password, // Ensure this is included
    };    

    try {
      const response = await fetch("http://localhost:8000/parents/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(parentData),
      });

      if (response.ok) {
        alert("Parent signed up successfully!");
        // Reset the form fields
        setParentName("");
        setParentEmail("");
        setPassword("");
        setTermsAccepted(false);
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.detail || "Something went wrong."}`);
      }
    } catch (error: any) {
      alert(`Network error: ${error.message}`);
    }
  };

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
            <form
              className="space-y-6 bg-white shadow-md p-6 rounded-lg"
              onSubmit={handleParentSignUp}
            >
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
                  value={parentName}
                  onChange={(e) => setParentName(e.target.value)}
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
                  value={parentEmail}
                  onChange={(e) => setParentEmail(e.target.value)}
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              {/* Terms Checkbox */}
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="terms"
                  checked={termsAccepted}
                  onCheckedChange={(checked) => setTermsAccepted(!!checked)}
                  required
                />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Accept terms and conditions
                </label>
              </div>

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
              <div className="flex items-center space-x-2">
              <Checkbox id="terms" required />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
              Accept terms and conditions
              </label>
              </div>

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