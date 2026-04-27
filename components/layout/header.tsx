"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/shared/language-switcher";

export function Header() {
  const t = useTranslations();
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block">
              SamarkandRent
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link
              href="/search"
              className={`transition-colors hover:text-foreground/80 ${
                pathname === "/search" ? "text-foreground" : "text-foreground/60"
              }`}
            >
              {t("search")}
            </Link>
            <Link
              href="/map"
              className={`transition-colors hover:text-foreground/80 ${
                pathname === "/map" ? "text-foreground" : "text-foreground/60"
              }`}
            >
              {t("map")}
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            {/* Search bar placeholder */}
          </div>
          <nav className="flex items-center space-x-2">
            <LanguageSwitcher />
            <Button variant="ghost" asChild>
              <Link href="/login">{t("login")}</Link>
            </Button>
            <Button asChild>
              <Link href="/register">{t("register")}</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}