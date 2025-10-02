import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatPriceToNaira = (price: number): string => {
  const formatedPrice = price.toLocaleString();
  return `₦${formatedPrice}`;
};

export const formatFollower = (followers: number): string => {
  const noOfFollowers = followers;
  let formatFollower;
  if (noOfFollowers >= 1000000) {
    formatFollower = `${(noOfFollowers / 1000000).toFixed(1)}M`;
  } else if (noOfFollowers >= 1000 && noOfFollowers < 1000000) {
    formatFollower = `${(noOfFollowers / 1000).toFixed(1)}K`;
  } else {
    formatFollower = `${noOfFollowers}`;
  }
  return formatFollower;
};

export const formatDate = (time: string) => {
    const date = new Date(time)
    const options : Intl.DateTimeFormatOptions = {
      month: 'long', 
    }
    const month = date.toLocaleDateString('en-US',options)
    const day= date.getDate()
    const year = date.getFullYear()
    const getOrdinal = (n:number) =>{
      const s = ["th", "st", "nd", "rd"]
      const v = n % 100
      return s[(v - 20) % 10] || s[v] || s[0];
    }

    return `${month} ${day}${getOrdinal(day)}, ${year}`;
  }

export const mockData = [
  {
    _id: "1",
    user: {
      _id: "1",
      fullName: "John Doe",
      email: "john@example.com",
    },
    platform: "Instagram",
    niche: "Fashion",
    accountUsername: "@johndoe",
    followersCount: 10000,
    engagementRate: 5.5,
    countryOfCreation: "USA",
    estimatedPrice: 5000,
    status: "approved",
    createdAt: "2023-01-01",
  },
  {
    _id: "2",
    user: {
      _id: "2",
      fullName: "Jane Smith",
      email: "jane@example.com",
    },
    platform: "Twitter",
    niche: "Tech",
    accountUsername: "@janesmith",
    followersCount: 20000,
    engagementRate: 6.0,
    countryOfCreation: "UK",
    estimatedPrice: 7000,
    status: "pending",
    createdAt: "2023-02-01",
  },
  {
    _id: "3",
    user: {
      _id: "3",
      fullName: "Alice Johnson",
      email: "alice@example.com",
    },
    platform: "Facebook",
    niche: "Lifestyle",
    accountUsername: "@alicejohnson",
    followersCount: 15000,
    engagementRate: 4.5,
    countryOfCreation: "Canada",
    estimatedPrice: 6000,
    status: "approved",
    createdAt: "2023-03-01",
  },
];

export const mockNotifications = [
  {
    id: 1,
    title: "Account Verified",
    message: "Your account has been successfully verified.",
    time: "2025-09-04T09:00:00.000Z",
    read: false,
  },
  {
    id: 2,
    title: "Payment Received",
    message: "You have received a payment of ₦10,000.",
    time: "2025-09-03T15:30:00.000Z",
    read: true,
  },
  {
    id: 3,
    title: "New Message",
    message: "You have a new message from support.",
    time: "2025-09-02T12:45:00.000Z",
    read: false,
  },
  {
    id: 4,
    title: "Listing Approved",
    message: "Your account listing has been approved.",
    time: "2025-09-01T18:20:00.000Z",
    read: true,
  },
  {
    id: 5,
    title: "Password Changed",
    message: "Your password was changed successfully.",
    time: "2025-08-31T22:41:37.908Z",
    read: true,
  },
];

export const selectedAccountss = [
  {
    id: 1,
    username: "influencer_01",
    price: 20000,
    avatar: "/account.svg",
  },
  {
    id: 2,
    username: "brandguru",
    price: 15000,
    avatar: "/account.svg",
  },
  {
    id: 3,
    username: "socialqueen",
    price: 30000,
    avatar: "/account.svg",
  },
  {
    id: 4,
    username: "socialqueen",
    price: 30000,
    avatar: "/account.svg",
  },
  {
    id: 5,
    username: "socialqueen",
    price: 30000,
    avatar: "/account.svg",
  },
  {
    id: 6,
    username: "socialqueen",
    price: 30000,
    avatar: "/account.svg",
  },
  {
    id: 7,
    username: "socialqueen",
    price: 30000,
    avatar: "/account.svg",
  },
];

export function urlBase64ToUint8Array(base64String : string) {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding)
    .replace(/-/g, '+')
    .replace(/_/g, '/');

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}