"use client"

import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart"

// Sample data for Twitter analytics
const followerData = [
  { month: "Jan", followers: 850 },
  { month: "Feb", followers: 920 },
  { month: "Mar", followers: 980 },
  { month: "Apr", followers: 1050 },
  { month: "May", followers: 1120 },
  { month: "Jun", followers: 1200 },
]

const engagementData = [
  { month: "Jan", tweets: 15, likes: 320, retweets: 85 },
  { month: "Feb", tweets: 18, likes: 380, retweets: 95 },
  { month: "Mar", tweets: 12, likes: 290, retweets: 70 },
  { month: "Apr", tweets: 20, likes: 420, retweets: 110 },
  { month: "May", tweets: 16, likes: 350, retweets: 90 },
  { month: "Jun", tweets: 22, likes: 480, retweets: 125 },
]

export function TwitterAnalytics() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Follower Growth</h3>
        <div className="h-[200px] w-full">
          <ChartContainer
            config={{
              followers: {
                label: "Followers",
                color: "hsl(var(--chart-1))",
              },
            }}
          >
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={followerData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip content={<ChartTooltipContent />} />
                <Area
                  type="monotone"
                  dataKey="followers"
                  stroke="var(--color-followers)"
                  fill="var(--color-followers)"
                  fillOpacity={0.2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">Tweet Engagement</h3>
        <div className="h-[200px] w-full">
          <ChartContainer
            config={{
              tweets: {
                label: "Tweets",
                color: "hsl(var(--chart-2))",
              },
              likes: {
                label: "Likes",
                color: "hsl(var(--chart-3))",
              },
              retweets: {
                label: "Retweets",
                color: "hsl(var(--chart-4))",
              },
            }}
          >
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={engagementData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip content={<ChartTooltipContent />} />
                <Legend />
                <Line type="monotone" dataKey="tweets" stroke="var(--color-tweets)" strokeWidth={2} />
                <Line type="monotone" dataKey="likes" stroke="var(--color-likes)" strokeWidth={2} />
                <Line type="monotone" dataKey="retweets" stroke="var(--color-retweets)" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>
      </div>
    </div>
  )
}
