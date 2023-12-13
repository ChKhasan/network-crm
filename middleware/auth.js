export default async function ({ redirect, $axios, store }) {
  let baseUrl =
    process.env.BASE_URL || "https://networking.pythonanywhere.com/api";
  if (!localStorage.getItem("accessToken")) {
    redirect("/registration");
  } else {
    try {
      const data = await $axios.$get(baseUrl + `/auth/me`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
    } catch (e) {
      if (e.response.status == 401) {
        try {
          const tokens = await $axios.$post(baseUrl + "/auth/token/refresh", {
            refresh: localStorage.getItem("refreshToken"),
          });
          localStorage.setItem("accessToken", tokens?.access);
          localStorage.setItem("refreshToken", tokens?.refresh);
        } catch (e) {
          localStorage.removeItem("accessToken");
          localStorage.removeItem("refreshToken");
          redirect("/registration");
        }
      }
    }
  }
}
