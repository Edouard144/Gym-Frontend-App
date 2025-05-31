import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Jessica Martinez",
    role: "Marketing Manager",
    content:
      "FitZone Pro transformed my fitness journey. The trainers are incredibly knowledgeable and the sauna sessions help me recover faster than ever.",
    rating: 5,
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Robert Chen",
    role: "Software Engineer",
    content:
      "The 24/7 access is perfect for my schedule. I love the variety of classes and the equipment is always well-maintained.",
    rating: 5,
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Amanda Thompson",
    role: "Teacher",
    content:
      "The nutrition guidance and meal plans have been game-changers. I've never felt stronger or more confident in my body.",
    rating: 5,
    image: "/placeholder.svg?height=80&width=80",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Members Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from real people who transformed their lives at FitZone Pro
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
