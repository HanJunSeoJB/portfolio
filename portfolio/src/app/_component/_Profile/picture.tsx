import style from "../../_style/picture.module.css"
import Image from "next/image";
import profile1 from "../../../../public/images/profile1.jpg";

export default function Picture() {
    return (
        <div className={style.main}>
            <div className={style.picture}>
                <Image
                    src={profile1}
                    alt="Profile Picture"
                    fill
                    className={style.image}
                />
            </div>
        </div>
    )
}