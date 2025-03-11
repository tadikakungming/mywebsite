import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function FeaturedPrograms() {
  const programs = [
    {
      title: "语言启蒙",
      description: "通过游戏和互动活动培养孩子的语言能力，包括中文和英语。",
      icon: "🗣️",
    },
    {
      title: "数学思维",
      description: "培养孩子的逻辑思维和问题解决能力，为未来的学习打下基础。",
      icon: "🧮",
    },
    {
      title: "艺术创作",
      description: "通过绘画、手工和音乐等活动激发孩子的创造力和艺术表达。",
      icon: "🎨",
    },
    {
      title: "体能活动",
      description: "通过各种运动游戏促进孩子的身体协调能力和团队合作精神。",
      icon: "⚽",
    },
  ]

  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-background">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">特色课程</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <span className="text-4xl mr-2">{program.icon}</span>
                  {program.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{program.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

