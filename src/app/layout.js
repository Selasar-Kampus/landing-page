'use client'

import Nav from '@/components/Nav';
import { Inter } from 'next/font/google'
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import '../../styles/index.scss'
import ScrollToTop from '@/components/common/ScrollTop';


const inter = Inter({ subsets: ['latin'] })

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  useEffect(() => {
    Aos.init({
      duration: 1200,
    });
  }, []);

  return (
    <html lang="en">
      <body className={`${inter.className}`}>
      <div className='main-page-wrapper'>
      <Nav/>
      {children}
      <ScrollToTop />
      </div>
      </body>

    </html>
  )
}
