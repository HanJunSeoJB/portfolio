'use client';
import { useEffect, useState } from "react";
import style from "../../_style/profile.module.css";
import { Noto_Sans } from "next/font/google";

const notoSans = Noto_Sans({ subsets: ["latin"] });

const messages = ["프론트엔드 개발자", "데이터 분석가"];

export default function Job() {
  const [index, setIndex] = useState(0);
  const [animationStage, setAnimationStage] = useState<"fade-in" | "wait" | "fade-out">("fade-in");

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (animationStage === "fade-in") {
      timeout = setTimeout(() => setAnimationStage("wait"), 500);
    } else if (animationStage === "wait") {
      timeout = setTimeout(() => setAnimationStage("fade-out"), 1000);
    } else if (animationStage === "fade-out") {
      timeout = setTimeout(() => {
        setIndex((prev) => (prev + 1) % messages.length);
        setAnimationStage("fade-in");
      }, 500);
    }

    return () => clearTimeout(timeout);
  }, [animationStage]);

  return (
    <div className={style.job}>
      <h3 className={`${notoSans.className} ${style[animationStage]}`}>
        {messages[index]}
      </h3>
    </div>
  );
}
