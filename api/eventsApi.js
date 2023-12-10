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
  async deleteEventImage(config = {}) {
    return await $nuxt.$axiosInstance.patch(
      `/crm/events/${config.id}/delete_image/`,
      config.payload
    );
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
  async deleteEvent(config = {}) {
    return await $nuxt.$axiosInstance.delete(
      `/crm/events/${config.id}`,
      config.payload
    );
  },
  async deleteFiles(config = {}) {
    return await $nuxt.$axios.delete(`/upload_image`, config);
  },
  async deleteEventFiles(config = {}) {
    return await $nuxt.$axiosInstance.delete(
      `/crm/events/${config.id}/delete_file/`,
      { data: config.payload }
    );
  },
  async deleteEventSpeakers(config = {}) {
    return await $nuxt.$axiosInstance.delete(
      `/crm/events/${config.id}/delete_speaker`,
      { data: config.payload }
    );
  },
  async deleteSpeakerImage(config = {}) {
    console.log(config);
    return await $nuxt.$axiosInstance.patch(
      `/crm/events/${config.id}/delete_speaker_image/`,
      config.payload
    );
  },
};
