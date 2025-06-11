import style from "../../_style/_project/project_card.module.css"
import Image from "next/image"
import projectImage_1 from "../../../../public/images/projects/project_1.png"
import { Noto_Sans } from "next/font/google"
import { IoMdArrowForward } from "react-icons/io";
import { FiGithub } from "react-icons/fi";



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
                <p>Next js와 몽고db를 이용한 사용자 맞춤형 포트폴리오 웹 사이트입니다!</p>
            </div>
            <div className={style.note}>
                <div className={style.stack}>
                    <span className={notoSans.className}>Next js</span>
                    <span className={notoSans.className}>Typescript</span>
                    <span className={notoSans.className}>Mongo DB</span>
                    <span className={notoSans.className}>Vercel</span>
                </div>
                <div className={style.description}>
                    <div className={style.descriptionHeader}>
                        <IoMdArrowForward className={style.arrow}/>
                        <p>전북대 재학생 인증 API를 구현해서 재학생 인증 기능을 만들었습니다.</p>
                    </div>
                    <div className={style.descriptionHeader}>
                        <IoMdArrowForward className={style.arrow}/>
                        <p>컴포넌트를 체계적으로 분리하고, DB에서 사용자 정보를 불러와 포트폴리오를 구성할 수 있도록 구현했습니다.</p>
                    </div>
                    
                </div>
            </div>
            <div className={style.buttons}>
                <a href="/projects" className={style.buttonLink}>
                    자세히 보기
                    <IoMdArrowForward className={style.buttonIcon}/>
                </a>
                <a href="https://github.com/HanJunSeoJB/portfolio" className={style.iconContainer}>
                    <FiGithub className={style.icon} />
                </a>
            </div>
        </div>
    )
}