"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const ReportForm = () => {
  const [issue, setIssue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Call API to submit the issue
    alert("Reported Issue: " + issue);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        value={issue}
        onChange={(e) => setIssue(e.target.value)}
        placeholder="Describe the technical issue here"
      />
      <Button type="submit" className="w-full">Submit Report</Button>
    </form>
  );
};
