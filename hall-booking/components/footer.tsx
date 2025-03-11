import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-muted py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">斗湖公民幼稚园</h3>
            <p className="text-muted-foreground mb-4">为孩子们提供优质的早期教育，培养未来的领袖。</p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">快速链接</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary">
                  关于我们
                </Link>
              </li>
              <li>
                <Link href="/curriculum" className="text-muted-foreground hover:text-primary">
                  教育课程
                </Link>
              </li>
              <li>
                <Link href="/admissions" className="text-muted-foreground hover:text-primary">
                  招生信息
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-muted-foreground hover:text-primary">
                  新闻动态
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">家长资源</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/parents/handbook" className="text-muted-foreground hover:text-primary">
                  家长手册
                </Link>
              </li>
              <li>
                <Link href="/parents/faq" className="text-muted-foreground hover:text-primary">
                  常见问题
                </Link>
              </li>
              <li>
                <Link href="/parents/events" className="text-muted-foreground hover:text-primary">
                  家长活动
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">联系我们</h3>
            <address className="not-italic text-muted-foreground">
              <p>斗湖市中心区，邮编91007</p>
              <p>电话：+60 169235330</p>
              <p>邮箱：info@tawaukindergarten.edu.my</p>
            </address>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} 斗湖公民幼稚园. 保留所有权利.</p>
        </div>
      </div>
    </footer>
  )
}

