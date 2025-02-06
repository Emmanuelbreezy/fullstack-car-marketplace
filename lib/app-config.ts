export const APP_CONFIG = {
  APPWRITE: {
    KEY: process.env.NEXT_APPWRITE_KEY!,
    ENDPOINT: process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!,
    PROJECT_ID: process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!,
    DATABASE_ID: process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!,
    SHOP_ID: process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_SHOP_ID!,
    CAR_LISTING_ID: process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_CAR_LISTING_ID!,
    BUCKET_IMAGES_ID: process.env.NEXT_PUBLIC_APPWRITE_BUCKET_IMAGES_ID!,
  },
  SEND_BIRD: {
    APP_ID: process.env.NEXT_PUBLIC_SENDBIRD_APP_ID!,
    API_TOKEN: process.env.NEXT_PUBLIC_SENDBIRD_API_TOKEN!,
  },
  APP_URL: process.env.NEXT_PUBLIC_APP_URL!,
};
