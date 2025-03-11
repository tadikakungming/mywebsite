import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function LatestNews() {
  const news = [
    {
      title: "2025年招生开始",
      date: "2024年12月1日",
      excerpt: "我们很高兴地宣布，2025学年的招生工作现已开始。欢迎家长们报名参加我们的开放日活动。",
      link: "/news/2025-admissions",
    },
    {
      title: "年度艺术展览",
      date: "2024年11月15日",
      excerpt: "我们的小艺术家们将在下个月展示他们的创意作品。诚邀所有家长和社区成员参加。",
      link: "/news/art-exhibition",
    },
    {
      title: "新增STEAM课程",
      date: "2024年10月20日",
      excerpt: "为了培养孩子们的科学思维和创新能力，我们将在下学期引入新的STEAM课程。",
      link: "/news/steam-program",
    },
  ]

  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-muted">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">最新消息</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{item.date}</p>
              </CardHeader>
              <CardContent>
                <p>{item.excerpt}</p>
              </CardContent>
              <CardFooter>
                <Link href={item.link}>
                  <Button variant="outline">阅读更多</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/news">
            <Button>查看所有新闻</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

