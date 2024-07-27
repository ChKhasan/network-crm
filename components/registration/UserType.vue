<template lang="html">
  <div
    class="number-check flex flex-col px-[120px] gap-8 py-[80px] border border-solid border-grey-light rounded-3xl number-card xl:border-0 xl:px-0 xl:py-0"
  >
    <div class="flex flex-col items-center">
      <nuxt-link to="/">
        <span
          > <Logo /> </span
      ></nuxt-link>
      <h4 class="flex text-black text-[24px] font-semibold mt-[31px] xl:text-[20px]">
        Royxatdan otish
      </h4>
      <p class="flex text-base text-grey-64 mt-2 xl:text-[14px]">
        Foydalanuvchi turini tanlang
      </p>
    </div>
    <div class="xl:h-full xl:flex xl:flex-col xl:justify-between xl:pb-4 xl:pt-2">
      <a-form-model ref="ruleForm" :model="form" :rules="rules">
        <div class="flex flex-col gap-8 xl:gap-6">
          <a-form-model-item
            ref="name"
            class="auth-item"
            label="Telefon raqamingizni kiriting"
            prop="phone_number"
          >
            <!-- <a-input v-model="form.name" /> -->
            <div
              class="rounded-[8px] px-4 xl:pl-2 py-3 h-[47px] xl:h-11 bg-bg-grey border border-solid border-border-darik flex items-center justify-between gap-4"
            >
              <span
                class="mr-1 text-base xl:text-[14px] text-black px-3 py-[6px] rounded-[4px] bg-white xl:leading-5"
                >+998</span
              >
              <input
                class="w-full pointer-events-none"
                v-mask="'## ### ## ##'"
                v-model="form.phone_number"
                type="text"
              />
              <button class="" @click="$router.push('/registration')">
                <svg
                  class="xl:w-5 xl:h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <path
                    d="M14.3865 6.33114L18.169 10.1136M3 21.5L6.67278 20.8008C7.45152 20.6526 8.16769 20.2736 8.72823 19.713L20.1837 8.25754C21.2721 7.16918 21.2721 5.40462 20.1837 4.31626C19.0954 3.22791 17.3308 3.22791 16.2425 4.31627L4.78696 15.7718C4.22642 16.3323 3.8474 17.0485 3.69916 17.8272L3 21.5Z"
                    stroke="#020105"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </a-form-model-item>
          <a-form-model-item
            ref="name"
            class="auth-item required"
            label="Tasdiqlash kodini kiriting"
            prop="phone_number"
          >
            <div
              class="rounded-[8px] xl:h-11 sms-input pl-4 pr-2 py-3 h-[47px] bg-white border border-solid border-border-darik flex items-center justify-between gap-4"
              :class="{ 'border-red': smsError && form.password.length != 6 }"
            >
              <input
                class="code_input"
                type="number"
                pattern="/^-?\d+\.?\d*$/"
                v-model="form.sms_code"
                onKeyPress="if(this.value.length==4) return false;"
                placeholder="****"
                @keyup.enter="onSubmit"
              />

              <div
                class="mr-1 text-base text-black px-4 py-[6px] xl:pr-[6px] xl:leading-5 rounded-[4px] bg-bg-grey flex gap-2 items-center xl:max-h-8"
              >
                <span
                  ><a-progress
                    class="sms-progress flex items-center"
                    type="circle"
                    :percent="timeProgress"
                /></span>
                <p class="text-base xl:text-[14px] text-black font-medium">
                  {{ formattedTime }}
                </p>
              </div>
            </div></a-form-model-item
          >
        </div>
        <button
          :class="{ 'opacity-50 pointer-events-none': timer > 0 }"
          class="text-blue text-[15px] mt-3 xl:mt-2 xl:text-[14px]"
          @click="resent"
        >
          Qayta jonatish
        </button>

        <p class="text-grey-40 text-[14px] mt-6 xl:hidden">
          +998
          {{
            `${form?.phone_number}`
              .match(/(\d{2})(\d{3})(\d{2})(\d{2})/)
              .filter((item, index) => index != 0)
              .join(" ")
          }}
          telefon raqamingizga tasdiqlash kodi yuborildi
        </p>
      </a-form-model>
      <div class="w-full flex flex-col gap-6">
        <p class="text-grey-40 text-[14px] mt-6 xl:block hidden text-center">
          +998
          {{
            `${form?.phone_number}`
              .match(/(\d{2})(\d{3})(\d{2})(\d{2})/)
              .filter((item, index) => index != 0)
              .join(" ")
          }}
          telefon raqamingizga tasdiqlash kodi yuborildi
        </p>
        <div
          class="buttons grid grid-cols-2 gap-4 mt-6 xl:mt-0 xl:flex xl:flex-col-reverse xl:gap-2 xl:w-full xl:fixed xl:left-0 xl:px-4 xl:bottom-4"
        >
          <button
            @click="$router.go(-1)"
            class="h-[60px] xl:h-[52px] border border-solid border-border-darik rounded-[12px] flex justify-center items-center text-[18px] xl:text-[14px] text-black font-medium"
          >
            Bekor qilish
          </button>
          <button
            @click="onSubmit"
            class="h-[60px] xl:h-[52px] border border-solid border-blue bg-blue rounded-[12px] flex justify-center items-center text-[18px] xl:text-[14px] text-white font-medium"
            :class="{ 'pointer-events-none opacity-50': loading }"
          >
            <span v-if="!loading">Kodni jo’natish</span> <LoaderBtn v-else />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import LoaderBtn from "../loader-btn.vue";
