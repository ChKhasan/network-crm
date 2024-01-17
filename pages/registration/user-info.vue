<template lang="html">
  <div
    class="registration pt-[130px] pb-[100px] xl:pt-20 w-full overflow-hidden xl:px-4 xl:pb-4"
  >
    <div class="2xl:container mx-auto h-full flex flex-col gap-4">
      <div class="flex justify-center">
        <UserInfo
          @sendRegister="sendRegister"
          :regions="regions"
          :specialities="specialities"
          :loading="loading"
        />
      </div>
    </div>
  </div>
</template>
<script>
import UserInfo from "@/components/registration/UserInfo.vue";
import sendNUmberApi from "@/api/authApi";

export default {
  layout: "empty",
  data() {
    return {
      loading: false,
    };
  },

  methods: {
    sendRegister(form) {
      this.__SEND_INFO(form);
    },
    async __SEND_INFO(form) {
      try {
        this.loading = true;
        const data = await sendNUmberApi.sendInfo(form);
        localStorage.setItem("accessToken", data?.data?.access);
        localStorage.setItem("refreshToken", data?.data?.refresh);
        localStorage.removeItem("phone_number");
        localStorage.removeItem("accessCode");
        await this.$router.push("/");
      } catch (e) {
      } finally {
        this.loading = false;
      }
    },
  },
  components: { UserInfo },
};
</script>
<style lang="css" scoped>
.number-card {
  width: 100%;
  max-width: 712px;
}
</style>
