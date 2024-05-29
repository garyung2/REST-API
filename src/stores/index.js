import { writable, get, derived } from "svelte/store";
import { getApi, putApi, delApi, postApi } from "../service/api.js";
import { router } from "tinro";

function setCurrentArticlesPage() {
  const { subscribe, update, set } = writable(1);

  const resetPage = () => set(1);

  const increasePage = () => {
    update((data) => (data = data + 1));
    articles.fetchArticles();
  };

  return {
    subscribe,
    resetPage,
    increasePage,
  };
}

function setArticles() {
  let initValues = {
    articleList: [],
    totalPageCount: 0,
    menuPopup: "",
    editMode: "",
  };

  const { subscribe, update, set } = writable({ ...initValues });

  const fetchArticles = async () => {
    loadingArticle.turnOnLoading();
    const currentPage = get(currentArticlesPage);
    let path = `/articles/?pageNumber=${currentPage}`;

    try {
      const access_token = get(auth).Authorization;

      const options = {
        path: path,
        access_token: access_token,
      };

      const getDatas = await getApi(options);

      const newData = {
        articleList: getDatas.articleList,
        totalPageCount: getDatas.totalPageCount,
      };

      update((datas) => {
        if (currentPage === 1) {
          datas.articleList = newData.articleList;
          datas.totalPageCount = newData.totalPageCount;
        } else {
          const newArticles = [...datas.articleList, ...newData.articleList];
          datas.articleList = newArticles;
          datas.totalPageCount = newData.totalPageCount;
        }

        return datas;
      });
      loadingArticle.turnOffLoading();
    } catch (error) {
      loadingArticle.turnOffLoading();
      throw error;
    }
  };

  const resetArticles = () => {
    set({ ...initValues });
    currentArticlesPage.resetPage();
    articlePageLock.set(false);
  };

  return {
    subscribe,
    fetchArticles,
    resetArticles,
  };
}

function setLoadingArticle() {
  const { subscribe, set } = writable(false);

  const turnOnLoading = () => {
    set(true);
    articlePageLock.set(true);
  };

  const turnOffLoading = () => {
    set(false);
    articlePageLock.set(false);
  };

  return {
    subscribe,
    turnOnLoading,
    turnOffLoading,
  };
}

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

function setIsLogin() {
  const checkLogin = derived(auth, ($auth) =>
    $auth.Authorization ? true : false
  );
  return checkLogin;
}

export const currentArticlesPage = setCurrentArticlesPage();
export const articles = setArticles();
export const articlePageLock = writable(false);
export const loadingArticle = setLoadingArticle();
export const auth = setAuth();
export const isLogin = setIsLogin();
export const isRefresh = writable(false);
