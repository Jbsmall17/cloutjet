import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatPriceToNaira = (price: number) : string =>{
  const formatedPrice = price.toLocaleString()
  return `₦${formatedPrice}`
}


export const mockData = [
  {
    _id: "1",
    user: {
      _id: "1",
      fullName: "John Doe",
      email: "john@example.com"
    },
    platform: "Instagram",
    niche: "Fashion",
    accountUsername: "@johndoe",
    followersCount: 10000,
    engagementRate: 5.5,
    countryOfCreation: "USA",
    estimatedPrice: 5000,
    status: "approved",
    createdAt: "2023-01-01"
  },
  {
    _id: "2",
    user: {
      _id: "2",
      fullName: "Jane Smith",
      email: "jane@example.com"
    },
    platform: "Twitter",
    niche: "Tech",
    accountUsername: "@janesmith",
    followersCount: 20000,
    engagementRate: 6.0,
    countryOfCreation: "UK",
    estimatedPrice: 7000,
    status: "pending",
    createdAt: "2023-02-01"
  },
  {
    _id: "3",
    user: {
      _id: "3",
      fullName: "Alice Johnson",
      email: "alice@example.com"
    },
    platform: "Facebook",
    niche: "Lifestyle",
    accountUsername: "@alicejohnson",
    followersCount: 15000,
    engagementRate: 4.5,
    countryOfCreation: "Canada",
    estimatedPrice: 6000,
    status: "approved",
    createdAt: "2023-03-01"
  }
]