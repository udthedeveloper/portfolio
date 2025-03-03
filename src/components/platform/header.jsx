import Navigation from "@/components/ui/navigation";
import { Button } from "@/components/ui/button";
import {
  Navbar as NavbarComponent,
  NavbarLeft,
  NavbarRight,
} from "@/components/ui/navbar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import LaunchUI from "@/components/logos/launch-ui";
import logo from "../../assets/logo.png";
import logo2 from "../../assets/ud.png";
import { useSelector } from "react-redux";
import { generateMailToLink } from "../../lib/utils";

export default function Header() {
  const theme = useSelector((state) => state.theme.mode);
  return (
    <header className="sticky top-0 z-50 -mb-4 px-4 pb-4">
      <div className="fade-bottom absolute left-0 h-24 w-full"></div>
      <div className="relative mx-auto max-w-container">
        <NavbarComponent>
          <NavbarLeft>
            <a href="/" className="flex items-center gap-2 text-xl font-bold">
              <img
                src={theme === 1 ? logo : logo2}
                alt=""
                className={`h-6 w-6 rounded-full`}
              />
              udthedeveloper
            </a>
            <Navigation />
          </NavbarLeft>
          <NavbarRight>
            <Button
              variant="default"
              asChild
              className={`rounded-full ${
                theme === 1 ? "bg-white text-black" : ""
              }`}
            >
              <a href={generateMailToLink()}>Connect</a>
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="shrink-0 md:hidden"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="grid gap-6 text-lg font-medium">
                  <a
                    href="/"
                    className="flex items-center gap-2 text-xl font-bold"
                  >
                    <span>udthedeveloper</span>
                  </a>
                  <a
                    href="/"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Getting Started
                  </a>
                  <a
                    href="/"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Workspace
                  </a>
                  <a
                    href="/"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Services
                  </a>
                  <a
                    href="/"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Achievements
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
          </NavbarRight>
        </NavbarComponent>
      </div>
    </header>
  );
}
