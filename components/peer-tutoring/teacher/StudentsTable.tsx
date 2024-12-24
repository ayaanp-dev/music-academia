import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

export function StudentsTable({ data }: { data: Array<{ name: string; role: string; sessionsCompleted: number }> }) {
  return (
    <div className="space-y-4">
      {/* Add Student Button */}
      <AddStudentDialog />

      {/* Students Table */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Sessions Completed</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((student, index) => (
            <TableRow key={index}>
              <TableCell>{student.name}</TableCell>
              <TableCell>{student.role}</TableCell>
              <TableCell>{student.sessionsCompleted}</TableCell>
              <TableCell className="text-right">
                <ManageStudentDialog student={student} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

/* Dialog for Adding a New Student */
function AddStudentDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add New Student</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add a New Student</DialogTitle>
        </DialogHeader>
        <form>
          <div className="space-y-4">
            <Input placeholder="Student Name" />
            <Input placeholder="Role (Tutor/Tutee)" />
          </div>
          <DialogFooter>
            <Button type="submit">Add Student</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

/* Dialog for Managing a Student (Edit/Delete) */
function ManageStudentDialog({ student }: { student: { name: string; role: string; sessionsCompleted: number } }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Manage</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Manage {student.name}</DialogTitle>
        </DialogHeader>
        <form>
          <div className="space-y-4">
            <Input placeholder="Student Name" defaultValue={student.name} />
            <Input placeholder="Role (Tutor/Tutee)" defaultValue={student.role} />
          </div>
          <DialogFooter className="flex justify-between">
            <Button type="button" variant="destructive">
              Delete Student
            </Button>
            <Button type="submit">Save Changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}