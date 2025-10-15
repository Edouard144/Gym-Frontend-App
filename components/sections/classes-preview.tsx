import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, Users } from "lucide-react"
import Link from "next/link"

const featuredClasses = [
  {
    name: "HIIT Training",
    description: "High-intensity interval training for maximum results",
    duration: "45 min",
    capacity: "20 people",
    image: "/hiit_training.jpg?height=200&width=300",
  },
  {
    name: "Yoga Flow",
    description: "Gentle flowing sequences for flexibility and mindfulness",
    duration: "60 min",
    capacity: "25 people",
    image: "/yoga_flow.jpg?height=200&width=300",
  },
  {
    name: "Strength Training",
    description: "Build muscle and increase strength progressively",
    duration: "50 min",
    capacity: "15 people",
    image: "/strength_training.jpg?height=200&width=300",
  },
]

export function ClassesPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Popular Classes</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our expert-led fitness classes designed to challenge and inspire you
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {featuredClasses.map((class_, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-200">
                <img
                  src={class_.image || "/map.jpg?height=200&width=300"}
                  alt={class_.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>{class_.name}</CardTitle>
                <CardDescription>{class_.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {class_.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    {class_.capacity}
                  </div>
                </div>
                <Button className="w-full">Book Now</Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" asChild>
            <Link href="/classes">View All Classes</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
