"use client";
import React from "react";
import CarCard from "@/components/CardCard";
import { Button } from "@/components/ui/button";
import { CAR_BRAND_OPTIONS, cars } from "@/constants/cars";
import { useQuery } from "@tanstack/react-query";
import { getAllCarListingQueryFn } from "@/lib/fetcher";
import { CarListingSkeleton } from "@/components/skeleton-loader/carlisting-skeleton";
import EmptyState from "@/components/EmptyState";
import { ListingType } from "@/@types/api.type";
import { cn } from "@/lib/utils";
import Link from "next/link";

const BRANDS = [{ value: "all", label: "All Brand" }, ...CAR_BRAND_OPTIONS];

const CarListing = () => {
  const [active, setActive] = React.useState(BRANDS[0]?.value);

  const { data, isPending } = useQuery({
    queryKey: ["group-by-brand", active],
    queryFn: () =>
      getAllCarListingQueryFn({
        brand: active !== "all" ? [active] : [],
      }),
    staleTime: 0,
  });

  const listings: ListingType[] = data?.listings || [];

  return (
    <div className="w-full pt-4 pb-14">
      <div className="w-full max-w-7xl mx-auto space-y-6">
        <div className="flex items-center gap-4 overflow-x-auto ">
          {BRANDS.map((item, index) => (
            <button
              disabled={isPending}
              key={index}
              className={cn(
                `text-gray-700 transition font-medium px-3 
                py-2 border-b-2 border-transparent
                 hover:border-black hover:text-black`,
                item.value === active && "border-black text-black",
                isPending && "pointer-events-none opacity-55"
              )}
              onClick={() => setActive(item.value)}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Cars */}
        {isPending ? (
          <CarListingSkeleton
            className="
            grid grid-cols-1 min-[500px]:grid-cols-2 
          lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 px-4 sm:px-6 md:px-0
            "
            layout={"grid"}
          />
        ) : listings?.length === 0 ? (
          <div className="min-h-[30vh]">
            <EmptyState message="No Car found." />
          </div>
        ) : (
          <div
            className="grid grid-cols-1 min-[500px]:grid-cols-2 
          lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 px-4 sm:px-6 md:px-0"
          >
            {listings?.map((listing) => (
              <CarCard key={listing.$id} listing={listing} layout={"grid"} />
            ))}
          </div>
        )}

        <div className="flex mt-4 justify-center">
          <Link href="/search">
            <Button
              size="lg"
              className="uppercase font-semibold py-3 px-10 rounded-lg !h-auto"
            >
              View More
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarListing;
