import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const listing = await prisma.listing.findUnique({
      where: { id },
      include: {
        host: {
          select: {
            id: true,
            name: true,
            avatar: true,
            bio: true,
            isVerified: true,
            createdAt: true,
          },
        },
        reviews: {
          include: {
            author: {
              select: {
                id: true,
                name: true,
                avatar: true,
              },
            },
          },
          orderBy: {
            createdAt: "desc",
          },
        },
        bookings: {
          where: {
            status: "confirmed",
          },
          select: {
            checkIn: true,
            checkOut: true,
          },
        },
      },
    });

    if (!listing) {
      return NextResponse.json(
        { error: "Listing not found" },
        { status: 404 }
      );
    }

    // Calculate average rating
    const averageRating = listing.reviews.length > 0
      ? listing.reviews.reduce((sum, review) => sum + review.rating, 0) / listing.reviews.length
      : 0;

    // Calculate rating breakdown
    const ratingBreakdown = {
      clean: listing.reviews.reduce((sum, review) => sum + review.ratingClean, 0) / listing.reviews.length || 0,
      communication: listing.reviews.reduce((sum, review) => sum + review.ratingComm, 0) / listing.reviews.length || 0,
      location: listing.reviews.reduce((sum, review) => sum + review.ratingLocation, 0) / listing.reviews.length || 0,
      value: listing.reviews.reduce((sum, review) => sum + review.ratingValue, 0) / listing.reviews.length || 0,
    };

    return NextResponse.json({
      ...listing,
      averageRating,
      reviewCount: listing.reviews.length,
      ratingBreakdown,
    });
  } catch (error) {
    console.error("Error fetching listing:", error);
    return NextResponse.json(
      { error: "Failed to fetch listing" },
      { status: 500 }
    );
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();

    const listing = await prisma.listing.update({
      where: { id },
      data: body,
    });

    return NextResponse.json(listing);
  } catch (error) {
    console.error("Error updating listing:", error);
    return NextResponse.json(
      { error: "Failed to update listing" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    await prisma.listing.delete({
      where: { id },
    });

    return NextResponse.json({ message: "Listing deleted successfully" });
  } catch (error) {
    console.error("Error deleting listing:", error);
    return NextResponse.json(
      { error: "Failed to delete listing" },
      { status: 500 }
    );
  }
}