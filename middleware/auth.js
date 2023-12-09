export default async function ({ redirect, $axios, store }) {
  if (!localStorage.getItem("accessToken")) {
    redirect("/registration");
  } else {
    try {
      const data = await $axios.$get(process.env.BASE_URL + `/auth/me`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
    } catch (e) {
      if (e.response.status == 401) {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        redirect("/registration");
      }
    }
  }
}
