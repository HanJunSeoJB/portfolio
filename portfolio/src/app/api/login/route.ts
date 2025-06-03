
export async function POST(req: Request) {
    try {
      const { userId, userPw } = await req.json();
  
      const res = await fetch("https://oasis.jbnu.ac.kr/com/com/sstm/logn/findLoginNXOS.action", {
        method: "POST",
        headers: {
          "accept": "*/*",
          "content-type": "application/json",
          "x-requested-with": "XMLHttpRequest",
          "Referer": "https://oasis.jbnu.ac.kr/com/login.do",
        },
        body: JSON.stringify({
          rType: "3tier",
          loginType: "3tier",
          userUid: userId,
          userPwd: userPw,
          langFg: "K",
          loginGubun: "O",
          loginSystem: "oasis"
        }),
      });
  
      const data = await res.json();
  
      return new Response(JSON.stringify(data), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
  
    } catch (error) {
      console.error("API Error:", error);
      return new Response(JSON.stringify({ error: "Internal Server Error" }), {
        status: 500,
      });
    }
  }