/*eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type userType = {
  fullName: string;
  id: string;
  phoneNumber: string;
  profileImage: string;
  userType: string;
  email: string
};

type activities = {
  _id: string;
  user: string;
  title: string;
  message: string;
  type: string;
  status: string;
  createdAt: string;
};

type sellerStatsType = {
  engagementGrowth: string;
  purchasesCount: number;
  recentActivities: activities[];
  recentTransactions: transaction[];
  totalOrders: number;
};

type contextType = {
  user: userType;
  setUser: (value: userType) => void;
  refferalObj: refferalObj;
  setRefferalObj: (value: refferalObj) => void;
  sellerStats: sellerStatsType;
  setSellerStats: (value: sellerStatsType) => void;
  listedAccounts: listedAccount[];
  setListedAccounts: (value: listedAccount[]) => void;
  listedAccount: listedAccount;
  setListedAccount: (value: listedAccount) => void;
  purchasedAccount: listedAccount[];
  setPurchasedAccount: (value: listedAccount[]) => void;
  selectedAccount: account[];
  setSelectedAccount: React.Dispatch<React.SetStateAction<account[]>>;
  isCartOpen : boolean, 
  setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>,
  noOfPage : number, 
  setNoOfPages : React.Dispatch<React.SetStateAction<number>>, 
  currentPage : number, 
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>,
  totalWallet: number,
  setTotalWallet: React.Dispatch<React.SetStateAction<number>>
};

type refferalObj = {
  referralCode: string;
  numberOfReferrals: number;
  totalCoinEarnings: string;
};


export type account = {
  accountAge: string;
  accountPassword: string;
  accountUsername: string;
  countryOfCreation: string;
  createdAt: string;
  description: string;
  engagementRate: number;
  estimatedPrice: number;
  followersCount: number;
  isInEscrow: boolean;
  isSold: boolean;
  likesCount: number;
  listingFee: number;
  logo: string;
  niche: string;
  platform: string;
  preferredPrice: number;
  profileLink: string;
  proofScreenshotUrl: string;
  recoveryPhoneNumber: string;
  status: string;
  twoFAEnabled: boolean;
  twoFAMethod: string;
  updatedAt: string;
  user: string;
  _id: string;
  seller?: {
    fullName: string
  }
};

type payment = {
  accountPrice: string;
  serviceFee: string;
  totalCost: string;
};

type transaction = {
  _id: string,
  user: string,
  type: string,
  amount: 0,
  method: string,
  status: string,
  description: string,
  createdAt: string,
  updatedAt: string
}

export type listedAccount = {
  listingId: string;
  account: account;
  paymentSummary?: payment;
};

const context = createContext<contextType | undefined>(undefined);

export function ContextComp({ children }: { children: ReactNode }) {
  const [user, setUser] = useState({
    id: "",
    fullName: "",
    phoneNumber: "",
    profileImage: "",
    email: "",
    userType: "",
  });
  const [refferalObj, setRefferalObj] = useState<refferalObj>({
    referralCode: "",
    numberOfReferrals: 0,
    totalCoinEarnings: "",
  });
  const [sellerStats, setSellerStats] = useState<sellerStatsType>({
    engagementGrowth: "",
    purchasesCount: 0,
    recentActivities: [],
    recentTransactions: [],
    totalOrders: 0,
  });
  const [listedAccounts, setListedAccounts] = useState<listedAccount[]>([]);
  const [listedAccount, setListedAccount] = useState<listedAccount>({
    listingId: "",
    account: {
      accountAge: "",
      accountPassword: "",
      accountUsername: "",
      countryOfCreation: "",
      createdAt: "",
      description: "",
      engagementRate: 0,
      estimatedPrice: 0,
      followersCount: 0,
      isInEscrow: false,
      isSold: false,
      likesCount: 0,
      listingFee: 0,
      logo: "",
      niche: "",
      platform: "",
      preferredPrice: 0,
      profileLink: "",
      proofScreenshotUrl: "",
      recoveryPhoneNumber: "",
      status: "",
      twoFAEnabled: false,
      twoFAMethod: "",
      updatedAt: "",
      user: "",
      _id: "",
      seller: {
        fullName: ""
      }
    },
    paymentSummary: {
      accountPrice: "",
      serviceFee: "",
      totalCost: "",
    },
  });
  const [purchasedAccount, setPurchasedAccount] = useState<listedAccount[]>([]);
  const [selectedAccount, setSelectedAccount] = useState<account[]>([]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false)
  const [noOfPage, setNoOfPages] = useState<number>(0)
  const [currentPage, setCurrentPage] = useState<number>(0)
  const [totalWallet, setTotalWallet] = useState<number>(0)

  useEffect(() => {
    const user = sessionStorage.getItem("userObj");
    if (user) {
      const userObj = JSON.parse(user);
      setUser({ ...userObj });
    }
  }, []);

  return (
    <context.Provider
      value={{
        user,
        setUser,
        refferalObj,
        setRefferalObj,
        sellerStats,
        setSellerStats,
        listedAccounts,
        setListedAccounts,
        listedAccount,
        setListedAccount,
        purchasedAccount,
        setPurchasedAccount,
        selectedAccount,
        setSelectedAccount,
        isCartOpen, 
        setIsCartOpen,
        noOfPage, 
        setNoOfPages, 
        currentPage, 
        setCurrentPage,
        totalWallet,
        setTotalWallet
      }}
    >
      {children}
    </context.Provider>
  );
}

export function useContextValue() {
  const con = useContext(context);
  if (!con) {
    throw new Error("an error occurred");
  }
  return con;
}
