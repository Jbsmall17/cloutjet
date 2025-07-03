import Image from 'next/image'
import React from 'react'
import {Phone, Mail} from "lucide-react";
import Link from 'next/link';

export default function Footer() {
  return (
    <>
    <footer className='max-w-screen-2xl mx-auto px-[5%] 2xl:px-0 flex flex-col md:flex-row justify-between gap-3 md:gap-5 lg:gap-7 py-3 md:py-5 lg:py-7'>
        <div className='flex-1 max-w-[550px]'>
            <Image
                src="/cloutjet-logo.svg"
                alt="cloutjet logo"
                className='w-[48px] lg:w-[70px] h-[48px] lg:h-[70px]'
                width={32}
                height={32}
            />
            <p className='text-base lg:text-xl text-black dark:text-black mt-4 md:mt-6 lg:mt-8'>
                Clout Jet is a digital marketplace that empowers users to buy and sell social media accounts, access VPN services, and connect with verified influencers to grow online presence. We are committed to secure, fast, and trusted digital transactions through an intuitive platform backed by escrow protection and real-time communication.
            </p>
        </div>
        <div>
            <h3 className='text-xl md:text-2xl font-bold mb-4 md:mb-10 lg:mb-12'>Quicks Links</h3>
            <ul className='flex flex-col gap-2 md:gap-5 text-base md:text-xl font-semibold font-normal dark:text-black'>
                <li><Link href='/signup'>Create an account</Link></li>
                <li><Link href='/login'>Sign in</Link></li>
                <li><Link href='#'>Market place</Link></li>
            </ul>
        </div>
        <div>
            <h3 className='text-xl md:text-2xl font-bold mb-4 md:mb-8 lg:mb-10'>Contact Us</h3>
            <ul className='flex flex-col gap-8 py-8 px-6 rounded-xl text-white dark:text-white bg-[#17223b]'>
                <li className='flex flex-row gap-2 items-center'>
                    <Phone className='inline mr-2' />
                    <a href='tel:+1234567890'>+1 234 567 890</a>
                </li>
                <li className='flex flex-row gap-2 items-center'>
                    <Mail className='inline mr-2' />
                    <a href="mailto:cloutjet@gmail.com">cloudjet@gmail.com</a>
                </li>
                <li className='flex flex-row gap-3 items-center justify-center'>
                    <a href='#'><img src="/instagram-footer.svg" /></a>
                    <a href='#'><img src="/twitter-footer.svg" /></a>
                    <a href='#'><img src="/facebook-footer.svg" /></a>
                </li>
            </ul>
        </div>
    </footer>
    </>
  )
}
