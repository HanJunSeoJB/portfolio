import { useEffect, useState } from "react";
import style from "../_style/profile.module.css";
import { Noto_Sans } from "next/font/google";
import Job from "./job";
import ScrollButton from "./_Buttons/scrollButton";
import ResumeDownloadButton from "./_Buttons/resumeButton";

const notoSans = Noto_Sans({
    subsets: ["latin"],
})

export default function Profile() {
    return  (
        <div className={style.main}>
            <div className={style.grids}>
                <div className={style.container}>
                    <div className={style.hero}>   
                        <h1 className={notoSans.className}>경험을 추구하는 개발자</h1>
                        <h1 className={notoSans.className}>한준서입니다.</h1>
                        <Job/>
                        <p className={notoSans.className}>작은 인터랙션 하나에도 사용자 입장에서 고민하며, 직관적이고 효율적인 UI를 설계하는 데 집중합니다.
                            팀 프로젝트에서는 원활한 소통과 책임감을 바탕으로 역할을 충실히 수행하며, 구성원들과의 협업 속에서 
                            더 나은 결과물을 만들어내는 데 보람을 느낍니다. 끝까지 해내는 추진력과 세심한 관찰력으로, 사용자와 
                            팀 모두에게 신뢰받는 개발자가 되고자 노력하고 있습니다.</p>
                    </div>
                    <div className={style.contact}>
                        <ScrollButton/>
                        <ResumeDownloadButton/>
                    </div>
                </div>
            </div>
        </div>
    )
}