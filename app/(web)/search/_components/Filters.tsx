"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import FilterAccordionItem from "@/components/FilterAccordionItem";
import { Accordion } from "@/components/ui/accordion";
import { Slider } from "@/components/ui/slider";
import {
  CAR_BRAND_OPTIONS,
  CAR_CONDITION_OPTIONS,
  CAR_FUELTYPE_OPTIONS,
  CAR_COLOR_OPTIONS,
  CAR_MODEL_OPTIONS,
  CAR_PRICE_RANGE_OPTIONS,
  CAR_YEAR_RANGE_OPTIONS,
} from "@/constants/cars";
import useFilters from "@/hooks/use-filter";
import { calculatePriceRange } from "@/lib/helper";

const Filters = () => {
  const { filters, updateFilter, clearFilters } = useFilters();

  const { minPrice, maxPrice } = calculatePriceRange();

  return (
    <div className="col-span-3 space-y-4">
      <div className="">
        {/* Filter Card */}
        <div className="b-categories-section mb-3">
          <div
            className="flex items-center justify-between rounded-[4px_4px_0_0] 
          bg-primary text-white p-[8px_16px]"
          >
            <h2 className="font-bold text-base">Filters</h2>
            <Button
              className="!h-auto text-white/80 font-light !py-0"
              variant="link"
              onClick={clearFilters}
            >
              Reset all
            </Button>
          </div>
          <Accordion type="single" collapsible defaultValue="brands">
            {/* Car Brands */}
            <FilterAccordionItem
              title="Car Brands"
              value="brands"
              filterType="checkbox"
              options={CAR_BRAND_OPTIONS}
              selectedValues={filters.brand || []}
              onValuesChange={(values: any) => {
                updateFilter("brand", values);
              }}
              hasSearch={true}
            />
          </Accordion>
        </div>

        <Accordion
          type="multiple"
          defaultValue={[
            "price-range",
            "fuel-type",
            "condition",
            "model",
            "transmission",
            "color",
            "year-of-manufacture",
          ]}
        >
          {/* Price Range */}
          <FilterAccordionItem
            title="Price Range"
            value="price-range"
            filterType="radio"
            options={CAR_PRICE_RANGE_OPTIONS}
            hasClearButton={false}
            renderCustom={
              <div className="py-1">
                <div className="flex items-center justify-between mb-[5px]">
                  <h5 className="font-medium text-sm">Price</h5>
                  <span className="text-sm">
                    ${minPrice} - ${maxPrice}
                  </span>
                </div>
                <Slider
                  min={minPrice}
                  max={maxPrice}
                  className="cursor-pointer"
                  defaultValue={[minPrice, maxPrice]}
                  onValueChange={(values) => {
                    updateFilter("price", values.join("-"));
                  }}
                />
              </div>
            }
            selectedValues={filters.price}
            onValuesChange={(values: any) => {
              updateFilter("price", values);
            }}
          />

          {/* Fuel Type */}
          <FilterAccordionItem
            title="Fuel Type"
            value="fuel-type"
            filterType="checkbox"
            options={CAR_FUELTYPE_OPTIONS}
            selectedValues={filters.fuelType || []}
            onValuesChange={(values: any) => {
              updateFilter("fuelType", values);
            }}
          />

          {/* Models */}
          <FilterAccordionItem
            title="Models"
            value="model"
            filterType="checkbox"
            diasbled={true}
            options={CAR_MODEL_OPTIONS}
            selectedValues={filters.model || []}
            onValuesChange={(values: any) => {
              updateFilter("model", values);
            }}
          />

          {/* Condition */}
          <FilterAccordionItem
            title="Condition"
            value="condition"
            filterType="checkbox"
            options={CAR_CONDITION_OPTIONS}
            selectedValues={filters.condition || []}
            onValuesChange={(values: any) => {
              updateFilter("condition", values);
            }}
          />

          {/* Color */}
          <FilterAccordionItem
            title="Color"
            value="color"
            filterType="checkbox"
            options={CAR_COLOR_OPTIONS}
            selectedValues={filters.color || []}
            onValuesChange={(values: any) => {
              updateFilter("color", values);
            }}
          />

          {/* Years of Manufacture */}
          <FilterAccordionItem
            title="Years of Manufacture"
            value="year-of-manufacture"
            filterType="radio"
            options={CAR_YEAR_RANGE_OPTIONS}
            selectedValues={
              filters.yearMin && filters.yearMax
                ? `${filters.yearMin}-${filters.yearMax}`
                : ""
            }
            onValuesChange={(values: any) => {
              const [min, max] =
                typeof values === "string"
                  ? values?.split("-")?.map(Number)
                  : [null, null];
              updateFilter("year_min", min);
              updateFilter("year_max", max);
            }}
            hasClearButton
          />
        </Accordion>
      </div>
    </div>
  );
};

export default Filters;
