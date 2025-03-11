import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ContactCTA() {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-primary text-primary-foreground">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">想了解更多？</h2>
        <p className="text-xl mb-8">我们随时欢迎您的咨询，为您解答关于入学和课程的任何问题。</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact">
            <Button size="lg" variant="outline">
              联系我们
            </Button>
          </Link>
          <Link href="/admissions">
            <Button size="lg" variant="secondary">
              申请入学
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

