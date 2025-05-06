"use client"

import type React from "react"

import { useState } from "react"
import { Calendar, Github, Linkedin, Loader2, Twitter, Code2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"

export function UserProfile() {
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate saving profile
    setTimeout(() => {
      setIsLoading(false)
    }, 1500)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Personal Information */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Personal Information</h3>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="first-name">First name</Label>
            <Input id="first-name" defaultValue="John" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="last-name">Last name</Label>
            <Input id="last-name" defaultValue="Doe" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" defaultValue="john@example.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="profession">Profession</Label>
            <Select defaultValue="software-engineer">
              <SelectTrigger id="profession">
                <SelectValue placeholder="Select your profession" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="software-engineer">Software Engineer</SelectItem>
                <SelectItem value="designer">Designer</SelectItem>
                <SelectItem value="marketing">Marketing</SelectItem>
                <SelectItem value="finance">Finance</SelectItem>
                <SelectItem value="student">Student</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="bio">Bio</Label>
          <Textarea
            id="bio"
            defaultValue="Full-stack developer with 5 years of experience. Passionate about building scalable web applications and learning new technologies."
            rows={4}
          />
        </div>
      </div>

      <Separator />

      {/* Career Goals */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Career Goals</h3>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="current-goal">Current Goal</Label>
            <Select defaultValue="skill-improvement">
              <SelectTrigger id="current-goal">
                <SelectValue placeholder="Select your current goal" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="job-search">Find a new job</SelectItem>
                <SelectItem value="skill-improvement">Improve technical skills</SelectItem>
                <SelectItem value="networking">Grow professional network</SelectItem>
                <SelectItem value="personal-brand">Build personal brand</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="deadline">Deadline</Label>
            <div className="flex">
              <Input id="deadline" type="date" defaultValue="2023-12-31" />
              <Button type="button" variant="outline" size="icon" className="ml-2">
                <Calendar className="h-4 w-4" />
                <span className="sr-only">Calendar</span>
              </Button>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="goal-description">Goal Description</Label>
          <Textarea
            id="goal-description"
            defaultValue="Master React and Next.js to build more complex web applications. Complete at least 200 LeetCode problems to improve problem-solving skills."
            rows={3}
          />
        </div>
      </div>

      <Separator />

      {/* Connected Platforms */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Connected Platforms</h3>
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Github className="h-5 w-5" />
                  <span className="font-medium">GitHub</span>
                </div>
                <Button variant="outline" size="sm">
                  Connected
                </Button>
              </div>
              <div className="mt-2">
                <Input defaultValue="github.com/johndoe" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Linkedin className="h-5 w-5" />
                  <span className="font-medium">LinkedIn</span>
                </div>
                <Button variant="outline" size="sm">
                  Connected
                </Button>
              </div>
              <div className="mt-2">
                <Input defaultValue="linkedin.com/in/johndoe" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Twitter className="h-5 w-5" />
                  <span className="font-medium">Twitter</span>
                </div>
                <Button variant="outline" size="sm">
                  Connected
                </Button>
              </div>
              <div className="mt-2">
                <Input defaultValue="twitter.com/johndoe" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Code2 className="h-5 w-5" />
                  <span className="font-medium">LeetCode</span>
                </div>
                <Button variant="outline" size="sm">
                  Connected
                </Button>
              </div>
              <div className="mt-2">
                <Input defaultValue="leetcode.com/johndoe" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="flex justify-end">
        <Button type="submit" disabled={isLoading}>
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Saving...
            </>
          ) : (
            "Save Changes"
          )}
        </Button>
      </div>
    </form>
  )
}
