import Image from "next/image";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import axios from "axios";
import Loader from "./ui/Loader";
import toast from "react-hot-toast";

interface accountPropsType {
    id: string
    desc: string;
    sellerName: string;
    sellerPic: string;
}

const baseUrl = process.env.NEXT_PUBLIC_API_URL

export default function PurchasedAccount({
    id,
  desc,
  sellerName,
  sellerPic,
}: accountPropsType) {
  const [showActionDialog, setShowActionDialog] = useState(false);
  const [actionNotes, setActionNotes] = useState("");
  const [isLoading, setIsLoading] = useState(false)

  const reportAccount = () => {
    const endpoint = `${baseUrl}/v1/buyer/escrow-transactions/${id}/dispute`
    const token = sessionStorage.getItem("token")
    console.log(token)
    setIsLoading(true)
    
    axios.post(endpoint,{},{
        headers : {
            Authorization : `Bearer ${token}` 
        }
    })
    .then((res)=>{
        console.log(res.data.message) 
        setShowActionDialog(false)
        toast.success(res.data.message)
    })
    .finally(()=>{
        setIsLoading(false)
    })
} 
  
  return (
    <div className="flex flex-row items-center py-3 md:py-6 px-4 md:px-8 rounded-xl border border-[#51596c]">
      <div className="flex-1 flex flex-row items-center gap-4 md:gap-6 lg:gap-8">
        <div>
          <img src={"/facebook.png"} />
        </div>
        <div className="space-y-1">
          {/* <p className='mb-2 md:mb-4 text-base md:text-2xl font-semibold flex flex-row gap-2 md:gap-4 items-center'>
              <span>{title}</span>
              {
                flag
                &&
                <img src={flag} alt="flag" />
              }
            </p> */}
          <p>
            <span className="text-sm md:text-base font-medium capitalize">
              {desc}
            </span>
          </p>
          <div className="flex flex-row gap-3 items-center">
            <Image
              src={sellerPic}
              alt={`${sellerName}'s  name`}
              height={40}
              width={40}
              className="object-cover rounded-full h-[32px] lg:h-[32px] w-[32px] lg:w-[32px]"
            />
            <p className="leading-none capitalize">{sellerName}</p>
          </div>
        </div>
      </div>
      <Dialog open={showActionDialog} onOpenChange={setShowActionDialog}>
        <DialogTrigger asChild>
          <button className="rounded-md py-2.5 px-6 bg-[#f6a21b] leading-none">
            Report Account
          </button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Report Account Purchased</DialogTitle>
            <DialogDescription>
              Make this Report and notify both parties involved
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <label className="block" htmlFor="notes">Action Notes</label>
              <textarea
                id="notes"
                placeholder="Add any notes about this action..."
                value={actionNotes}
                className="block w-full min-h-[100px] p-2"
                onChange={(e) => setActionNotes(e.target.value)}
              />
            </div>
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setShowActionDialog(false)}
            >
              Cancel
            </Button>
            <Button
              onClick={reportAccount}
              className="flex justify-center items-center bg-[#f6a21b] hover:bg-[#f6a21b]/90 w-[75px]"
            >
                {
                    isLoading
                    ? <Loader />
                    : "Report"
                }
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
