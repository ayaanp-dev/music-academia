"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // Updated import
import { Button } from "@/components/ui/button";

export default function VerificationPage() {
  const [verificationCode, setVerificationCode] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const handleVerify = async () => {
    try {
      const response = await fetch("/api/verify-code", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code: verificationCode.trim() }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        router.push("/peer-tutoring/signup"); // This will work with next/navigation
      } else {
        setErrorMessage(data.message || "Invalid verification code. Please try again.");
      }
    } catch (error) {
      setErrorMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <section className="bg-white dark:bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-lg max-w-lg mx-auto">
          <h2 className="text-2xl font-bold text-center text-black dark:text-white mb-4">
            Peer Tutoring Portal Verification
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-center mb-6">
            This portal is exclusively for teachers and students at participating schools. Enter your verification code below to proceed.
          </p>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Enter Verification Code"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
              className="w-full p-3 border rounded-md dark:bg-gray-700 dark:text-white border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errorMessage && (
              <p className="text-red-500 text-sm">{errorMessage}</p>
            )}
            <Button
              onClick={handleVerify}
              className="w-full text-white py-3 rounded-md hover:bg-blue-700 transition-all"
            >
              Verify Code
            </Button>
          </div>
          <div className="mt-8 text-center">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              If you are a music teacher at a participating school and do not have a code, please
              <a
                href="/contact"
                className="text-blue-600 dark:text-blue-400 underline ml-1"
              >
                contact us
              </a>
              .
            </p>
            <a
              href="/"
              className="text-blue-600 dark:text-blue-400 underline"
            >
              Return to Home Page
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
