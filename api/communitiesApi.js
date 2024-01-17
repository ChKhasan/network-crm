export default {
  async getCommunities(config = {}) {
    return await $nuxt.$axiosInstance.get("/crm/community", config);
  },
  async getMembers(config = {}) {
    return await $nuxt.$axiosInstance.get("/crm/clients", config);
  },
  async getCategories(config = {}) {
    return await $nuxt.$axiosInstance.get("/crm/community_types", config);
  },
  async postCommunities(config = {}) {
    return await $nuxt.$axiosInstance.post("/crm/community/", config);
  },
  async deleteCommunityImage(config = {}) {
    return await $nuxt.$axiosInstance.patch(
      `/crm/community/${config.id}/delete_image/`,
      config.payload
    );
  },
  async putCommunities(config = {}) {
    return await $nuxt.$axiosInstance.put(
      `/crm/community/${config.id}/`,
      config.payload
    );
  },
  async getCommunityById(config = {}) {
    return await $nuxt.$axiosInstance.get(
      `/crm/community/${config.id}`,
      config.payload
    );
  },
  async deleteCommunity(config = {}) {
    return await $nuxt.$axiosInstance.delete(
      `/crm/community/${config.id}`,
      config.payload
    );
  },
  async deleteFiles(config = {}) {
    return await $nuxt.$axios.delete(`/upload_image`, config);
  },
  async deleteCommunityFiles(config = {}) {
    return await $nuxt.$axiosInstance.delete(
      `/crm/community/${config.id}/delete_file/`,
      { data: config.payload }
    );
  },
  async deleteCommunitiespeakers(config = {}) {
    return await $nuxt.$axiosInstance.delete(
      `/crm/community/${config.id}/delete_speaker`,
      { data: config.payload }
    );
  },
  async deleteSpeakerImage(config = {}) {
    return await $nuxt.$axiosInstance.patch(
      `/crm/community/${config.id}/delete_speaker_image/`,
      config.payload
    );
  },
};
