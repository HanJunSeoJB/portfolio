'use client';
import { useEffect, useState } from "react";
import style from "../../_style/profile.module.css";
import { Noto_Sans } from "next/font/google";

const notoSans = Noto_Sans({ subsets: ["latin"] });

const messages = ["프론트엔드 개발자", "데이터 분석가"];

export default function Job() {
  const [visibleText, setVisibleText] = useState({
    current: 0,
    next: 1,
  });
  const [isFirstVisible, setIsFirstVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleText((prev) => ({
        current: prev.next,
        next: (prev.next + 1) % messages.length,
      }));
      setIsFirstVisible((prev) => !prev);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={style.job}>
      <h3
        className={`${notoSans.className} ${style.message} ${
          isFirstVisible ? style.fadeIn : style.fadeOut
        }`}
      >
        {messages[isFirstVisible ? visibleText.current : visibleText.next]}
      </h3>

      <h3
        className={`${notoSans.className} ${style.message} ${
          isFirstVisible ? style.fadeOut : style.fadeIn
        }`}
      >
        {messages[isFirstVisible ? visibleText.next : visibleText.current]}
      </h3>
    </div>
  );
}
