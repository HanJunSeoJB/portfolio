'use client';
import { useEffect, useState } from "react";
import style from "../../_style/profile.module.css"
import { Noto_Sans } from "next/font/google";

const notoSans = Noto_Sans({
    subsets: ["latin"],
})

const messages = [
    "프론트엔드 개발자",
    "데이터 분석가",
]

export default function Job() {
    const [index, setIndex] = useState(0);
    
        useEffect( () => {
            const timer = setInterval(()=> {
                setIndex((prev) => (prev + 1) % messages.length);
            }, 3000);
    
            return () => clearInterval(timer);
        }, []);
    return (
        <div>
            <h3 className={`${style.dev} ${notoSans.className}`}>{messages[index]}</h3>
        </div>
    )
}