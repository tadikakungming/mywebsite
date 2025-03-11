import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function Testimonials() {
  const testimonials = [
    {
      name: "张先生",
      organization: "斗湖商会",
      comment:
        "学校大礼堂的设施非常完善，我们的年度商会在这里举办得非常成功。工作人员专业且热情，给我们提供了很大的帮助。",
      rating: 5,
    },
    {
      name: "李女士",
      organization: "社区艺术协会",
      comment: "音响和灯光系统非常专业，为我们的演出提供了完美的技术支持。预订流程简单，价格合理。",
      rating: 5,
    },
    {
      name: "王教授",
      organization: "斗湖大学",
      comment: "我们在这里举办了学术研讨会，场地宽敞明亮，设备先进，参会者反馈非常好。",
      rating: 4,
    },
  ]

  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-muted">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">用户评价</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">听听其他组织对我们大礼堂的评价</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-background">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <p className="mb-4 italic">"{testimonial.comment}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.organization}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

