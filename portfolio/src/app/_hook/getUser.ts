import { useState } from "react";

export function getUser() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  async function login(userId: string, userPw: string): Promise<boolean> {
    const response = await fetch("https://oasis.jbnu.ac.kr/com/com/sstm/logn/findLoginNXOS.action", {
      method: "POST",
      headers: {
        "accept": "*/*",
        "content-type": "application/json",
        "x-requested-with": "XMLHttpRequest",
        "Referer": "https://oasis.jbnu.ac.kr/com/login.do"
      },
      body: JSON.stringify({
        rType: "3tier",
        loginType: "3tier",
        userUid: userId,
        userPwd: userPw,
        langFg: "K",
        loginGubun: "O",
        loginSystem: "oasis"
      })
    });

    const data = await response.json();
    const success = data.hasOwnProperty("authYn");
    setIsLoggedIn(success);
    return success;
  }

  return { isLoggedIn, login };
}
