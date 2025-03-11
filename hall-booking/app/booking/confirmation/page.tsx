import Link from "next/link"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function ConfirmationPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-md mx-auto text-center">
        <div className="flex justify-center mb-6">
          <CheckCircle className="h-16 w-16 text-green-500" />
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-center">预订成功！</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>您的大礼堂预订申请已成功提交。我们将在24小时内审核您的申请，并通过电子邮件发送确认信息。</p>

            <div className="bg-muted p-4 rounded-lg text-left">
              <h3 className="font-semibold mb-2">预订详情</h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="text-muted-foreground">预订编号:</div>
                <div>BK-20250310-001</div>

                <div className="text-muted-foreground">活动名称:</div>
                <div>社区艺术展览</div>

                <div className="text-muted-foreground">日期:</div>
                <div>2025年3月15日</div>

                <div className="text-muted-foreground">时间:</div>
                <div>下午 (13:00 - 17:00)</div>

                <div className="text-muted-foreground">总费用:</div>
                <div>RM 1,500</div>

                <div className="text-muted-foreground">已付定金:</div>
                <div>RM 500</div>
              </div>
            </div>

            <div className="text-sm text-muted-foreground">
              预订确认邮件已发送至您提供的电子邮箱。如有任何疑问，请联系我们的管理员。
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-2">
            <Link href="/dashboard" className="w-full">
              <Button className="w-full">查看我的预订</Button>
            </Link>
            <Link href="/" className="w-full">
              <Button variant="outline" className="w-full">
                返回首页
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

