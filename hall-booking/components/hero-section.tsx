import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative bg-primary text-primary-foreground">
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/hero-image.jpg')",
          filter: "brightness(0.7)",
        }}
      ></div>
      <div className="container mx-auto px-4 py-24 md:py-32 relative z-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">斗湖公民幼稚园</h1>
          <p className="text-xl md:text-2xl mb-8">根据国家教育哲理栽培卓越学生</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/admissions">
              <Button size="lg" variant="default">
                申请入学
              </Button>
            </Link>
            <Link href="/virtual-tour">
              <Button size="lg" variant="outline">
                虚拟校园导览
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

