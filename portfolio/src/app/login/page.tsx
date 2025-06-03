'use client';
import styles from "../_style/login_form.module.css"
import { useState } from "react";

export default function Login() {
    const [formData, setFormData] = useState({userId: "", userPw: ""});
    // const {login} = useGetUser();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // 로그인 로직 추가 예정
        const result = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userId: formData.userId,
                userPw: formData.userPw,
            }),
        })
        if(result.status === 200) {
            alert("로그인 성공");
            // 로그인 성공 후 페이지 이동 또는 상태 업데이트 로직 추가
        }
        else alert("로그인 실패");
      };
     
      
    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <h2 className={styles.title}>Login</h2>
                <input
                type="text"
                name="userId"
                placeholder="Username"
                value={formData.userId}
                onChange={handleChange}
                className={styles.input}
                />
                <input
                type="password"
                name="userPw"
                placeholder="Password"
                value={formData.userPw}
                onChange={handleChange}
                className={styles.input}
                />
                <button type="submit" className={styles.button}>로그인</button>
            </form>
    </div>
    )
}