"use client"

import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function ReportIssueDialog() {
  const [issueDescription, setIssueDescription] = useState("");

  const handleSubmit = () => {
    // Add your logic to handle the form submission (e.g., API call)
    console.log("Issue Submitted:", issueDescription);
    setIssueDescription("");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Report Technical Issue</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Report Technical Issue</DialogTitle>
          <DialogDescription>
            Fill out the form below to report any issues you are experiencing.
          </DialogDescription>
        </DialogHeader>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <div className="space-y-4">
            <Input
              placeholder="Subject"
              required
              className="w-full"
            />
            <Textarea
              placeholder="Describe the issue..."
              value={issueDescription}
              onChange={(e) => setIssueDescription(e.target.value)}
              required
              className="w-full"
            />
          </div>
          <DialogFooter>
            <Button type="submit">Submit</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
