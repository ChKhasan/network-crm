<template lang="html">
  <div
    class="registration pt-[130px] h-[100vh] xl:h-full w-full overflow-hidden xl:pt-20 relative xl:px-4"
  >
    <div class="2xl:container mx-auto h-full flex flex-col gap-4">
      <div class="flex justify-center xl:h-full">
        <UserType @sendCode="sendCode" :loading="loading" />
      </div>
    </div>
  </div>
</template>
<script>
import UserType from "@/components/registration/UserType.vue";
import sendNUmberApi from "@/api/authApi";

export default {
  layout: "empty",
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    sendCode(form) {
      this.__SEND_CODE(form);
    },
    async __SEND_CODE(form) {
      try {
        this.loading = false;
        const data = await sendNUmberApi.sendCode(form);
        if (data?.data?.code_valid) {
          this.$router.push("/registration/user-info");
          localStorage.setItem("accessCode", this.form.sms_code);
        } else {
          this.$router.push("/");
          localStorage.setItem("accessToken", data?.data?.access);
          localStorage.setItem("refreshToken", data?.data?.refresh);
          localStorage.removeItem("phone");
        }
      } catch (e) {
        this.$notification["error"]({
          message: "Error",
          description: e.response.statusText,
        });
      } finally {
        this.loading = false;
      }
    },
    async __GET_USER() {
      try {
        if (localStorage.getItem("auth-token")) {
          const userInfoData = await this.$store.dispatch("fetchAuth/getUserInfo");
          this.userInfo = userInfoData;
          this.$store.commit("getUserInfo", userInfoData);
          if (this.userInfo?.name) {
            this.$router.push("/profile/freelancer");
          } else {
            this.$router.push("/registration/user-info");
          }
        }
      } catch (e) {}
    },
  },
  components: { UserType },
};
</script>
<style lang="css" scoped>
.number-card {
  width: 100%;
  max-width: 712px;
}
</style>
