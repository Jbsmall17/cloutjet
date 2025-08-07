"use client"
import axios from "axios"
import React from "react"
import { useEffect } from "react"

const OtpTimer = ({initialTime = 60}:{initialTime:number}) => {
    const user = sessionStorage.getItem("user")
    const [seconds, setSeconds] = React.useState(initialTime)
    const [isActive, setIsActive] = React.useState(true)
    
    const formatTime = (timeInSeconds: number) => {
        const minutes = Math.floor(timeInSeconds / 60)
      const seconds = Math.floor(timeInSeconds % 60)

      return ` ${minutes.toString().padStart(2,'0')}:${seconds.toString().padStart(2,'0')}`
    }

    const resendOTP = () => {
        setIsActive(true)
        setSeconds(60)
        if(user){
            const userObj = JSON.parse(user)
            if(userObj.userId){
                axios.post(`https://cloud-jet-production.up.railway.app/v1/auth/resend-otp/${userObj.userId}`, {})
                .then(()=>{})
                .catch(()=>{})
            }
        }
    }


    useEffect(()=>{
      if(!isActive) return
      if(seconds === 0) return
      const interval = setInterval(()=>{
        setSeconds((prev)=>{
            if(prev <= 1){
                setIsActive(false)
                clearInterval(interval)
                return 0
            }
            return prev - 1
        })
      },1000)

      return () => clearInterval(interval)
    },[seconds,isActive])



    return (
      <>
        {
        seconds > 0
        ? <span>{formatTime(seconds)}</span>
        : <span className='text-[#219dd0] font-semibold no-underline cursor-pointer' onClick={resendOTP}>{" "}Resend Code!</span>
      } 
      </>
    )
  }

export default OtpTimer