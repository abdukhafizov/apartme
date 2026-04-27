import { getTranslations } from "next-intl/server";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SearchBar } from "@/components/shared/search-bar";

export default async function Home() {
  const t = await getTranslations();

  const districts = [
    { key: "registanDistrict", image: "/districts/registan.jpg" },
    { key: "oldCity", image: "/districts/old-city.jpg" },
    { key: "newSamarkand", image: "/districts/new-samarkand.jpg" },
    { key: "afrosiab", image: "/districts/afrosiab.jpg" },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[70vh] bg-gradient-to-r from-primary/20 to-secondary/20">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex h-full items-center justify-center">
          <div className="container text-center text-white">
            <h1 className="mb-6 text-4xl font-bold md:text-6xl">
              {t("home")}
            </h1>
            <p className="mb-8 text-xl md:text-2xl">
              Discover amazing places to stay in Samarkand
            </p>
            <div className="mx-auto max-w-2xl">
              <SearchBar />
            </div>
          </div>
        </div>
      </section>

      {/* Category Strip */}
      <section className="border-b bg-background py-6">
        <div className="container">
          <div className="flex justify-center space-x-8">
            {[
              { key: "apartments", href: "/search?type=apartment" },
              { key: "houses", href: "/search?type=house" },
              { key: "rooms", href: "/search?type=room" },
              { key: "guesthouses", href: "/search?type=guesthouse" },
              { key: "daily", href: "/search?term=daily" },
              { key: "longTerm", href: "/search?term=long-term" },
            ].map((category) => (
              <Link
                key={category.key}
                href={category.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                {t(category.key)}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Listings */}
      <section className="py-12">
        <div className="container">
          <h2 className="mb-8 text-3xl font-bold">Featured Properties</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* Placeholder cards - will be replaced with real data */}
            {Array.from({ length: 8 }).map((_, i) => (
              <Card key={i} className="overflow-hidden">
                <div className="aspect-square bg-muted" />
                <CardContent className="p-4">
                  <h3 className="font-semibold">Beautiful Apartment</h3>
                  <p className="text-sm text-muted-foreground">Samarkand</p>
                  <p className="text-sm font-medium">$50/night</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Explore Districts */}
      <section className="bg-muted/50 py-12">
        <div className="container">
          <h2 className="mb-8 text-3xl font-bold">Explore Districts</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {districts.map((district) => (
              <Link key={district.key} href={`/search?district=${district.key}`}>
                <Card className="overflow-hidden transition-transform hover:scale-105">
                  <div className="aspect-square bg-muted" />
                  <CardContent className="p-4">
                    <h3 className="font-semibold">{t(district.key)}</h3>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-12">
        <div className="container text-center">
          <h2 className="mb-8 text-3xl font-bold">How it Works</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div>
              <div className="mb-4 text-4xl">🔍</div>
              <h3 className="mb-2 text-xl font-semibold">Search</h3>
              <p className="text-muted-foreground">
                Find the perfect place in Samarkand
              </p>
            </div>
            <div>
              <div className="mb-4 text-4xl">📅</div>
              <h3 className="mb-2 text-xl font-semibold">Book</h3>
              <p className="text-muted-foreground">
                Reserve your dates instantly
              </p>
            </div>
            <div>
              <div className="mb-4 text-4xl">🏠</div>
              <h3 className="mb-2 text-xl font-semibold">Stay</h3>
              <p className="text-muted-foreground">
                Enjoy your stay in beautiful Samarkand
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-12 text-primary-foreground">
        <div className="container text-center">
          <h2 className="mb-4 text-3xl font-bold">Ready to host?</h2>
          <p className="mb-8 text-xl">
            Join thousands of hosts in Samarkand
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/host">Become a Host</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}