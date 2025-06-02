import {renderHook, act} from '@testing-library/react'
import { getUser } from '../_hook/getUser';

// fetch를 mocking
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        authYn: "N",
      }),
  })
) as jest.Mock;

describe("getUser", () => {
    it("로그인 성공 시 isLoggedIn이 true가 되는지", async() => {
        const { result } = renderHook(() => getUser());

        await act(async () => {
            const success  = await result.current.login("202010957", "junseo30431!!");
            expect(success).toBe(true);
        });
    });
});


