import Link from "next/link"
import { Calendar, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function FeaturedEvents() {
  const events = [
    {
      title: "年度教育研讨会",
      date: "2025年3月15日",
      time: "09:00 - 17:00",
      image: "/placeholder.svg?height=200&width=300",
      description: "由教育部门组织的年度教育研讨会，探讨现代教育方法和技术。",
    },
    {
      title: "斗湖青年音乐节",
      date: "2025年4月22日",
      time: "18:30 - 22:00",
      image: "/placeholder.svg?height=200&width=300",
      description: "展示当地青年音乐才华的盛会，包括各类音乐表演和比赛。",
    },
    {
      title: "社区艺术展览",
      date: "2025年5月10日",
      time: "10:00 - 16:00",
      image: "/placeholder.svg?height=200&width=300",
      description: "展示斗湖本地艺术家作品的展览，促进文化交流。",
    },
  ]

  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-background">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">即将举办的活动</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">了解在我们大礼堂即将举办的精彩活动</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>{event.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center mb-2">
                  <Calendar className="h-4 w-4 mr-2 text-primary" />
                  <span className="text-sm">{event.date}</span>
                </div>
                <div className="flex items-center mb-4">
                  <Clock className="h-4 w-4 mr-2 text-primary" />
                  <span className="text-sm">{event.time}</span>
                </div>
                <p className="text-muted-foreground">{event.description}</p>
              </CardContent>
              <CardFooter>
                <Link href="/events" className="w-full">
                  <Button variant="outline" className="w-full">
                    了解更多
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/events">
            <Button variant="default">查看所有活动</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

