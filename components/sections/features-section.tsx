import { Card, CardContent } from "@/components/ui/card"
import { Dumbbell, Users, Waves, Apple, Clock, Award } from "lucide-react"

const features = [
  {
    icon: Dumbbell,
    title: "State-of-the-Art Equipment",
    description: "Latest fitness equipment from top brands to maximize your workout efficiency.",
  },
  {
    icon: Users,
    title: "Expert Trainers",
    description: "Certified personal trainers to guide you through your fitness journey.",
  },
  {
    icon: Waves,
    title: "Premium Sauna",
    description: "Relax and recover in our luxury sauna facilities with various temperature options.",
  },
  {
    icon: Apple,
    title: "Nutrition Guidance",
    description: "Personalized meal plans and nutrition advice from certified dietitians.",
  },
  {
    icon: Clock,
    title: "24/7 Access",
    description: "Train on your schedule with round-the-clock gym access for members.",
  },
  {
    icon: Award,
    title: "Results Guaranteed",
    description: "Proven track record of helping members achieve their fitness goals.",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose FitZone Pro?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide everything you need to achieve your fitness goals in a supportive, professional environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="h-8 w-8 text-orange-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
