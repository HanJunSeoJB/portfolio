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
    const [animate, setAnimate] = useState(true);
        
    useEffect( () => {
        const timer = setInterval(()=> {
            setAnimate(false); 
            setTimeout(() => {
                setIndex((prev) => (prev + 1) % messages.length);
                setAnimate(true); 
            }, 1000);
        }, 2000);
    
            return () => clearInterval(timer);
        }, []);
    return (
        <div className={style.job}>
            <h3 className={`${notoSans.className} ${animate? style.dev: ''}`}>{messages[index]}</h3>
            
        </div>
    )
}