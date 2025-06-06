import style from "../../_style/_project/project.module.css"
import { Noto_Sans } from "next/font/google"
import ProjectCard from "./projectCard"

const notoSans = Noto_Sans({
    subsets: ["latin"],
})

export default function Project() {
    return (
        <div className={style.main}>
            <div className={`${style.div}`}>
                <h2 className={notoSans.className}>최근 프로젝트</h2>
                <p className={notoSans.className}>최근 진행 중인 프로젝트입니다!</p>
            </div>
            <div className={style.projectCard}>
                <ProjectCard/>
            </div>
        </div>
    )
}