"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Star } from "lucide-react";

interface ListingGridProps {
  filters: Record<string, string | undefined>;
}

// Mock data - replace with real API call
const mockListings = [
  {
    id: "1",
    title: "Beautiful Apartment in Registan",
    district: "registanDistrict",
    price: 50,
    rating: 4.8,
    reviews: 24,
    image: "/placeholder.jpg",
    bedrooms: 2,
    bathrooms: 1,
  },
  {
    id: "2",
    title: "Cozy Room near University",
    district: "universityBoulevard",
    price: 25,
    rating: 4.6,
    reviews: 12,
    image: "/placeholder.jpg",
    bedrooms: 1,
    bathrooms: 1,
  },
  // Add more mock listings...
];

export function ListingGrid({ filters }: ListingGridProps) {
  const t = useTranslations();

  return (
    <div className="space-y-6">
      {/* Sort options */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          {mockListings.length} {t("propertiesFound")}
        </p>
        <select className="rounded-md border px-3 py-1 text-sm">
          <option>{t("recommended")}</option>
          <option>{t("priceLowHigh")}</option>
          <option>{t("priceHighLow")}</option>
          <option>{t("newest")}</option>
          <option>{t("topRated")}</option>
        </select>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {mockListings.map((listing) => (
          <Link key={listing.id} href={`/property/${listing.id}`}>
            <Card className="overflow-hidden transition-transform hover:scale-105">
              <div className="relative">
                <div className="aspect-square bg-muted" />
                <button className="absolute right-3 top-3 rounded-full bg-white p-2 shadow-md">
                  <Heart className="h-4 w-4" />
                </button>
              </div>
              <CardContent className="p-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <Badge variant="secondary" className="mb-2">
                      {t(listing.district)}
                    </Badge>
                    <h3 className="font-semibold line-clamp-2">
                      {listing.title}
                    </h3>
                    <div className="mt-1 flex items-center text-sm text-muted-foreground">
                      <Star className="mr-1 h-4 w-4 fill-current text-yellow-400" />
                      {listing.rating} ({listing.reviews} {t("reviews")})
                    </div>
                    <div className="mt-2 text-sm text-muted-foreground">
                      {listing.bedrooms} {t("bedrooms")} • {listing.bathrooms}{" "}
                      {t("bathrooms")}
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  <span className="text-lg font-semibold">
                    ${listing.price}
                  </span>
                  <span className="text-muted-foreground"> / night</span>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center">
        <div className="flex space-x-2">
          <button className="rounded-md border px-3 py-2 text-sm hover:bg-muted">
            {t("previous")}
          </button>
          <button className="rounded-md bg-primary px-3 py-2 text-sm text-primary-foreground">
            1
          </button>
          <button className="rounded-md border px-3 py-2 text-sm hover:bg-muted">
            2
          </button>
          <button className="rounded-md border px-3 py-2 text-sm hover:bg-muted">
            3
          </button>
          <button className="rounded-md border px-3 py-2 text-sm hover:bg-muted">
            {t("next")}
          </button>
        </div>
      </div>
    </div>
  );
}