import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function VirtualTour() {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-muted">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">虚拟校园导览</h2>
        <p className="text-lg mb-8">通过我们的虚拟导览，探索斗湖公民幼稚园的现代化设施和温馨环境。</p>
        <div className="aspect-video mb-8">
          {/* 这里可以嵌入360度全景图或视频 */}
          <img src="/virtual-tour-preview.jpg" alt="虚拟导览预览" className="w-full h-full object-cover rounded-lg" />
        </div>
        <Link href="/virtual-tour">
          <Button size="lg">开始虚拟导览</Button>
        </Link>
      </div>
    </section>
  )
}

