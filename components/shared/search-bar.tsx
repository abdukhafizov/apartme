"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, Users } from "lucide-react";

export function SearchBar() {
  const router = useRouter();
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("1");

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (checkIn) params.set("checkIn", checkIn);
    if (checkOut) params.set("checkOut", checkOut);
    if (guests) params.set("guests", guests);

    router.push(`/search?${params.toString()}`);
  };

  return (
    <div className="flex flex-col gap-4 rounded-lg bg-white p-6 shadow-lg md:flex-row md:items-center">
      <div className="flex-1">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Where
        </label>
        <Input
          placeholder="Samarkand, Uzbekistan"
          defaultValue="Samarkand"
          disabled
          className="w-full"
        />
      </div>

      <div className="flex-1">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Check-in
        </label>
        <div className="relative">
          <Input
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="w-full"
          />
          <Calendar className="absolute right-3 top-3 h-4 w-4 text-gray-400" />
        </div>
      </div>

      <div className="flex-1">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Check-out
        </label>
        <div className="relative">
          <Input
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="w-full"
          />
          <Calendar className="absolute right-3 top-3 h-4 w-4 text-gray-400" />
        </div>
      </div>

      <div className="flex-1">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Guests
        </label>
        <div className="relative">
          <Input
            type="number"
            min="1"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            className="w-full"
          />
          <Users className="absolute right-3 top-3 h-4 w-4 text-gray-400" />
        </div>
      </div>

      <Button onClick={handleSearch} className="md:w-auto">
        Search
      </Button>
    </div>
  );
}