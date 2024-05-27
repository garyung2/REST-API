import { writable, get, derived } from "svelte/store";
import { getApi, putApi, delApi, postApi } from "../service/api.js";
import { router } from "tinro";

function setAuth() {
  let initValues = {
    id: "",
    email: "",
    Authorization: "",
  };

  const { subscribe, set, update } = writable({ ...initValues });

  const refresh = async () => {
    try {
      const authenticationUser = await postApi({ path: "/auth/refresh" });
      set(authenticationUser);
      isRefresh.set(true);
    } catch (error) {
      auth.resetUserInfo();
      isRefresh.set(false);
    }
  };

  const resetUserInfo = () => set({ ...initValues });

  const login = async (email, password) => {
    try {
      const options = {
        path: "/auth/login",
        data: {
          email: email,
          pwd: password,
        },
      };

      const result = await postApi(options);
      set(result);
      isRefresh.set(true);
      router.goto("/articles");
    } catch (error) {
      alert("오류가 발생했습니다. 로그인을 다시 시도해 주세요.");
    }
  };

  const logout = async () => {
    try {
      const options = {
        path: "/auth/logout",
      };

      await delApi(options);
      set({ ...initValues });
      isRefresh.set(false);
      router.goto("/home");
    } catch (error) {
      alert("오류가 발생했습니다. 다시시도해 주세요");
    }
  };

  const register = async (email, pwd) => {
    try {
      const options = {
        path: "/auth/register",
        data: {
          email: email,
          pwd: pwd,
        },
      };

      await postApi(options);
      alert("가입이 완료되었습니다. ");
      router.goto("/login");
    } catch (error) {
      alert("오류가 발생했습니다. 다시 시도해 주세요.");
    }
  };

  return {
    subscribe,
    refresh,
    login,
    logout,
    resetUserInfo,
    register,
  };
}

// function setIsLogin() {
//   const checkLogin = derived(auth, ($auth) =>
//     $auth.Authorization ? true : false
//   );
//   return checkLogin;
// }

export const auth = setAuth();
// export const isLogin = setIsLogin();
export const isRefresh = writable(false);
