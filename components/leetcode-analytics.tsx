"use client"

import { Bar, BarChart, CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart"

// Sample data for LeetCode analytics
const problemsByDifficulty = [
  { name: "Easy", solved: 85, total: 120 },
  { name: "Medium", solved: 65, total: 150 },
  { name: "Hard", solved: 37, total: 80 },
]

const problemsByTopic = [
  { name: "Arrays", solved: 32 },
  { name: "Strings", solved: 28 },
  { name: "Linked Lists", solved: 22 },
  { name: "Trees", solved: 18 },
  { name: "Dynamic Programming", solved: 15 },
  { name: "Graphs", solved: 12 },
  { name: "Sorting", solved: 10 },
  { name: "Greedy", solved: 8 },
]

const progressData = [
  { date: "Jan", problems: 120 },
  { date: "Feb", problems: 135 },
  { date: "Mar", problems: 148 },
  { date: "Apr", problems: 160 },
  { date: "May", problems: 172 },
  { date: "Jun", problems: 187 },
]

export function LeetCodeAnalytics() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Problems by Difficulty</h3>
        <div className="h-[200px] w-full">
          <ChartContainer
            config={{
              solved: {
                label: "Solved",
                color: "hsl(var(--chart-1))",
              },
              total: {
                label: "Total",
                color: "hsl(var(--chart-2))",
              },
            }}
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={problemsByDifficulty}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip content={<ChartTooltipContent />} />
                <Bar dataKey="solved" fill="var(--color-solved)" />
                <Bar dataKey="total" fill="var(--color-total)" />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">Problems by Topic</h3>
        <div className="h-[200px] w-full">
          <ChartContainer
            config={{
              solved: {
                label: "Solved",
                color: "hsl(var(--chart-3))",
              },
            }}
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={problemsByTopic} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" width={120} />
                <Tooltip content={<ChartTooltipContent />} />
                <Bar dataKey="solved" fill="var(--color-solved)" />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">Progress Over Time</h3>
        <div className="h-[200px] w-full">
          <ChartContainer
            config={{
              problems: {
                label: "Problems Solved",
                color: "hsl(var(--chart-4))",
              },
            }}
          >
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={progressData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip content={<ChartTooltipContent />} />
                <Line
                  type="monotone"
                  dataKey="problems"
                  stroke="var(--color-problems)"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>
      </div>
    </div>
  )
}
