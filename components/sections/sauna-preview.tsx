import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Waves, Thermometer, Clock, Users } from "lucide-react"
import Link from "next/link"

const saunaServices = [
  {
    name: "Traditional Finnish Sauna",
    description: "Classic dry heat sauna experience with temperatures up to 90°C",
    temperature: "80-90°C",
    capacity: "8 people",
    duration: "15-20 min sessions",
    benefits: ["Muscle relaxation", "Stress relief", "Improved circulation"],
  },
  {
    name: "Infrared Sauna",
    description: "Gentle heat therapy using infrared light for deep tissue warming",
    temperature: "50-60°C",
    capacity: "4 people",
    duration: "30-45 min sessions",
    benefits: ["Deep tissue healing", "Pain relief", "Detoxification"],
  },
  {
    name: "Steam Room",
    description: "High humidity environment for respiratory and skin benefits",
    temperature: "40-50°C",
    capacity: "10 people",
    duration: "10-15 min sessions",
    benefits: ["Respiratory health", "Skin hydration", "Muscle recovery"],
  },
]

export function SaunaPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Premium Sauna Experience</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Relax, recover, and rejuvenate in our state-of-the-art sauna facilities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {saunaServices.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Waves className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>{service.name}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <Thermometer className="h-4 w-4 mr-2" />
                    {service.temperature}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="h-4 w-4 mr-2" />
                    {service.capacity}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="h-4 w-4 mr-2" />
                    {service.duration}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-sm mb-2">Benefits:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button className="w-full">Book Session</Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" asChild>
            <Link href="/sauna">Explore All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