import sendNUmberApi from "@/api/authApi";

export default {
  props: ["loading"],
  data() {
    return {
      other: "",
      timeProgress: 100,
      smsError: false,
      time: 60,
      form: {
        phone_number: "999999990",
        sms_code: "",
      },
      timer: 5 * 60,
      timerInterval: null,
      rules: {
        phone_number: [
          { required: true, message: "This field is required", trigger: "blur" },
          { min: 9, message: "Length should 9", trigger: "blur" },
        ],
      },
    };
  },
  computed: {
    formattedTime() {
      let minutes = Math.floor(this.timer / 60);
      let seconds = this.timer % 60;
      return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    },
  },
  beforeDestroy() {
    clearInterval(this.timerInterval);
  },
  mounted() {
    this.startTimer();
    if (localStorage.getItem("phone"))
      this.form.phone_number = localStorage.getItem("phone");
  },
  methods: {
    startTimer() {
      this.timerInterval = setInterval(() => {
        if (this.timer <= 0) {
          clearInterval(this.timerInterval);
          alert("Time's up!");
        } else {
          this.timer--;
          this.timeProgress -= 100 / this.timer;
        }
      }, 1000);
    },
    handleOnComplete(value) {
      this.form.sms_code = value;
    },
    handleClearInput() {
      this.$refs.otpInput.clearInput();
    },
    resent() {
      this.__SEND_NUMBER({
        phone_number: `998${this.form.phone_number.replaceAll(" ", "")}`,
      });
    },
    async __SEND_NUMBER(form) {
      try {
        this.loading = true;
        const data = await sendNUmberApi.sendNumber(form);
        await this.$router.push("/registration/user-type");
      } catch (e) {
      } finally {
        this.loading = false;
      }
    },
    onSubmit() {
      const data = {
        phone_number: `998${this.form.phone_number.replaceAll(" ", "")}`,
        sms_code: this.form.sms_code,
      };
      localStorage.setItem("accessCode", this.form.sms_code);
      if (this.form.sms_code.length != 6) {
        this.smsError = true;
      } else {
        this.smsError = false;
      }
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.$emit("sendCode", data);
        } else {
          return false;
        }
      });
    },
  },
  components: { LoaderBtn },
};
</script>
<style lang="css" scoped>
:deep(.disabledItem) {
  pointer-events: none;
}
:deep(.otp-input) {
  width: 24px;
  height: 24px;
  padding: 5px;
  color: var(--black);
  font-family: "TT Interfaces";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  text-align: center;
} /*
  .otp-input::-webkit-inner-spin-button,
  .otp-input::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  } */
.auth-item input {
  color: var(--black);
  font-family: "TT Interfaces";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
  border-color: transparent;
  background-color: transparent;
}
.sms-progress {
  display: flex !important;
}
.sms-progress :deep(.ant-progress-inner) {
  width: 20px !important;
  height: 20px !important;
}
.sms-progress :deep(.ant-progress-text) {
  display: none !important;
}
.sms-progress :deep(.ant-progress-circle-path) {
  stroke-width: 20px;
  stroke: var(--blue) !important;
}
.required :deep(label)::before {
  display: inline-block;
  margin-right: 4px;
  color: #f5222d;
  font-size: 14px;
  font-family: SimSun, sans-serif;
  line-height: 1;
  content: "*";
  position: absolute;
  right: -5px;
  top: 0;
}
.required :deep(label) {
  padding-right: 10px;
}
.code_input {
  letter-spacing: 20px;
  font-size: 24px;
}
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
@media (max-width: 1200px) {
  .auth-item input {
    font-size: 14px;
  }
}
</style>
