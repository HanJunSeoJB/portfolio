
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
  
      if (data.authYn) {
        return new Response(JSON.stringify({ success: true }), { status: 200 });
      } else {
        return new Response(JSON.stringify({ success: false }), { status: 401 });
      }
    } catch (error) {
      return new Response(JSON.stringify({ success: false, message: error }), { status: 500 });
    }
  }