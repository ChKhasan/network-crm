<template lang="html">
  <div
    class="registration pt-[130px] xl:h-full h-[100vh] w-full overflow-hidden xl:pt-20 xl:px-4 relative"
  >
    <div class="2xl:container mx-auto h-full flex flex-col gap-4">
      <div class="flex justify-center">
        <NumberCheck @checkNumber="__SEND_NUMBER" />
      </div>
    </div>
  </div>
</template>
<script>
import NumberCheck from "@/components/registration/NumberCheck.vue";
import sendNUmberApi from "@/api/authApi";

export default {
  layout: "empty",
  middleware: "login",

  data() {
    return {
      form: {
        phone_number: "",
      },

      rules: {
        name: [
          {
            required: true,
            message: "This field is required",
            trigger: "change",
          },
        ],
      },
    };
  },
  methods: {
    async __SEND_NUMBER(form) {
      try {
        const data = await sendNUmberApi.sendNumber(form);
        await this.$router.push("/registration/user-type");
      } catch (e) {}
    },
  },
  components: { NumberCheck },
};
</script>
<style lang="css" scoped>
.number-card {
  width: 100%;
  max-width: 712px;
}
</style>
