"use client"

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart"

// Sample data for GitHub analytics
const contributionData = [
  { month: "Jan", commits: 45, prs: 12, issues: 8 },
  { month: "Feb", commits: 52, prs: 15, issues: 10 },
  { month: "Mar", commits: 48, prs: 10, issues: 7 },
  { month: "Apr", commits: 70, prs: 18, issues: 12 },
  { month: "May", commits: 65, prs: 20, issues: 15 },
  { month: "Jun", commits: 90, prs: 25, issues: 18 },
]

const techStackData = [
  { name: "JavaScript", value: 40 },
  { name: "TypeScript", value: 30 },
  { name: "Python", value: 15 },
  { name: "Java", value: 10 },
  { name: "Other", value: 5 },
]

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"]

export function GitHubAnalytics() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Contribution Activity</h3>
        <div className="h-[200px] w-full">
          <ChartContainer
            config={{
              commits: {
                label: "Commits",
                color: "hsl(var(--chart-1))",
              },
              prs: {
                label: "Pull Requests",
                color: "hsl(var(--chart-2))",
              },
              issues: {
                label: "Issues",
                color: "hsl(var(--chart-3))",
              },
            }}
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={contributionData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip content={<ChartTooltipContent />} />
                <Bar dataKey="commits" fill="var(--color-commits)" />
                <Bar dataKey="prs" fill="var(--color-prs)" />
                <Bar dataKey="issues" fill="var(--color-issues)" />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">Tech Stack Distribution</h3>
        <div className="h-[200px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={techStackData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {techStackData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}
