"use client";

import { Table } from "@/components/ui/table";
import { useState } from "react";

export const TutorTuteeTable = ({ data }: { data: any[] }) => {
  const [sortConfig, setSortConfig] = useState<any>({ key: "tutee", direction: "asc" });

  const sortedData = data.sort((a, b) => {
    if (sortConfig.direction === "asc") {
      return a[sortConfig.key] > b[sortConfig.key] ? 1 : -1;
    } else {
      return a[sortConfig.key] < b[sortConfig.key] ? 1 : -1;
    }
  });

  const handleSort = (key: string) => {
    setSortConfig((prevConfig: any) => ({
      key,
      direction: prevConfig.direction === "asc" ? "desc" : "asc",
    }));
  };

  return (
    <Table>
      <thead>
        <tr className="text-center">
          <th onClick={() => handleSort("tutee")} className="cursor-pointer">Tutee Name</th>
          <th onClick={() => handleSort("tutor")} className="cursor-pointer">Tutor Name</th>
          <th onClick={() => handleSort("mode")} className="cursor-pointer">Mode</th>
          <th onClick={() => handleSort("completed")} className="cursor-pointer">Sessions Completed</th>
          <th onClick={() => handleSort("cancelled")} className="cursor-pointer">Sessions Cancelled</th>
          <th onClick={() => handleSort("tuteeNoShows")} className="cursor-pointer">Tutee No Shows</th>
          <th onClick={() => handleSort("tutorNoShows")} className="cursor-pointer">Tutor No Shows</th>
        </tr>
      </thead>
      <tbody>
        {sortedData.map((row, index) => (
          <tr key={index} className="text-center">
            <td>{row.tutee}</td>
            <td>{row.tutor}</td>
            <td>{row.mode}</td>
            <td>{row.completed}</td>
            <td>{row.cancelled}</td>
            <td>{row.tuteeNoShows}</td>
            <td>{row.tutorNoShows}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};