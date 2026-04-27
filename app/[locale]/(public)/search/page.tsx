import { Suspense } from "react";
import { getTranslations } from "next-intl/server";
import { SearchFilters } from "@/components/listing/search-filters";
import { ListingGrid } from "@/components/listing/listing-grid";
import { MapToggle } from "@/components/listing/map-toggle";

interface SearchPageProps {
  searchParams: Promise<{
    type?: string;
    district?: string;
    checkIn?: string;
    checkOut?: string;
    guests?: string;
    minPrice?: string;
    maxPrice?: string;
    amenities?: string;
    sort?: string;
  }>;
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const t = await getTranslations();
  const params = await searchParams;

  return (
    <div className="min-h-screen bg-background">
      {/* Header with filters */}
      <div className="border-b bg-background sticky top-0 z-40">
        <div className="container py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">{t("search")}</h1>
              <p className="text-muted-foreground">
                34 {t("propertiesFound")}
              </p>
            </div>
            <MapToggle />
          </div>
        </div>
      </div>

      <div className="container py-6">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <SearchFilters initialFilters={params} />
          </div>

          {/* Results */}
          <div className="lg:col-span-3">
            <Suspense fallback={<div>Loading...</div>}>
              <ListingGrid filters={params} />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}