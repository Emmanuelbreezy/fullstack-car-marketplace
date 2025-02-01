import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { CogIcon, FuelIcon, GaugeIcon, TagIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { createSlug, formatCurrency } from "@/lib/helper";
import { cn } from "@/lib/utils";
import { ListingType } from "@/@types/api.type";

interface CarCardProps {
  listing: ListingType;
  layout?: "grid" | "list";
}

const CarCard: React.FC<CarCardProps> = ({ listing, layout = "grid" }) => {
  const {
    $id,
    imageUrls,
    displayTitle,
    price,
    fuelType,
    condition,
    transmission,
    mileage,
    description,
  } = listing;
  const slug = createSlug(displayTitle);

  return (
    <div>
      <Link href={`/detail/${slug}/${$id}`}>
        <Card
          className={cn(
            `border rounded-lg shadow-sm p-0 flex flex-col gap-4
            `,
            layout === "list" && "flex-row md:flex-row  border-primary/30"
          )}
        >
          <div
            className={cn(
              `relative w-full min-h-28 !h-[210px] bg-primary/10`,
              layout === "list" && "max-w-[185px] md:max-w-[210px] !h-[208px]"
            )}
          >
            <Image
              aria-hidden
              src={imageUrls[0]}
              className={cn(
                "rounded-t-lg w-full h-full object-cover",
                layout === "list" && "h-full !rounded-r-none"
              )}
              width={layout === "list" ? 300 : 800}
              height={layout === "list" ? 200 : 500}
              priority
              alt=""
            />
          </div>
          <CardContent
            className={cn(
              `
            !p-4 !pt-0 space-y-3`,
              layout === "list" && "flex-1 !p-[18px_16px_18px_0px]"
            )}
          >
            <div className="flex flex-col gap-0 ">
              <h3
                className={cn(
                  `font-bold text-base text-gray-800 capitalize`,
                  layout === "list" && "text-lg"
                )}
              >
                {displayTitle}
              </h3>
              <div className="h-5 mt-1 text-sm text-gray-500 truncate w-[200px]">
                {description}
              </div>
            </div>
            <div className="flex items-center justify-between !mt-2 my-1">
              <p className="font-bold text-xl text-primary">
                {formatCurrency(price)}
              </p>
            </div>
            <div
              className={cn(
                `flex flex-wrap items-center gap-2`,
                layout === "list" && "mt-1"
              )}
            >
              <Badge
                variant="outline"
                className="border-primary gap-1.5 capitalize !font-medium py-1"
              >
                <FuelIcon className="size-3.5" />
                {fuelType?.toLowerCase()}
              </Badge>
              <Badge
                variant="outline"
                className="border-primary gap-1.5 !font-medium py-1"
              >
                <GaugeIcon className="size-3.5" />
                {mileage} km
              </Badge>
              <Badge
                variant="outline"
                className="border-primary gap-1.5 capitalize !font-medium py-1"
              >
                <TagIcon className="size-3.5" />
                {condition?.toLowerCase()}
              </Badge>
              <Badge
                variant="outline"
                className="border-primary gap-1.5 capitalize !font-medium py-1 "
              >
                <CogIcon className="size-3.5" />
                {transmission?.toLowerCase()}
              </Badge>
            </div>
          </CardContent>
        </Card>
      </Link>
    </div>
  );
};

export default CarCard;

// const CarCard: React.FC<CarCardProps> = ({
//   id,
//   image,
//   name,
//   type,
//   price,
//   fuelType = "Petrol",
//   speed = 180,
//   condition = "New",
//   transmission = "Automatic",
// }) => {
//   const slug = createSlug(name);
//   return (
//     <div>
//       <Link href={`/detail/${slug}/${id}`}>
//         <Card className="border rounded-lg shadow-sm p-0 flex flex-col gap-4">
//           <div className="relative min-h-28">
//             <Image
//               aria-hidden
//               src={image}
//               className="rounded-lg w-full h-full object-cover"
//               width={800}
//               height={500}
//               priority
//               alt=""
//             />
//           </div>
//           <CardContent className="!p-4 !pt-0 space-y-3">
//             <div className="flex flex-col gap-0 ">
//               <h3 className="font-bold text-base text-gray-800">{name}</h3>
//               <p className="text-xs text-gray-500">{type}</p>
//             </div>
//             <div className="flex items-center justify-between !mt-2 my-1">
//               <p className="font-bold text-xl text-primary">{price}</p>
//             </div>
//             <div className="flex flex-wrap items-center gap-2">
//               <Badge
//                 variant="outline"
//                 className="border-primary gap-1.5 !font-medium py-1"
//               >
//                 <FuelIcon className="size-3.5" />
//                 {fuelType}
//               </Badge>
//               <Badge
//                 variant="outline"
//                 className="border-primary gap-1.5 !font-medium py-1"
//               >
//                 <GaugeIcon className="size-3.5" />
//                 {speed} km/h
//               </Badge>
//               <Badge
//                 variant="outline"
//                 className="border-primary gap-1.5 !font-medium py-1"
//               >
//                 <TagIcon className="size-3.5" />
//                 {condition}
//               </Badge>
//               <Badge
//                 variant="outline"
//                 className="border-primary gap-1.5 !font-medium py-1 "
//               >
//                 <CogIcon className="size-3.5" />
//                 {transmission}
//               </Badge>
//             </div>
//           </CardContent>
//         </Card>
//       </Link>
//     </div>
//   );
// };

// export default CarCard;
