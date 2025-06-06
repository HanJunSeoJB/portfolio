import style from "../../_style/_project/project_card.module.css"
import Image from "next/image"
import projectImage_1 from "../../../../public/images/projects/project_1.png"
import { Noto_Sans } from "next/font/google"

const notoSans = Noto_Sans({
    subsets: ["latin"],
})

export default function ProjectCard() {
    return (
        <div className={style.main}>
            <div className={style.image}>
                <Image
                    src={projectImage_1}
                    alt="Project Image"
                    fill
                    className={style.imageContent}
                />
            </div>
            <div className={style.cardHeader}>
                <h3 className={notoSans.className}>포트폴리오 웹사이트</h3>
                <p>2025.05 ~ 현재</p>
                <p>포트폴리오 웹사이트</p>
            </div>
            <div className={style.note}>
                <div className={style.stack}>
                    <span className={notoSans.className}>Next js</span>
                    <span className={notoSans.className}>Typescript</span>
                    <span className={notoSans.className}>Mongo DB</span>
                    <span className={notoSans.className}>Vercel</span>
                </div>
            </div>
        </div>
    )
}