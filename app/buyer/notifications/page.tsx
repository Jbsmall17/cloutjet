/*eslint-disable @typescript-eslint/no-explicit-any*/
"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import MainLoader from "@/components/ui/MainLoader";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Page() {
  const [token, setToken] = useState<string | null>("");
  const [loading, setLoading] = useState(true);
  const [, setNotifications] = useState<any[]>([]);
  const mockNotifications = [
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

  const getNotifications = () => {
    const endpoint = `https://cloud-jet-production.up.railway.app/v1/user/notifications`;
    axios
      .get(endpoint, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setNotifications([...res.data.data]);
      })
      .catch((err) => {
        console.log(err.response);
        setNotifications([]);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    const storedToken = sessionStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, [token]);
  useEffect(() => {
    if (token) {
      getNotifications();
    }
  }, [token]);
  return (
    <section className="flex flex-col">
      <h1 className="text-center font-semibold mb-3 text-2xl">Notifications</h1>
      <p className="text-[#626262] text-center mb-5 md:mb-5 lg:mb-7 text-xl">
        All notifications will be displayed here
      </p>
      {loading ? (
        <div className="min-h-[400px]  bg-white flex-1 flex justify-center items-center rounded-xl">
          <MainLoader />
        </div>
      ) : mockNotifications.length > 1 ? (
        <div className="grid gap-4 flex-1 min-h-[400px]">
          {mockNotifications.map((notif) => (
            <Card key={notif.id}>
              <CardHeader>
                <CardTitle>{notif.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{notif.message}</p>
                <p className="text-xs text-gray-500">
                  {new Date(notif.time).toLocaleString()}
                </p>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button  className="mt-2 cursor-pointer">Preview</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>{notif.title}</DialogTitle>
                    </DialogHeader>
                    <div>
                      <p>{notif.message}</p>
                      <p className="text-xs text-gray-500">
                        {new Date(notif.time).toLocaleString()}
                      </p>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="min-h-[400px] bg-white flex-1 flex justify-center items-center rounded-xl">
          <div>
            <img
              src="/notifications.svg"
              alt="No notifications"
              className="w-24 h-24 mx-auto mb-4"
            />
            <p className="font-semibold text-xl">No Notifications</p>
          </div>
        </div>
      )}
    </section>
  );
}
