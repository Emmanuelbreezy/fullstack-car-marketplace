export type LoginType = {
  email: string;
  password: string;
};

export type RegisterType = {
  email: string;
  password: string;
  name: string;
};

export type AddListingType = {
  brand: string;
  model: string;
  yearOfManufacture: string;
  exteriorColor: string;
  interiorColor?: string;
  condition: string;
  secondCondition?: string[];
  mileage?: string;
  transmission: string;
  fuelType: string;
  keyFeatures?: string[];
  vin?: string;
  bodyType?: string;
  drivetrain: string;
  seatingCapacity?: string;
  description?: string;
  price: number;
  contactPhone: string;
  imageUrls: string[];
};
