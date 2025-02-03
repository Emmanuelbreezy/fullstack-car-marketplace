"use client";
import React, { Fragment } from "react";
import { MessageSquareText } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "../ui/button";
import { Skeleton } from "../ui/skeleton";
import Link from "next/link";
import ChatSellerButton from "../ChatSellerButton";

type ShopInfoProps = {
  shopId: string;
  ownerName?: string;
  shopName?: string;
  description?: string;
  isShopOwner?: boolean;
  isPending?: boolean;
  shopOwnerUserId: string;
};

const ShopInfo = ({
  shopId,
  ownerName,
  shopName,
  description,
  shopOwnerUserId,
  isShopOwner = false,
  isPending = false,
}: ShopInfoProps) => {
  return (
    <div className="w-full">
      {/* {Seller detail} */}
      <Card className="shadow-custom rounded-[8px] mb-3 border-none">
        <CardContent className="p-3 flex flex-col items-center justify-center">
          <div className="flex items-center justify-center">
            {isPending ? (
              <Skeleton className="h-28 w-28 rounded-full border-[#ebf2f7] border-2" />
            ) : (
              <Avatar className="h-28 w-28 border-2 p-[1px] border-[#ebf2f7] ">
                <AvatarFallback
                  className="bg-primary/40 
                font-semibold text-3xl text-white uppercase"
                >
                  {shopName?.charAt(0)}
                  {shopName?.charAt(1)}
                </AvatarFallback>
              </Avatar>
            )}
          </div>
          {isPending ? (
            <Fragment>
              <div className="my-3">
                <Skeleton className="h-4 w-28 mb-2" />
                <Skeleton className="h-4 w-28" />
              </div>
              <div>
                <Skeleton className="h-2 w-12" />
              </div>
            </Fragment>
          ) : (
            <>
              <div className="mt-3 ">
                {isShopOwner ? (
                  <>
                    <h5 className="font-bold text-base">{ownerName}</h5>
                    <p className="text-sm text-gray-500">{shopName}</p>
                  </>
                ) : (
                  <h5 className="font-bold text-base">{shopName} Shop</h5>
                )}
              </div>
              <div className="mt-1">
                <span
                  className="text-[10px] inline-block py-[2px] px-2
                   text-gray-500 bg-gray-100 rounded-sm font-extralight"
                >
                  last seen 10 hours ago
                </span>
              </div>
            </>
          )}
        </CardContent>
      </Card>

      <Card className="!bg-transparent shadow-none border-none">
        {/* {Contact Seller} */}

        {!isShopOwner && (
          <div className="p-3 bg-white rounded-[8px] mb-3 flex flex-col gap-2">
            {isPending ? (
              <Skeleton className="h-10 w-full" />
            ) : (
              <ChatSellerButton
                displayTitle="Start chat"
                shopName={shopName || ""}
                shopOwnerUserId={shopId}
              />
            )}
          </div>
        )}

        <div className="p-3 bg-white rounded-[8px]">
          <h5 className="font-medium text-sm uppercase mb-2 text-[#6c8ea0]">
            About {isShopOwner ? "You" : "Shop"}
          </h5>
          <p className="text-sm text-black font-light">{description}</p>
        </div>
      </Card>
    </div>
  );
};

export default ShopInfo;
