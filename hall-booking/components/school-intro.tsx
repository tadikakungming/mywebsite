import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function SchoolIntro() {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-background">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">欢迎来到斗湖公民幼稚园</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-lg mb-6">
              斗湖公民幼稚园是一所充满活力和创新的教育机构，致力于为4-6岁的儿童提供优质的早期教育。
              我们的目标是通过全面的课程和充满爱心的环境，培养孩子们的好奇心、创造力和社交能力。
            </p>
            <ul className="space-y-2">
              <li>✓ 拥有170名学生的温馨社区</li>
              <li>✓ 经验丰富的教师团队</li>
              <li>✓ 现代化的教学设施</li>
              <li>✓ 丰富多彩的课外活动</li>
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>双语教学</CardTitle>
              </CardHeader>
              <CardContent>中文和英语并重，为孩子的未来打下坚实基础。</CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>品德教育</CardTitle>
              </CardHeader>
              <CardContent>培养孩子良好的品格和正确的价值观。</CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>创意艺术</CardTitle>
              </CardHeader>
              <CardContent>激发孩子的想象力和艺术潜能。</CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>体能发展</CardTitle>
              </CardHeader>
              <CardContent>通过各种运动活动促进身体协调和健康。</CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

