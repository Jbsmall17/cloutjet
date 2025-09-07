/*eslint-disable @typescript-eslint/no-explicit-any*/
"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import MainLoader from "@/components/ui/MainLoader";
import axios from "axios";
import React, { useEffect, useState } from "react";


type notification = {
  createdAt :  string,
  message : string,
  status : string,
  title : string,
  type : string,
  _id : string
}

export default function Page() {
  const [token, setToken] = useState<string | null>("");
  const [loading, setLoading] = useState(true);
  const [notifications, setNotifications] = useState<notification[]>([]);

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
    <section className="flex flex-col h-[calc(100vh-80px)] overflow-y-auto pl-4 md:pl-6 lg:pl-0 pr-4 md:pr-6 py-4 md:py-6">
      <h1 className="text-center font-semibold mb-3 text-2xl">Notifications</h1>
      <p className="text-[#626262] text-center mb-5 md:mb-5 lg:mb-7 text-xl">
        All notifications will be displayed here
      </p>
      {loading ? (
        <div className="min-h-[400px]  bg-white flex-1 flex justify-center items-center rounded-xl">
          <MainLoader />
        </div>
      ) : notifications.length > 1 ? (
        <div className="grid gap-4 flex-1 min-h-[400px]">
          {notifications.map((notif) => (
            <Card key={notif._id} className="gap-4 py-4">
              <CardHeader>
                <CardTitle>{notif.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{notif.message}</p>
                <p className="text-xs text-gray-500">
                  {new Date(notif.createdAt).toLocaleString()}
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
                        {new Date(notif.createdAt).toLocaleString()}
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
