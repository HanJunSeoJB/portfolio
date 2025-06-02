import { renderHook, act } from '@testing-library/react';
import { getUser } from '../_hook/getUser';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        authYn: "N",
        msgval: undefined,
      }),
  })
) as jest.Mock;

describe("getUser", () => {
  it("로그인 성공 시 isLoggedIn이 true가 되는지", async () => {
    const { result } = renderHook(() => getUser());

    await act(async () => {
      const success = await result.current.login("202010957", "junseo30431!!");
      expect(success).toBe(true);
    });

    expect(result.current.isLoggedIn).toBe(true);
  });

  it("로그인 실패 시 isLoggedIn이 false가 되는지", async () => {
    (fetch as jest.Mock).mockImplementationOnce(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            msgval: "str01",
          }),
      })
    );

    const { result } = renderHook(() => getUser());

    await act(async () => {
      const success = await result.current.login("202010957", "wrongpassword");
      expect(success).toBe(false);
    });

    expect(result.current.isLoggedIn).toBe(false);
  });
});
