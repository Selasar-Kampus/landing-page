'use client'

import Nav from '@/components/Nav';
import {Inter} from 'next/font/google'
import Aos from "aos";
import {useEffect} from "react";
import "aos/dist/aos.css";
import '../../styles/index.scss'
import ScrollToTop from '@/components/common/ScrollTop';
import FooterMain from '@/components/FooterMain';

const inter = Inter({subsets: ['latin']})

if (typeof window !== "undefined") {
    require("bootstrap/dist/js/bootstrap");
}

export default function RootLayout({children}) {
    useEffect(() => {
        Aos.init({
            duration: 1200,
        });
    }, []);

    return (
        <html lang="en">
        <head>
            <meta
                name="description"
                content="SelasarKampus - Unleashing potential through innovative education for Indonesian students and professionals."
            />
            <meta
                name="keywords"
                content="innovative education, Indonesian students, professionals, empowerment, career advancement, learning solutions, skill development, education in Indonesia, innovative learning, student growth, professional enhancement, skill-building, potential enhancement, Indonesian education, career growth, empowering learners"
            />
            <link rel="icon" href="/favicon.ico"/>
        </head>
        <body className={`${inter.className}`}>
        <div className='main-page-wrapper'>
            <Nav/>
            {children}
            <FooterMain/>
            <ScrollToTop/>
        </div>
        </body>

        </html>
    )
}
