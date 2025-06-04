import style from "../_style/profile.module.css";

export default function Profile() {
    return  (
        <div className={style.main}>
            <div className={style.grids}>
                <div className={style.container}>
                    <div className={style.hero}>   
                        <h1>사용자 행동을 설계하고, 화면 너머의 데이터까지 생각하는 개발자입니다.</h1>
                    </div>
                </div>
                <div className={style.container}>

                </div>
            </div>
        </div>
    )
}