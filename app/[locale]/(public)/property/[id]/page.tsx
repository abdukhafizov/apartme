import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, MapPin, Users, Bed, Bath, Wifi } from "lucide-react";

interface PropertyPageProps {
  params: Promise<{ locale: string; id: string }>;
}

// Mock data - replace with API call
const mockProperty = {
  id: "1",
  titleRu: "Красивая квартира в Регистане",
  titleEn: "Beautiful Apartment in Registan",
  titleUz: "Registonda chiroyli kvartira",
  descRu: "Просторная квартира в историческом центре Самарканда...",
  descEn: "Spacious apartment in the historic center of Samarkand...",
  descUz: "Samarqandning tarixiy markazida keng kvartira...",
  pricePerNight: 50,
  maxGuests: 4,
  bedrooms: 2,
  bathrooms: 1,
  district: "registanDistrict",
  address: "Registan Square, Samarkand",
  photos: ["/placeholder.jpg", "/placeholder.jpg"],
  amenities: ["WiFi", "Air Conditioning", "Kitchen"],
  host: {
    name: "Aziz",
    avatar: "/avatar.jpg",
    isVerified: true,
    bio: "Local host with 5 years experience",
  },
  averageRating: 4.8,
  reviewCount: 24,
};

export async function generateMetadata({ params }: PropertyPageProps) {
  const { locale, id } = await params;
  const t = await getTranslations();

  // In real app, fetch property data
  const property = mockProperty;

  const title = locale === "ru" ? property.titleRu :
                locale === "uz" ? property.titleUz :
                property.titleEn;

  return {
    title: `${title} - SamarkandRent`,
    description: `Book this ${property.bedrooms} bedroom apartment in ${t(property.district)} for $${property.pricePerNight}/night`,
    openGraph: {
      title,
      description: `Book this ${property.bedrooms} bedroom apartment in ${t(property.district)} for $${property.pricePerNight}/night`,
      images: property.photos,
    },
  };
}

export default async function PropertyPage({ params }: PropertyPageProps) {
  const { locale, id } = await params;
  const t = await getTranslations();

  // In real app, fetch property data
  const property = mockProperty;

  if (!property) {
    notFound();
  }

  const title = locale === "ru" ? property.titleRu :
                locale === "uz" ? property.titleUz :
                property.titleEn;

  const description = locale === "ru" ? property.descRu :
                      locale === "uz" ? property.descUz :
                      property.descEn;

  return (
    <div className="container py-8">
      {/* Photo Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-8">
        <div className="aspect-square bg-muted rounded-lg" />
        <div className="grid grid-cols-2 gap-2">
          <div className="aspect-square bg-muted rounded-lg" />
          <div className="aspect-square bg-muted rounded-lg" />
          <div className="aspect-square bg-muted rounded-lg" />
          <div className="aspect-square bg-muted rounded-lg" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Header */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <Badge>{t(property.district)}</Badge>
              <Button variant="ghost" size="sm">
                ❤️
              </Button>
            </div>
            <h1 className="text-3xl font-bold mb-2">{title}</h1>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Star className="w-4 h-4 fill-current text-yellow-400 mr-1" />
                {property.averageRating} ({property.reviewCount} {t("reviews")})
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-1" />
                {property.address}
              </div>
            </div>
          </div>

          {/* Key Info */}
          <div className="flex items-center space-x-6 py-4 border-y">
            <div className="flex items-center">
              <Users className="w-5 h-5 mr-2" />
              <span>{property.maxGuests} {t("guests")}</span>
            </div>
            <div className="flex items-center">
              <Bed className="w-5 h-5 mr-2" />
              <span>{property.bedrooms} {t("bedrooms")}</span>
            </div>
            <div className="flex items-center">
              <Bath className="w-5 h-5 mr-2" />
              <span>{property.bathrooms} {t("bathrooms")}</span>
            </div>
          </div>

          {/* Host Info */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-muted rounded-full" />
                <div className="flex-1">
                  <h3 className="font-semibold">{property.host.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {property.host.bio}
                  </p>
                </div>
                <Button>{t("sendMessage")}</Button>
              </div>
            </CardContent>
          </Card>

          {/* Description */}
          <div>
            <h2 className="text-xl font-semibold mb-4">{t("description")}</h2>
            <p className="text-muted-foreground">{description}</p>
          </div>

          {/* Amenities */}
          <div>
            <h2 className="text-xl font-semibold mb-4">{t("amenities")}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {property.amenities.map((amenity) => (
                <div key={amenity} className="flex items-center">
                  <Wifi className="w-5 h-5 mr-2" />
                  <span>{amenity}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Reviews */}
          <div>
            <h2 className="text-xl font-semibold mb-4">{t("reviews")}</h2>
            <div className="space-y-4">
              {/* Mock reviews */}
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-8 h-8 bg-muted rounded-full" />
                    <span className="font-medium">John Doe</span>
                    <div className="flex">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < 4 ? "fill-current text-yellow-400" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Great place! Very clean and the host was very responsive.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Booking Card */}
        <div className="lg:col-span-1">
          <Card className="sticky top-4">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-bold">${property.pricePerNight}</span>
                <span className="text-muted-foreground">/ night</span>
              </div>
              <Button className="w-full" size="lg">
                {t("confirmBooking")}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}