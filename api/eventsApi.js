export default {
  async getEvents(config = {}) {
    return await $nuxt.$axiosInstance.get("/crm/events", config);
  },
  async getCategoris(config = {}) {
    return await $nuxt.$axiosInstance.get("/crm/categories", config);
  },
  async postEvents(config = {}) {
    return await $nuxt.$axiosInstance.post("/crm/events/", config);
  },
  async putEvents(config = {}) {
    return await $nuxt.$axiosInstance.put(
      `/crm/events/${config.id}/`,
      config.payload
    );
  },
  async getEventById(config = {}) {
    return await $nuxt.$axiosInstance.get(
      `/crm/events/${config.id}`,
      config.payload
    );
  },
};
