import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get("type");
    const district = searchParams.get("district");
    const minPrice = searchParams.get("minPrice");
    const maxPrice = searchParams.get("maxPrice");
    const guests = searchParams.get("guests");

    const where: any = {
      status: "active",
    };

    if (type) where.type = type;
    if (district) where.district = district;
    if (minPrice) where.pricePerNight = { gte: parseInt(minPrice) };
    if (maxPrice) where.pricePerNight = { ...where.pricePerNight, lte: parseInt(maxPrice) };
    if (guests) where.maxGuests = { gte: parseInt(guests) };

    const listings = await prisma.listing.findMany({
      where,
      include: {
        host: {
          select: {
            name: true,
            avatar: true,
            isVerified: true,
          },
        },
        reviews: {
          select: {
            rating: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    // Calculate average rating for each listing
    const listingsWithRating = listings.map((listing) => ({
      ...listing,
      averageRating: listing.reviews.length > 0
        ? listing.reviews.reduce((sum, review) => sum + review.rating, 0) / listing.reviews.length
        : 0,
      reviewCount: listing.reviews.length,
    }));

    return NextResponse.json(listingsWithRating);
  } catch (error) {
    console.error("Error fetching listings:", error);
    return NextResponse.json(
      { error: "Failed to fetch listings" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      titleRu,
      titleEn,
      titleUz,
      descRu,
      descEn,
      descUz,
      type,
      pricePerNight,
      maxGuests,
      bedrooms,
      bathrooms,
      areaSqm,
      district,
      address,
      lat,
      lng,
      photos,
      amenities,
      checkInTime,
      checkOutTime,
      instantBook,
      hostId,
    } = body;

    const listing = await prisma.listing.create({
      data: {
        titleRu,
        titleEn,
        titleUz,
        descRu,
        descEn,
        descUz,
        type,
        pricePerNight: parseInt(pricePerNight),
        maxGuests: parseInt(maxGuests),
        bedrooms: parseInt(bedrooms),
        bathrooms: parseInt(bathrooms),
        areaSqm: areaSqm ? parseFloat(areaSqm) : null,
        district,
        address,
        lat: parseFloat(lat),
        lng: parseFloat(lng),
        photos,
        amenities,
        checkInTime,
        checkOutTime,
        instantBook: instantBook || false,
        hostId,
      },
    });

    return NextResponse.json(listing, { status: 201 });
  } catch (error) {
    console.error("Error creating listing:", error);
    return NextResponse.json(
      { error: "Failed to create listing" },
      { status: 500 }
    );
  }
}