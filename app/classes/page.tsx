"use client"

import { useState } from "react"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Clock, Users, Calendar, Search, Filter } from "lucide-react"

const classes = [
  {
    id: 1,
    name: "HIIT Training",
    description: "High-intensity interval training for maximum calorie burn",
    instructor: "Sarah Johnson",
    duration: "45 min",
    capacity: 20,
    enrolled: 15,
    difficulty: "Advanced",
    category: "Cardio",
    schedule: [
      { day: "Monday", time: "6:00 AM" },
      { day: "Wednesday", time: "6:00 AM" },
      { day: "Friday", time: "6:00 AM" },
    ],
  },
  {
    id: 2,
    name: "Yoga Flow",
    description: "Gentle flowing yoga sequences for flexibility and mindfulness",
    instructor: "Mike Chen",
    duration: "60 min",
    capacity: 25,
    enrolled: 18,
    difficulty: "Beginner",
    category: "Yoga",
    schedule: [
      { day: "Tuesday", time: "7:00 PM" },
      { day: "Thursday", time: "7:00 PM" },
      { day: "Saturday", time: "9:00 AM" },
    ],
  },
  {
    id: 3,
    name: "Strength Training",
    description: "Build muscle and increase strength with progressive overload",
    instructor: "David Wilson",
    duration: "50 min",
    capacity: 15,
    enrolled: 12,
    difficulty: "Intermediate",
    category: "Strength",
    schedule: [
      { day: "Monday", time: "8:00 AM" },
      { day: "Wednesday", time: "8:00 AM" },
      { day: "Friday", time: "8:00 AM" },
    ],
  },
  {
    id: 4,
    name: "Spin Class",
    description: "High-energy cycling workout with motivating music",
    instructor: "Lisa Rodriguez",
    duration: "45 min",
    capacity: 30,
    enrolled: 25,
    difficulty: "Intermediate",
    category: "Cardio",
    schedule: [
      { day: "Tuesday", time: "6:30 PM" },
      { day: "Thursday", time: "6:30 PM" },
      { day: "Sunday", time: "10:00 AM" },
    ],
  },
  {
    id: 5,
    name: "Pilates",
    description: "Core-focused workout improving posture and flexibility",
    instructor: "Emma Thompson",
    duration: "55 min",
    capacity: 20,
    enrolled: 16,
    difficulty: "Beginner",
    category: "Pilates",
    schedule: [
      { day: "Monday", time: "5:30 PM" },
      { day: "Wednesday", time: "5:30 PM" },
      { day: "Friday", time: "5:30 PM" },
    ],
  },
  {
    id: 6,
    name: "Boxing Fitness",
    description: "Non-contact boxing workout for cardio and strength",
    instructor: "Marcus Johnson",
    duration: "50 min",
    capacity: 18,
    enrolled: 14,
    difficulty: "Advanced",
    category: "Cardio",
    schedule: [
      { day: "Tuesday", time: "7:00 AM" },
      { day: "Thursday", time: "7:00 AM" },
      { day: "Saturday", time: "11:00 AM" },
    ],
  },
]

const categories = ["All", "Cardio", "Strength", "Yoga", "Pilates"]
const difficulties = ["All", "Beginner", "Intermediate", "Advanced"]

export default function ClassesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedDifficulty, setSelectedDifficulty] = useState("All")

  const filteredClasses = classes.filter((class_) => {
    const matchesSearch =
      class_.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      class_.instructor.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All" || class_.category === selectedCategory
    const matchesDifficulty = selectedDifficulty === "All" || class_.difficulty === selectedDifficulty

    return matchesSearch && matchesCategory && matchesDifficulty
  })

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-100 text-green-800"
      case "Intermediate":
        return "bg-yellow-100 text-yellow-800"
      case "Advanced":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-16">
        {/* Header */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Fitness Classes</h1>
            <p className="text-gray-600 max-w-2xl">
              Join our expert-led fitness classes designed to help you reach your goals. From high-intensity workouts to
              relaxing yoga sessions, we have something for everyone.
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search classes or instructors..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full md:w-48">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Difficulty" />
              </SelectTrigger>
              <SelectContent>
                {difficulties.map((difficulty) => (
                  <SelectItem key={difficulty} value={difficulty}>
                    {difficulty}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Classes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredClasses.map((class_) => (
              <Card key={class_.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl">{class_.name}</CardTitle>
                    <Badge className={getDifficultyColor(class_.difficulty)}>{class_.difficulty}</Badge>
                  </div>
                  <CardDescription>{class_.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="h-4 w-4 mr-2" />
                      Instructor: {class_.instructor}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="h-4 w-4 mr-2" />
                      Duration: {class_.duration}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="h-4 w-4 mr-2" />
                      Capacity: {class_.enrolled}/{class_.capacity} enrolled
                    </div>

                    <div className="mt-4">
                      <h4 className="font-semibold text-sm mb-2">Schedule:</h4>
                      <div className="space-y-1">
                        {class_.schedule.map((session, index) => (
                          <div key={index} className="flex items-center text-sm text-gray-600">
                            <Calendar className="h-3 w-3 mr-2" />
                            {session.day} at {session.time}
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button className="w-full mt-4" disabled={class_.enrolled >= class_.capacity}>
                      {class_.enrolled >= class_.capacity ? "Class Full" : "Book Class"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredClasses.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No classes found matching your criteria.</p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchTerm("")
                  setSelectedCategory("All")
                  setSelectedDifficulty("All")
                }}
                className="mt-4"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  )
}
