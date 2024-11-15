import { Link } from "react-router-dom";
import { CitySearch } from "./city-search";
import { useTheme } from "@/context/theme-provider";

export function Header() {
  const { theme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-2">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
      <Link to={"/"}>
          {theme === "dark" ? (
            <p className="text-white font-bold text-3xl">CLIMO</p>
          ) : (
            <p className="text-zinc-900 font-bold text-3xl">CLIMO</p>
          )}
        </Link>

        <div className="flex gap-4">
          <CitySearch />

        </div>
      </div>
    </header>
  );
}
