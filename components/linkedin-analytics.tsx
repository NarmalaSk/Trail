"use client"

import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart"

// Sample data for LinkedIn analytics
const connectionData = [
  { month: "Jan", connections: 420 },
  { month: "Feb", connections: 450 },
  { month: "Mar", connections: 480 },
  { month: "Apr", connections: 510 },
  { month: "May", connections: 540 },
  { month: "Jun", connections: 573 },
]

const engagementData = [
  { month: "Jan", posts: 5, likes: 120, comments: 45 },
  { month: "Feb", posts: 7, likes: 180, comments: 65 },
  { month: "Mar", posts: 4, likes: 150, comments: 40 },
  { month: "Apr", posts: 8, likes: 220, comments: 75 },
  { month: "May", posts: 6, likes: 190, comments: 60 },
  { month: "Jun", posts: 9, likes: 250, comments: 85 },
]

export function LinkedInAnalytics() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Connection Growth</h3>
        <div className="h-[200px] w-full">
          <ChartContainer
            config={{
              connections: {
                label: "Connections",
                color: "hsl(var(--chart-1))",
              },
            }}
          >
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={connectionData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip content={<ChartTooltipContent />} />
                <Area
                  type="monotone"
                  dataKey="connections"
                  stroke="var(--color-connections)"
                  fill="var(--color-connections)"
                  fillOpacity={0.2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">Post Engagement</h3>
        <div className="h-[200px] w-full">
          <ChartContainer
            config={{
              posts: {
                label: "Posts",
                color: "hsl(var(--chart-2))",
              },
              likes: {
                label: "Likes",
                color: "hsl(var(--chart-3))",
              },
              comments: {
                label: "Comments",
                color: "hsl(var(--chart-4))",
              },
            }}
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={engagementData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip content={<ChartTooltipContent />} />
                <Legend />
                <Bar dataKey="posts" fill="var(--color-posts)" />
                <Bar dataKey="likes" fill="var(--color-likes)" />
                <Bar dataKey="comments" fill="var(--color-comments)" />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>
      </div>
    </div>
  )
}
