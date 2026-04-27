"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

interface SearchFiltersProps {
  initialFilters: Record<string, string | undefined>;
}

export function SearchFilters({ initialFilters }: SearchFiltersProps) {
  const t = useTranslations();
  const [filters, setFilters] = useState(initialFilters);

  const propertyTypes = [
    { key: "apartments", value: "apartment" },
    { key: "houses", value: "house" },
    { key: "rooms", value: "room" },
    { key: "guesthouses", value: "guesthouse" },
  ];

  const districts = [
    { key: "registanDistrict", value: "registan" },
    { key: "oldCity", value: "old-city" },
    { key: "newSamarkand", value: "new-samarkand" },
    { key: "afrosiab", value: "afrosiab" },
    { key: "universityBoulevard", value: "university" },
    { key: "siyob", value: "siyob" },
  ];

  const amenities = [
    "WiFi",
    "Air Conditioning",
    "Kitchen",
    "Parking",
    "Washing Machine",
    "TV",
    "Balcony",
    "Pet Friendly",
  ];

  return (
    <div className="space-y-6">
      {/* Price Range */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">{t("price")}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-2">
            <Input
              type="number"
              placeholder="Min"
              value={filters.minPrice || ""}
              onChange={(e) =>
                setFilters({ ...filters, minPrice: e.target.value })
              }
            />
            <Input
              type="number"
              placeholder="Max"
              value={filters.maxPrice || ""}
              onChange={(e) =>
                setFilters({ ...filters, maxPrice: e.target.value })
              }
            />
          </div>
        </CardContent>
      </Card>

      {/* Property Type */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">{t("propertyType")}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {propertyTypes.map((type) => (
            <div key={type.value} className="flex items-center space-x-2">
              <Checkbox
                id={type.value}
                checked={filters.type?.includes(type.value)}
                onCheckedChange={(checked: boolean) => {
                  const currentTypes = filters.type?.split(",") || [];
                  const newTypes = checked
                    ? [...currentTypes, type.value]
                    : currentTypes.filter((t) => t !== type.value);
                  setFilters({ ...filters, type: newTypes.join(",") });
                }}
              />
              <label
                htmlFor={type.value}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {t(type.key)}
              </label>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Bedrooms & Bathrooms */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">{t("bedroomsBathrooms")}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="text-sm font-medium">{t("bedrooms")}</label>
            <Input
              type="number"
              min="0"
              value={filters.bedrooms || ""}
              onChange={(e) =>
                setFilters({ ...filters, bedrooms: e.target.value })
              }
            />
          </div>
          <div>
            <label className="text-sm font-medium">{t("bathrooms")}</label>
            <Input
              type="number"
              min="0"
              value={filters.bathrooms || ""}
              onChange={(e) =>
                setFilters({ ...filters, bathrooms: e.target.value })
              }
            />
          </div>
        </CardContent>
      </Card>

      {/* Amenities */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">{t("amenities")}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {amenities.map((amenity) => (
            <div key={amenity} className="flex items-center space-x-2">
              <Checkbox
                id={amenity}
                checked={filters.amenities?.includes(amenity)}
                onCheckedChange={(checked: boolean) => {
                  const currentAmenities = filters.amenities?.split(",") || [];
                  const newAmenities = checked
                    ? [...currentAmenities, amenity]
                    : currentAmenities.filter((a) => a !== amenity);
                  setFilters({ ...filters, amenities: newAmenities.join(",") });
                }}
              />
              <label
                htmlFor={amenity}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {amenity}
              </label>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* District */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">{t("district")}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {districts.map((district) => (
            <div key={district.value} className="flex items-center space-x-2">
              <Checkbox
                id={district.value}
                checked={filters.district?.includes(district.value)}
                onCheckedChange={(checked: boolean) => {
                  const currentDistricts = filters.district?.split(",") || [];
                  const newDistricts = checked
                    ? [...currentDistricts, district.value]
                    : currentDistricts.filter((d) => d !== district.value);
                  setFilters({ ...filters, district: newDistricts.join(",") });
                }}
              />
              <label
                htmlFor={district.value}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {t(district.key)}
              </label>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Actions */}
      <div className="space-y-2">
        <Button className="w-full">{t("apply")}</Button>
        <Button variant="outline" className="w-full">
          {t("reset")}
        </Button>
      </div>
    </div>
  );
}