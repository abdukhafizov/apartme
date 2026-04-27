import Link from "next/link";
import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations();

  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="space-y-3">
            <h4 className="text-sm font-medium">SamarkandRent</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/about" className="hover:text-foreground">
                  {t("about")}
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-foreground">
                  {t("blog")}
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-foreground">
                  {t("faq")}
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="text-sm font-medium">{t("support")}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/help" className="hover:text-foreground">
                  {t("helpCenter")}
                </Link>
              </li>
              <li>
                <Link href="/safety" className="hover:text-foreground">
                  {t("safety")}
                </Link>
              </li>
              <li>
                <Link href="/cancellation" className="hover:text-foreground">
                  {t("cancellation")}
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="text-sm font-medium">{t("hosting")}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/host" className="hover:text-foreground">
                  {t("becomeHost")}
                </Link>
              </li>
              <li>
                <Link href="/host/resources" className="hover:text-foreground">
                  {t("hostResources")}
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="text-sm font-medium">{t("legal")}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/privacy" className="hover:text-foreground">
                  {t("privacy")}
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-foreground">
                  {t("terms")}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-center text-sm text-muted-foreground">
              © 2024 SamarkandRent. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                Facebook
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                Instagram
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                Twitter
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}