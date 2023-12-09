export default function ({ store, redirect }) {
  const token = localStorage.getItem("accessToken");
  if (!!token) redirect("/");
}
