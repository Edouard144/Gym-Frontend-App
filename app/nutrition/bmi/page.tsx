"use client"

import { useState } from "react"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calculator, TrendingUp, AlertCircle, CheckCircle } from "lucide-react"

export default function BMICalculatorPage() {
  const [height, setHeight] = useState("")
  const [weight, setWeight] = useState("")
  const [unit, setUnit] = useState("metric")
  const [bmi, setBmi] = useState<number | null>(null)
  const [category, setCategory] = useState("")

  const calculateBMI = () => {
    if (!height || !weight) return

    let heightInMeters: number
    let weightInKg: number

    if (unit === "metric") {
      heightInMeters = Number.parseFloat(height) / 100 // cm to meters
      weightInKg = Number.parseFloat(weight)
    } else {
      // Imperial: height in inches, weight in pounds
      heightInMeters = (Number.parseFloat(height) * 2.54) / 100 // inches to meters
      weightInKg = Number.parseFloat(weight) * 0.453592 // pounds to kg
    }

    const bmiValue = weightInKg / (heightInMeters * heightInMeters)
    setBmi(Math.round(bmiValue * 10) / 10)

    // Determine BMI category
    if (bmiValue < 18.5) {
      setCategory("Underweight")
    } else if (bmiValue < 25) {
      setCategory("Normal weight")
    } else if (bmiValue < 30) {
      setCategory("Overweight")
    } else {
      setCategory("Obese")
    }
  }

  const getBMIColor = (category: string) => {
    switch (category) {
      case "Underweight":
        return "text-blue-600"
      case "Normal weight":
        return "text-green-600"
      case "Overweight":
        return "text-yellow-600"
      case "Obese":
        return "text-red-600"
      default:
        return "text-gray-600"
    }
  }

  const getBMIIcon = (category: string) => {
    switch (category) {
      case "Normal weight":
        return <CheckCircle className="h-5 w-5 text-green-600" />
      default:
        return <AlertCircle className="h-5 w-5 text-yellow-600" />
    }
  }

  const bmiRanges = [
    { range: "Below 18.5", category: "Underweight", color: "bg-blue-100 text-blue-800" },
    { range: "18.5 - 24.9", category: "Normal weight", color: "bg-green-100 text-green-800" },
    { range: "25.0 - 29.9", category: "Overweight", color: "bg-yellow-100 text-yellow-800" },
    { range: "30.0 and above", category: "Obese", color: "bg-red-100 text-red-800" },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">BMI Calculator</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Calculate your Body Mass Index (BMI) to understand your weight status and get personalized recommendations
              for your fitness journey.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Calculator */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calculator className="h-5 w-5 mr-2" />
                  Calculate Your BMI
                </CardTitle>
                <CardDescription>Enter your height and weight to calculate your BMI</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="unit">Unit System</Label>
                  <Select value={unit} onValueChange={setUnit}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="metric">Metric (cm, kg)</SelectItem>
                      <SelectItem value="imperial">Imperial (ft/in, lbs)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="height">Height {unit === "metric" ? "(cm)" : "(inches)"}</Label>
                  <Input
                    id="height"
                    type="number"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    placeholder={unit === "metric" ? "e.g., 175" : "e.g., 69"}
                  />
                </div>

                <div>
                  <Label htmlFor="weight">Weight {unit === "metric" ? "(kg)" : "(lbs)"}</Label>
                  <Input
                    id="weight"
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    placeholder={unit === "metric" ? "e.g., 70" : "e.g., 154"}
                  />
                </div>

                <Button onClick={calculateBMI} className="w-full">
                  Calculate BMI
                </Button>

                {/* Results */}
                {bmi && (
                  <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-gray-900 mb-2">{bmi}</div>
                      <div className={`flex items-center justify-center space-x-2 ${getBMIColor(category)}`}>
                        {getBMIIcon(category)}
                        <span className="font-semibold">{category}</span>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* BMI Chart and Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2" />
                  BMI Categories
                </CardTitle>
                <CardDescription>Understanding BMI ranges and what they mean</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {bmiRanges.map((range, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg border">
                      <div>
                        <div className="font-medium">{range.range}</div>
                        <div className={`inline-block px-2 py-1 rounded text-sm ${range.color}`}>{range.category}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">Important Note</h4>
                  <p className="text-sm text-blue-800">
                    BMI is a useful screening tool, but it doesn't directly measure body fat. Factors like muscle mass,
                    bone density, and overall body composition can affect BMI results. Consult with our trainers for a
                    comprehensive assessment.
                  </p>
                </div>

                {bmi && category && (
                  <div className="mt-6 p-4 bg-orange-50 rounded-lg">
                    <h4 className="font-semibold text-orange-900 mb-2">Recommendations</h4>
                    <div className="text-sm text-orange-800">
                      {category === "Normal weight" && (
                        <p>Great job! Maintain your current weight through regular exercise and a balanced diet.</p>
                      )}
                      {category === "Underweight" && (
                        <p>Consider strength training and a nutrition plan to build healthy muscle mass.</p>
                      )}
                      {category === "Overweight" && (
                        <p>Focus on cardio exercises and portion control to reach a healthier weight range.</p>
                      )}
                      {category === "Obese" && (
                        <p>
                          We recommend consulting with our trainers and nutritionists for a comprehensive weight
                          management plan.
                        </p>
                      )}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
