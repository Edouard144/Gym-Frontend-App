"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Navbar } from "@/components/layout/navbar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Calendar, Clock, Target, TrendingUp, Dumbbell, Waves } from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem("authToken")
    if (!token) {
      router.push("/login")
      return
    }
    setIsLoading(false)
  }, [router])

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>
  }

  const stats = [
    { title: "Workouts This Month", value: "12", icon: Dumbbell, change: "+3 from last month" },
    { title: "Sauna Sessions", value: "8", icon: Waves, change: "+2 from last month" },
    { title: "Calories Burned", value: "2,450", icon: TrendingUp, change: "+150 from last week" },
    { title: "Goal Progress", value: "75%", icon: Target, change: "On track" },
  ]

  const upcomingClasses = [
    { name: "HIIT Training", time: "10:00 AM", date: "Today", trainer: "Sarah Johnson" },
    { name: "Yoga Flow", time: "6:00 PM", date: "Tomorrow", trainer: "Mike Chen" },
    { name: "Strength Training", time: "8:00 AM", date: "Friday", trainer: "David Wilson" },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Welcome back, John!</h1>
            <p className="text-gray-600">Here's your fitness overview for today.</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <Card key={index}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                  <stat.icon className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <p className="text-xs text-muted-foreground">{stat.change}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Upcoming Classes */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  Upcoming Classes
                </CardTitle>
                <CardDescription>Your scheduled fitness classes</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingClasses.map((class_, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h4 className="font-semibold">{class_.name}</h4>
                        <p className="text-sm text-gray-600">with {class_.trainer}</p>
                        <p className="text-sm text-gray-500">
                          {class_.date} at {class_.time}
                        </p>
                      </div>
                      <Button size="sm" variant="outline">
                        <Clock className="h-4 w-4 mr-1" />
                        Reschedule
                      </Button>
                    </div>
                  ))}
                </div>
                <Button className="w-full mt-4" asChild>
                  <Link href="/classes">View All Classes</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Fitness Goals */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="h-5 w-5 mr-2" />
                  Fitness Goals
                </CardTitle>
                <CardDescription>Track your progress</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Weight Loss Goal</span>
                      <span className="text-sm text-gray-600">75%</span>
                    </div>
                    <Progress value={75} className="h-2" />
                    <p className="text-xs text-gray-500 mt-1">5 lbs remaining</p>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Strength Training</span>
                      <span className="text-sm text-gray-600">60%</span>
                    </div>
                    <Progress value={60} className="h-2" />
                    <p className="text-xs text-gray-500 mt-1">12 sessions completed</p>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Cardio Minutes</span>
                      <span className="text-sm text-gray-600">90%</span>
                    </div>
                    <Progress value={90} className="h-2" />
                    <p className="text-xs text-gray-500 mt-1">270/300 minutes this week</p>
                  </div>
                </div>
                <Button className="w-full mt-4" variant="outline" asChild>
                  <Link href="/nutrition">Update Goals</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button className="h-20 flex flex-col" variant="outline" asChild>
                <Link href="/classes">
                  <Calendar className="h-6 w-6 mb-2" />
                  Book Class
                </Link>
              </Button>
              <Button className="h-20 flex flex-col" variant="outline" asChild>
                <Link href="/sauna">
                  <Waves className="h-6 w-6 mb-2" />
                  Book Sauna
                </Link>
              </Button>
              <Button className="h-20 flex flex-col" variant="outline" asChild>
                <Link href="/nutrition/bmi">
                  <Target className="h-6 w-6 mb-2" />
                  BMI Calculator
                </Link>
              </Button>
              <Button className="h-20 flex flex-col" variant="outline" asChild>
                <Link href="/shop">
                  <Dumbbell className="h-6 w-6 mb-2" />
                  Shop Gear
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
