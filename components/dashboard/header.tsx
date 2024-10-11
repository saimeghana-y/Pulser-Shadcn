import { Search, User, Share2 } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

interface HeaderProps {
  children?: React.ReactNode
}

export function Header({ children }: HeaderProps) {
  return (
    <header className="flex h-20 items-center gap-6 border-b bg-white px-6 lg:h-[80px] lg:px-8">
      {children}
      <div className="w-full flex-1 flex items-center justify-between">
        <form className="w-full md:w-2/3 lg:w-1/3">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <Input
              type="search"
              placeholder="Search pulsers..."
              className="w-full appearance-none text-base bg-gray-50 pl-10 py-3 shadow-none focus:ring-indigo-500"
            />
          </div>
        </form>
        <div className="flex gap-2 ml-2">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200"
          >
            <User className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200"
          >
            <Share2 className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}