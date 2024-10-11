import Link from "next/link"
import { usePathname } from "next/navigation"
import { Package2, Bell, Home, Users, LineChart, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function Sidebar() {
  const pathname = usePathname()

  const navItems = [
    { href: "/", icon: Home, label: "Dashboard" },
    { href: "/company", icon: Users, label: "Company" },
    { href: "/content", icon: LineChart, label: "Content" },
    { href: "/settings", icon: Settings, label: "Settings" },
  ]

  return (
    <div className="hidden border-r bg-white md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Package2 className="h-6 w-6 text-indigo-600" />
            <span className="text-indigo-600 text-lg">Pulser Challenge</span>
          </Link>
          <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
            <Bell className="h-4 w-4" />
            <span className="sr-only">Toggle notifications</span>
          </Button>
        </div>
        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 rounded-lg px-4 py-3 transition-all ${
                  pathname === item.href
                    ? "bg-indigo-50 text-indigo-600"
                    : "text-gray-500 hover:text-indigo-600 hover:bg-indigo-50"
                }`}
              >
                <item.icon className="h-5 w-5" />
                <span className="text-lg">{item.label}</span>
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-auto p-4">
          <Card>
            <CardHeader className="p-2 pt-0 md:p-4">
              <CardTitle>Upgrade to Pro</CardTitle>
              <CardDescription>
                Unlock all features and get unlimited access to our support team.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
              <Button size="sm" className="w-full bg-indigo-600 hover:bg-indigo-700">
                Upgrade
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}