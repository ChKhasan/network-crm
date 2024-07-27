export default async function ({ redirect, $axios, store }) {
  const baseUrl =
    process.env.BASE_URL || "https://networking.pythonanywhere.com/api";

  const headers = {
    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  };
  const UNAUTHORIZED_STATUS = 401;

  async function checkAuthentication() {
    try {
      const data = await $axios.$get(baseUrl + `/auth/me`, {
        headers: headers,
      });

      store.commit("getProfile", data);
    } catch (e) {
      if (e.response.status == UNAUTHORIZED_STATUS) refreshTokens();
    }
  }

  async function refreshTokens() {
    try {
      const tokens = await $axios.$post(baseUrl + "/auth/token/refresh", {
        refresh: localStorage.getItem("refreshToken"),
      });
      await localStorage.setItem("accessToken", tokens?.access);
      await localStorage.setItem("refreshToken", tokens?.refresh);

      location.href = "/";
    } catch (e) {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      redirect("/registration");
    }
  }

  if (!localStorage.getItem("accessToken")) {
    redirect("/registration");
  } else {
    checkAuthentication();
  }
}
