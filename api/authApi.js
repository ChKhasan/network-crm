export default {
  async sendNumber(requestConfig = {}) {
    return await $nuxt.$axios.post("/auth/send_sms_code", requestConfig);
  },
  async sendCode(requestConfig = {}) {
    return await $nuxt.$axios.post(
      "/auth/check_sms_code?crmLogin=1",
      requestConfig
    );
  },
  async sendInfo(requestConfig = {}) {
    return await $nuxt.$axios.post("/auth/crm/sign_up", requestConfig);
  },
  async getInfo(requestConfig = {}) {
    return await $nuxt.$axiosInstance.get("/auth/me", requestConfig);
  },
  async putProfile(requestConfig = {}) {
    return await $nuxt.$axiosInstance.put("/auth/update", requestConfig);
  },
};
