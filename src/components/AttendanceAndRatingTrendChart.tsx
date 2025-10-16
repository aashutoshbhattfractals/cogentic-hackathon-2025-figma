
import React from "react";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from "recharts";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Calendar, Clock } from "lucide-react";

// Import the correct trend data used in App.tsx
import data from "./data-for-trend-chart";

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return `${d.getMonth() + 1}/${d.getDate()}`;
}

export function AttendanceAndRatingTrendChart() {
  return (
    <Card className="p-6">
      <h3 className="mb-4">Attendance & Rating Trend</h3>
      <div className="space-y-3" style={{height: "350px"}}>
          <ResponsiveContainer>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="date"
                tickFormatter={formatDate}
                minTickGap={20}
              />
              <YAxis yAxisId="left" label={{ value: "Attendance", angle: -90, position: "insideLeft" }} />
              <YAxis yAxisId="right" orientation="right" label={{ value: "Rating", angle: 90, position: "insideRight" }} domain={[6, 9]} />
              <Tooltip labelFormatter={formatDate} />
              <Legend />
              <Line yAxisId="left" type="monotone" dataKey="attendance" stroke="#3B82F6" name="Attendance" dot={false} />
              <Line yAxisId="right" type="monotone" dataKey="rating" stroke="#F59E0B" name="Rating" dot={false} />
            </LineChart>
          </ResponsiveContainer>
      </div>
      </Card>
  );
}