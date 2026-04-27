"use client";

import { useRouter, usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Map, Grid3X3 } from "lucide-react";

export function MapToggle() {
  const router = useRouter();
  const pathname = usePathname();
  const isMapView = pathname.includes("/map");

  const toggleView = () => {
    if (isMapView) {
      router.push(pathname.replace("/map", "/search"));
    } else {
      router.push(pathname.replace("/search", "/map"));
    }
  };

  return (
    <Button variant="outline" onClick={toggleView}>
      {isMapView ? (
        <>
          <Grid3X3 className="mr-2 h-4 w-4" />
          Grid View
        </>
      ) : (
        <>
          <Map className="mr-2 h-4 w-4" />
          Map View
        </>
      )}
    </Button>
  );
}