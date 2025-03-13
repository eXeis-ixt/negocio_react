import * as React from "react"
import { Menu } from 'lucide-react'

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Link } from "@inertiajs/react"
import AppLogoIcon from "../app-logo-icon"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Neogcio", href: route('portfolio') },
  { name: "Team Register", href: route('team.register') },

]

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 20
      setIsScrolled(scrolled)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4">
      <header
        className={`relative w-full max-w-[90rem] rounded-full border border-white/10 ${
          isScrolled
          ? "bg-white/10 supports-[backdrop-filter]:bg-white/10 backdrop-blur-xl"
          : "bg-transparent"
        } transition-all duration-300`}
      >
        <div className="container flex h-14 items-center justify-between px-8">
          <div className="flex gap-6 md:gap-10">
            <Link prefetch className="flex items-center space-x-2" href={route('home')}>
              <AppLogoIcon />
            </Link>
            <nav className="hidden gap-6 md:flex">
              {navigation.map((item) => (
                <Link prefetch
                  key={item.name}
                  href={item.href}
                  className="flex items-center text-sm font-medium text-muted-foreground hover:text-primary"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <a href='https://www.facebook.com/communic.ibaju' target="_blank">
            <Button  className="hidden md:flex">
              Communic
            </Button>
            </a>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" className="px-2 md:hidden" aria-label="Open Menu">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="rounded-l-2xl">
                <div className="flex flex-col gap-4 py-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-sm font-medium text-muted-foreground hover:text-primary"
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Button variant="ghost">Sign In</Button>
                  <Button>Get Started</Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </div>
  )
}

