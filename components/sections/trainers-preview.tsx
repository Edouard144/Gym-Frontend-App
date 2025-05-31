import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"
import Link from "next/link"

const trainers = [
  {
    name: "Sarah Johnson",
    specialty: "HIIT & Cardio",
    experience: "8 years",
    rating: 4.9,
    image: "/placeholder.svg?height=300&width=300",
    certifications: ["NASM-CPT", "HIIT Specialist"],
  },
  {
    name: "Mike Chen",
    specialty: "Yoga & Mindfulness",
    experience: "6 years",
    rating: 4.8,
    image: "/placeholder.svg?height=300&width=300",
    certifications: ["RYT-500", "Meditation Teacher"],
  },
  {
    name: "David Wilson",
    specialty: "Strength Training",
    experience: "10 years",
    rating: 4.9,
    image: "/placeholder.svg?height=300&width=300",
    certifications: ["CSCS", "Powerlifting Coach"],
  },
]

export function TrainersPreview() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Expert Trainers</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our certified trainers are here to guide you every step of the way
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {trainers.map((trainer, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <img
                    src={trainer.image || "/placeholder.svg"}
                    alt={trainer.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{trainer.name}</h3>
                <p className="text-orange-600 font-medium mb-2">{trainer.specialty}</p>
                <div className="flex items-center justify-center mb-3">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="ml-1 text-sm font-medium">{trainer.rating}</span>
                  <span className="ml-2 text-sm text-gray-600">({trainer.experience} exp)</span>
                </div>
                <div className="flex flex-wrap gap-2 justify-center mb-4">
                  {trainer.certifications.map((cert, certIndex) => (
                    <Badge key={certIndex} variant="secondary" className="text-xs">
                      {cert}
                    </Badge>
                  ))}
                </div>
                <Button variant="outline" className="w-full">
                  View Profile
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" asChild>
            <Link href="/trainers">Meet All Trainers</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
