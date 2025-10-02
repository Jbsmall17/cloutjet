import { useCallback } from "react";
import { publicVapidKey } from "../config/push";
import { urlBase64ToUint8Array } from "../utils";
import axios from "axios";

const baseUrl = process.env.NEXT_PUBLIC_API_URL

export function usePushNotifications(){
    const isSupported = typeof window !== "undefined" && "serviceWorker" in navigator && "PushManager" in window

    const requestPermission = useCallback( async () : Promise<NotificationPermission> =>{
        if(!isSupported) return "denied"

        let permission = Notification.permission

        if(permission === "default"){
            permission = await Notification.requestPermission()    
        }

        return permission
    }, [isSupported])

    const registerAndSubcribe = useCallback(async ()=>{
        const endpoint = `${baseUrl}/v1/user/notifications/subscribe`
        if(!isSupported){
            throw new Error("Push notifications or service workers are not supported in this browser.")
        }

        const permission = await requestPermission()
        if(permission !== "granted"){
            throw new Error("Notifications were not granted by the user.")
        }

        const registration = await navigator.serviceWorker.register("/service-worker.js")
        const readyReg = await navigator.serviceWorker.ready;
        console.log("service worker registered:", registration.scope)


        const existingSub = await readyReg.pushManager.getSubscription();
        if (existingSub) return existingSub;


        const applicationServerKey = urlBase64ToUint8Array(publicVapidKey)
        const subscription = await registration.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey
        })

        axios.post(endpoint,{subscription : subscription } ,{
            headers: {
                Authorization: `Bearer ${sessionStorage.getItem("token")}`
            }
        })
        .then((res)=>{
            console.log(res.data.message)
        })
        .catch(()=>{
            throw new Error("Failed to store subscription on the server.");
        })

        return subscription

    },[isSupported, requestPermission])


    return {isSupported, registerAndSubcribe}
}
