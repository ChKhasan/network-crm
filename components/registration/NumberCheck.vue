<template lang="html">
  <div
    class="number-check flex flex-col px-[120px] xl:px-0 gap-8 py-[80px] xl:py-0 border border-solid border-grey-light rounded-3xl number-card xl:border-0"
  >
    <div class="flex flex-col items-center">
      <nuxt-link to="/">
        <span
          >
          <Logo />
          </span
      ></nuxt-link>
      <h4 class="flex text-black text-[24px] font-semibold mt-[31px] xl:text-[20px]">
        Kirish yoki ro'yxatdan o'tish
      </h4>
      <p class="flex text-base text-grey-64 mt-2 xl:text-[14px]">
        Единая авторизация и регистрация
      </p>
    </div>
    <div class="xl:pt-2">
      <a-form-model ref="ruleForm" :model="form" :rules="rules">
        <a-form-model-item
          class="auth-item"
          label="Telefon raqamingizni kiriting"
          prop="phone_number"
        >
          <!-- <a-input v-model="form.name" /> -->
          <div
            class="input-block border border-solid flex items-center"
            :class="onFocus ? 'border-blue boxShadow' : 'border-border-darik'"
          >
            <span class="mr-1 text-base text-black">+998</span>
            <input
              v-mask="'## ### ## ##'"
              @focus="onFocus = true"
              @blur="onFocus = false"
              v-model="form.phone_number"
              @keyup.enter="submit"
              placeholder="__ ___ __ __"
              type="text"
            />
          </div>
        </a-form-model-item>
        <p class="text-grey-40 text-[14px] mt-[11px]">
          Kiritgan telefon raqamingizga tasdiqlash kodi yuboriladi
        </p>
      </a-form-model>
    </div>
    <div
      class="buttons grid grid-cols-2 gap-4 xl:gap-2 xl:flex xl:flex-col-reverse xl:fixed xl:bottom-4 xl:w-full xl:left-0 xl:px-4"
    >
      <button
        @click="$router.go(-1)"
        class="h-[60px] xl:h-[52px] border border-solid border-border-darik rounded-[12px] flex justify-center items-center text-[18px] xl:text-[14px] text-black font-medium"
      >
        Bekor qilish
      </button>
      <button
        @click="submit"
        class="h-[60px] xl:h-[52px] border border-solid border-blue bg-blue rounded-[12px] flex justify-center items-center text-[18px] xl:text-[14px] text-white font-medium"
        :class="{ 'pointer-events-none opacity-50': loading }"
      >
        <span v-if="!loading">Kodni jo’natish</span> <LoaderBtn v-else />
      </button>
    </div>
  </div>
</template>
<script>
import LoaderBtn from "../loader-btn.vue";
import Logo from "../logo.vue";

export default {
  props: ["loading"],
  data() {
    return {
      onFocus: false,
      other: "",
      form: {
        phone_number: "",
      },
      rules: {
        phone_number: [
          {
            required: true,
            message: "This field is required",
            trigger: "change",
          },
          {
            min: 12,
            message: "The length of the number should not be less than 9",
            trigger: "change",
          },
        ],
      },
    };
  },
  methods: {
    submit() {
      console.log("submit");
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          const data = {
            phone_number:
              this.form.phone_number.length > 0
                ? `998${this.form.phone_number.replaceAll(" ", "")}`
                : undefined,
          };
          this.$emit("checkNumber", data);
          localStorage.setItem("phone", this.form.phone_number.replaceAll(" ", ""));
        }
      });
    },
  },
  components: { LoaderBtn },
};
</script>
<style lang="css" scoped>
.boxShadow {
  box-shadow: 0px 0px 0px 3px rgba(70, 105, 229, 0.2);
}
.auth-item .input-block {
  height: 47px;
  border-radius: 8px;
  padding: 12px 16px;
  transition: all 0.3s;
}
.auth-item .input-block input {
  color: var(--black);
  font-family: "TT Interfaces";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
  border-color: transparent;
  width: 100%;
}
@media (max-width: 1200px) {
  .auth-item .input-block {
    height: 44px;
  }
  .auth-item .input-block input {
    font-size: 14px;
    line-height: 19px;
  }
}
</style>
