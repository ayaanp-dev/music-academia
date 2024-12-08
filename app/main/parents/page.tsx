"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
} from "@/components/ui/table";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogFooter, DialogTitle } from "@/components/ui/dialog";

export default function ParentDashboard() {
  const [students, setStudents] = useState([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentStudent, setCurrentStudent] = useState({ name: "", age: "", id: null });
  const [isEditMode, setIsEditMode] = useState(false);

  // Fetch students
  useEffect(() => {
    async function fetchStudents() {
      try {
        const response = await fetch("http://localhost:8000/students/");
        if (response.ok) {
          const data = await response.json();
          setStudents(data);
        } else {
          console.error("Failed to fetch students");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
    fetchStudents();
  }, []);

  // Handle Add/Edit student
  const handleSaveStudent = async () => {
    const url = isEditMode
      ? `http://localhost:8000/students/${currentStudent.id}/`
      : "http://localhost:8000/students/";
    const method = isEditMode ? "PUT" : "POST";

    try {
      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: currentStudent.name, age: currentStudent.age }),
      });

      if (response.ok) {
        const updatedStudent = await response.json();
        setStudents((prev) => {
          if (isEditMode) {
            return prev.map((s) => (s.id === updatedStudent.id ? updatedStudent : s));
          }
          return [...prev, updatedStudent];
        });
        setIsDialogOpen(false);
        setCurrentStudent({ name: "", age: "", id: null });
        setIsEditMode(false);
      } else {
        console.error("Failed to save student");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Handle delete student
  const handleDeleteStudent = async (id) => {
    try {
      const response = await fetch(`http://localhost:8000/students/${id}/`, {
        method: "DELETE",
      });

      if (response.ok) {
        setStudents((prev) => prev.filter((student) => student.id !== id));
      } else {
        console.error("Failed to delete student");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
        <h1 className="text-3xl font-bold text-center mb-8">Parent Dashboard</h1>

        {/* Add Student Button */}
        <Button
          onClick={() => {
            setIsEditMode(false);
            setIsDialogOpen(true);
            setCurrentStudent({ name: "", age: "", id: null });
          }}
          className="mb-6"
        >
          Add Student
        </Button>

        {/* Students Table */}
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="px-4 py-2">Name</TableHead>
              <TableHead className="px-4 py-2">Age</TableHead>
              <TableHead className="px-4 py-2">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {students.map((student) => (
              <TableRow key={student.id}>
                <TableCell className="px-4 py-2">{student.name}</TableCell>
                <TableCell className="px-4 py-2">{student.age}</TableCell>
                <TableCell className="px-4 py-2 flex space-x-4">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setCurrentStudent(student);
                      setIsEditMode(true);
                      setIsDialogOpen(true);
                    }}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleDeleteStudent(student.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* Dialog for Add/Edit */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{isEditMode ? "Edit Student" : "Add Student"}</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Student Name
                </label>
                <Input
                  type="text"
                  placeholder="Enter student's name"
                  value={currentStudent.name}
                  onChange={(e) =>
                    setCurrentStudent((prev) => ({ ...prev, name: e.target.value }))
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Age
                </label>
                <Input
                  type="number"
                  placeholder="Enter student's age"
                  value={currentStudent.age}
                  onChange={(e) =>
                    setCurrentStudent((prev) => ({ ...prev, age: e.target.value }))
                  }
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleSaveStudent}>
                {isEditMode ? "Save Changes" : "Add Student"}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}