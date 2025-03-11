import { CalendarCheck, ClipboardCheck, CreditCard, CheckCircle } from "lucide-react"

export default function BookingSteps() {
  const steps = [
    {
      icon: <CalendarCheck className="h-12 w-12" />,
      title: "选择日期",
      description: "浏览日历，查看可用日期和时间段。",
    },
    {
      icon: <ClipboardCheck className="h-12 w-12" />,
      title: "填写申请",
      description: "提供活动详情和联系信息。",
    },
    {
      icon: <CreditCard className="h-12 w-12" />,
      title: "支付定金",
      description: "通过安全支付系统支付预订定金。",
    },
    {
      icon: <CheckCircle className="h-12 w-12" />,
      title: "确认预订",
      description: "收到确认邮件，预订成功。",
    },
  ]

  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-background">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">预订流程</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          我们简化了预订流程，只需几个简单步骤，即可完成大礼堂的预订
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="text-primary mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2">
                  <div className="h-1 w-8 bg-primary"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

