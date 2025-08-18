"use client"
import { createContext, ReactNode, useContext, useEffect, useState } from "react";


type userType = {
    fullName: string,
    id: string,
    phoneNumber: string,
    profileImage: string,
    userType: string
}

type contextType = {
    user: userType,
    setUser: (value: userType) => void
}

const context = createContext<contextType | undefined>(undefined)


export function ContextComp({children}: {children: ReactNode}){
    const [user, setUser] = useState({
        id: "",
        fullName: "",
        phoneNumber: "",
        profileImage: "",
        userType: ""  
    })

    useEffect(()=>{
        const user = sessionStorage.getItem("userObj")
        if(user){
            const userObj = JSON.parse(user)
            setUser({...userObj})
        }
    },[])

    return (
        <context.Provider value={{user, setUser}}>
            {children}
        </context.Provider>
    )
} 


export function useContextValue(){
    const con = useContext(context)
    if(!con){
        throw new Error("an error occurred")
    }
    return con
}