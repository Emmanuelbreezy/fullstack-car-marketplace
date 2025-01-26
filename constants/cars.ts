import { CarType } from "@/@types/index.type";

export const cars: CarType[] = [
  {
    id: "EJIURURURUR",
    image: "/images/hero-car.png",
    name: "BMW M4 Competition",
    type: "Coupe",
    price: "$266,500",
    fuelType: "Petrol",
    speed: 290,
    condition: "New",
    transmission: "Automatic",
  },
  {
    id: "r98fjkewjrek",
    image: "/images/hero-car.png",
    name: "Toyota GR Supra",
    type: "Sport Car",
    price: "$185,000",
    fuelType: "Petrol",
    speed: 250,
    condition: "Used",
    transmission: "Manual",
  },
  {
    id: "j8f93jf93fj9",
    image: "/images/hero-car.png",
    name: "BMW i4 M50",
    type: "Electric Sedan",
    price: "$205,500",
    fuelType: "Electric",
    speed: 225,
    condition: "New",
    transmission: "Automatic",
  },
  {
    id: "dk39ifj39fj3",
    image: "/images/hero-car.png",
    name: "Tesla Model 3",
    type: "Electric Sedan",
    price: "$175,900",
    fuelType: "Electric",
    speed: 210,
    condition: "Used",
    transmission: "Automatic",
  },
  {
    id: "dk39fjkdkdkd",
    image: "/images/hero-car.png",
    name: "Porsche 911 GT3",
    type: "Sport Car",
    price: "$386,500",
    fuelType: "Petrol",
    speed: 320,
    condition: "New",
    transmission: "Manual",
  },
  {
    id: "dke93jfkd93kf",
    image: "/images/hero-car.png",
    name: "Toyota Camry Hybrid",
    type: "Sedan",
    price: "$98,500",
    fuelType: "Hybrid",
    speed: 180,
    condition: "New",
    transmission: "Automatic",
  },
  {
    id: "eoekdkdkekee",
    image: "/images/hero-car.png",
    name: "Mercedes-Benz EQS",
    type: "Luxury Electric",
    price: "$295,000",
    fuelType: "Electric",
    speed: 240,
    condition: "New",
    transmission: "Automatic",
  },
  {
    id: "dkekdkkdkekd",
    image: "/images/hero-car.png",
    name: "Audi RS6 Avant",
    type: "Sport Wagon",
    price: "$315,500",
    fuelType: "Petrol",
    speed: 280,
    condition: "Used",
    transmission: "Automatic",
  },
];

export const carFeatures = {
  "Air Conditioning": true,
  "Power Windows": true,
  "Power Locks": true,
  "Power Steering": true,
  "Anti-lock Brakes (ABS)": true,
  "Driver Airbag": true,
  "Passenger Airbag": true,
  "Alloy Wheels": true,
  "Sunroof/Moonroof": true,
  "Leather Seats": true,
  "Navigation System": true,
  "Premium Sound System": true,
  "Keyless Entry": false,
  "Cruise Control": true,
  "Backup Camera": false,
  "Bluetooth Connectivity": true,
  "Heated Seats": true,
  "Remote Start": true,
  "Third-row Seating": false,
  "Four-Wheel Drive (4WD)": true,
};

export const carBrands = [
  {
    value: "mercedes-benz",
    label: "Mercedes Benz",
  },
  { value: "tesla", label: "Tesla" },
  { value: "lexus", label: "Lexus" },
  { value: "toyota", label: "Toyota" },
  { value: "bmw", label: "BMW" },
  { value: "ford", label: "Ford" },
];

export const carModels = [
  { key: "mercedes-benz", value: "gle-class", label: "GLE-Class" },
  { key: "mercedes-benz", value: "glk-class", label: "GLK-Class" },
  { key: "mercedes-benz", value: "s-class", label: "S-Class" },
  { key: "tesla", value: "model-s", label: "Model S" },
  { key: "tesla", value: "model-3", label: "Model 3" },
  { key: "tesla", value: "model-x", label: "Model X" },
  { key: "lexus", value: "es300", label: "ES 300" },
  { key: "lexus", value: "rx350", label: "RX 350" },
  { key: "toyota", value: "camry", label: "Camry" },
  { key: "toyota", value: "corolla", label: "Corolla" },
  { key: "toyota", value: "camry-hybrid", label: "Camry Hybrid" },
  { key: "bmw", value: "7-series", label: "7 Series" },
  { key: "bmw", value: "x5", label: "X5" },
  { key: "ford", value: "mustang", label: "Mustang" },
  { key: "ford", value: "f-150", label: "F-150" },
];

export const carConditions = [
  { value: "new", label: "Brand New" },
  { value: "used", label: "Used" },
];

export const carFuelTypes = [
  { value: "gasoline", label: "Gasoline" },
  { value: "diesel", label: "Diesel" },
  { value: "electric", label: "Electric" },
  { value: "hybrid", label: "Hybrid" },
];

export const carYears = [
  { value: "2016", label: "2016" },
  { value: "2015", label: "2015" },
  { value: "2013", label: "2013" },
  { value: "2011", label: "2012" },
  { value: "2010", label: "2010" },
  { value: "2022", label: "2022" },
  { value: "2023", label: "2023" },
  { value: "2024", label: "2024" },
];
