import { Music, Projector, Wifi, Mic2, Thermometer, Accessibility } from "lucide-react"

export default function FacilityFeatures() {
  const features = [
    {
      icon: <Projector className="h-10 w-10" />,
      title: "高清投影系统",
      description: "配备4K超高清投影仪和大型屏幕，适合各类演示和放映。",
    },
    {
      icon: <Music className="h-10 w-10" />,
      title: "专业音响设备",
      description: "环绕立体声系统，提供清晰的音质体验，适合音乐会和演讲。",
    },
    {
      icon: <Mic2 className="h-10 w-10" />,
      title: "舞台和灯光",
      description: "专业舞台设计和可编程灯光系统，满足各类表演需求。",
    },
    {
      icon: <Wifi className="h-10 w-10" />,
      title: "高速网络",
      description: "覆盖全场的高速WiFi，支持直播和在线互动。",
    },
    {
      icon: <Thermometer className="h-10 w-10" />,
      title: "舒适环境",
      description: "中央空调系统，全年保持舒适温度。",
    },
    {
      icon: <Accessibility className="h-10 w-10" />,
      title: "无障碍设施",
      description: "完善的无障碍设施，确保所有人都能便捷使用。",
    },
  ]

  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-muted/50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">设施与服务</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-background rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-primary mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

