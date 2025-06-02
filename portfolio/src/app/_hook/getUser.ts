import { useState } from "react";

export function getUser() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  async function login(userId: string, userPw: string): Promise<boolean> {
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId, userPw }),
      });

      const data = await response.json();
      const success = Object.prototype.hasOwnProperty.call(data, "authYn");
      setIsLoggedIn(success);
      return success;
    } catch (err) {
      console.error("Login error:", err);
      return false;
    }
  }

  return { isLoggedIn, login };
}
