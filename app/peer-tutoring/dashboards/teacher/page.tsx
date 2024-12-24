import { TutorTuteeTable } from "@/components/peer-tutoring/teacher/TutorTuteeTable";
import { Card } from "@/components/ui/card";
import { DashboardChart } from "@/components/peer-tutoring/teacher/DashboardChart";
import { ReportIssueDialog } from "@/components/ReportIssueDialog";

export default function Dashboard() {
  const data = [
    {
      tutee: "John Doe",
      tutor: "Jane Smith",
      mode: "Virtual",
      completed: 12,
      cancelled: 2,
      tuteeNoShows: 1,
      tutorNoShows: 0,
    },
  ];

  const chartData = [{ label: "Jan", value: 10 }, { label: "Feb", value: 20 }, { label: "Mar", value: 15 }];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <header className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Teacher Dashboard</h1>
          <ReportIssueDialog />
        </header>

        {/* Overview Cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <h2 className="text-lg font-semibold text-gray-700">Most Active Pair</h2>
            <p className="text-xl font-bold text-gray-900">Jane Smith & John Doe</p>
            <p className="text-sm text-gray-500">24 sessions completed</p>
          </Card>
          <Card>
            <h2 className="text-lg font-semibold text-gray-700">Sessions Scheduled</h2>
            <p className="text-2xl font-bold text-gray-900">78</p>
          </Card>
          <Card>
            <h2 className="text-lg font-semibold text-gray-700">Sessions Cancelled</h2>
            <p className="text-2xl font-bold text-gray-900">6</p>
          </Card>
        </section>

        {/* Dashboard Chart */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Session Statistics</h2>
          <DashboardChart data={chartData} />
        </div>

        {/* Session Table */}
        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-4">Tutor-Tutee Sessions</h2>
          <TutorTuteeTable data={data} />
        </section>
      </div>
    </div>
  );
}
