<template lang="html">
  <div
    class="number-check flex flex-col px-[120px] gap-8 xl:gap-10 py-[80px] border border-solid border-grey-light rounded-3xl number-card xl:px-0 xl:border-0 xl:py-0"
  >
    <div class="flex flex-col items-center">
      <nuxt-link to="/">
        <span
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="145"
            height="27"
            viewBox="0 0 145 27"
            fill="none"
          >
            <path
              d="M24.969 26.9204H8.08407C5.85398 26.9204 3.94248 26.1372 2.34956 24.5708C0.783186 22.9779 0 21.0664 0 18.8363V0H7.52655V18.1593C7.52655 18.5044 7.64602 18.7965 7.88496 19.0354C8.12389 19.2743 8.40265 19.3938 8.72124 19.3938H24.3319C24.677 19.3938 24.969 19.2743 25.208 19.0354C25.4469 18.7965 25.5664 18.5044 25.5664 18.1593V0H33.0531V18.8363C33.0531 21.0664 32.2566 22.9779 30.6637 24.5708C29.0973 26.1372 27.1991 26.9204 24.969 26.9204Z"
              fill="#5C46E6"
            />
            <path
              d="M61.992 26.9204H37.023V0H61.992C64.2221 0 66.1203 0.79646 67.6867 2.38938C69.2796 3.95575 70.076 5.85398 70.076 8.08407V18.8363C70.076 21.0664 69.2796 22.9779 67.6867 24.5708C66.1203 26.1372 64.2221 26.9204 61.992 26.9204ZM44.5495 19.3938H61.3548C61.6999 19.3938 61.992 19.2743 62.2309 19.0354C62.4699 18.7965 62.5893 18.5177 62.5893 18.1991V8.72124C62.5893 8.40265 62.4699 8.12389 62.2309 7.88496C61.992 7.64602 61.6999 7.52655 61.3548 7.52655H44.5495V19.3938Z"
              fill="#5C46E6"
            />
            <path
              d="M99.0149 27H82.13C79.8999 27 77.9884 26.2168 76.3955 24.6504C74.8291 23.0575 74.0459 21.1593 74.0459 18.9558V8.08407C74.0459 5.85398 74.8291 3.95575 76.3955 2.38938C77.9884 0.79646 79.8999 0 82.13 0H99.0149C101.245 0 103.143 0.79646 104.71 2.38938C106.303 3.95575 107.099 5.85398 107.099 8.08407V18.9558C107.099 21.1593 106.303 23.0575 104.71 24.6504C103.143 26.2168 101.245 27 99.0149 27Z"
              fill="#5C46E6"
            />
            <path
              d="M136.038 27H119.153C116.923 27 115.011 26.2168 113.418 24.6504C111.852 23.0575 111.069 21.1593 111.069 18.9558V8.08407C111.069 5.85398 111.852 3.95575 113.418 2.38938C115.011 0.79646 116.923 0 119.153 0H136.038C138.268 0 140.166 0.79646 141.733 2.38938C143.326 3.95575 144.122 8.08407 144.122 8.08407V18.9558C144.122 21.1593 143.326 23.0575 141.733 24.6504C140.166 26.2168 138.268 27 136.038 27Z"
              fill="#5C46E6"
            />
            <circle cx="81.8028" cy="7.87821" r="4.14823" fill="white" />
            <circle cx="119.966" cy="7.87821" r="4.14823" fill="white" /></svg></span
      ></nuxt-link>
      <h4 class="flex text-black text-[24px] font-semibold mt-[31px] xl:text-[20px]">
        Foydalanuvchi turini tanlang
      </h4>

      <p
        class="text-base text-grey-64 mt-4 text-center max-w-[90%] xl:text-[14px] xl:leading-5"
      >
        ищу работу ищу работу ищу работу ищу работу ищу работу ищу работу
      </p>
    </div>
    <div>
      <a-form-model ref="ruleForm" :model="form" :rules="rules">
        <div class="flex flex-col gap-8 pb-12 xl:gap-6 xl:pb-0">
          <!-- <a-form-model-item ref="name" class="form-item" label="Ismingizni" prop="name">
            <a-input v-model="form.name" placeholder="Ismingizni kiriting" />
          </a-form-model-item> -->
          <a-form-model-item
            ref="name"
            class="form-item"
            label="Kompaniya nomi"
            prop="company_data.name"
          >
            <a-input v-model="form.company_data.name" placeholder="Kompaniya nomi" />
          </a-form-model-item>
          <a-form-model-item
            ref="name"
            class="form-item"
            label="Qisqacha ma'lumot"
            prop="company_data.info"
          >
            <a-input
              v-model="form.company_data.info"
              type="textarea"
              rows="5"
              placeholder="Ismingizni kiriting"
            />
          </a-form-model-item>
          <!-- <a-form-model-item ref="name" class="form-item" label="Viloyat tanlang">
            <a-select v-model="form.region_id" placeholder="Viloyat tanlang">
              <a-select-option
                :value="region?.id"
                v-for="region in regions"
                :key="region?.id"
              >
                {{ region?.name_ru }}</a-select-option
              >
            </a-select>
          </a-form-model-item> -->
        </div>
      </a-form-model>
    </div>
    <div
      class="buttons grid grid-cols-2 gap-4 xl:flex xl:flex-col-reverse xl:gap-2 xl:pt-6"
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
      >
        Saqlash
      </button>
    </div>

    <!-- Modal -->
  </div>
</template>
<script>
import moment from "moment";
export default {
  props: ["regions", "specialities"],
  data() {
    return {
      form: {
        phone_number: "",
        sms_code: null,
        company_data: {
          name: "",
          info: "",
        },
      },
      rules: {
        company_data: {
          name: [{ required: true, message: "This field is required", trigger: "blur" }],
          info: [{ required: true, message: "This field is required", trigger: "blur" }],
        },
      },
    };
  },
  mounted() {
    if (localStorage.getItem("phone"))
      this.form.phone_number = `998${localStorage.getItem("phone")}`;
    if (localStorage.getItem("accessCode"))
      this.form.sms_code = localStorage.getItem("accessCode");
  },
  methods: {
    onSubmit() {
      const data = {
        ...this.form,
      };
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.$emit("sendRegister", data);
        } else {
          return false;
        }
      });
    },
  },
};
</script>
<style lang="css" scoped>
.spicial-drawer :deep(.bottom-sheet__main) {
  height: 100%;
}
.client-types .activeF {
  border-color: var(--blue);
  background-color: var(--blue);
  color: #fff;
}
.client-types .activeC {
  border-color: var(--light-red);
  background-color: var(--light-red);
  color: #fff;
}

.client-types .activeC svg path,
.client-types .activeC svg circle,
.client-types .activeF svg path,
.client-types .activeF svg circle {
  stroke: #fff;
}
.form-item :deep(.ant-input) {
  border-radius: 8px;
  background: #fff;
  border: 1px solid var(--border-darik);
  height: 50px;
  color: var(--black);
  font-family: "TT Interfaces";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
}
.form-item :deep(.ant-input:focus) {
  border: 1px solid var(--blue);
  box-shadow: 0px 0px 0px 3px rgba(70, 105, 229, 0.2);
}
.form-item :deep(.ant-select-selection) {
  border-radius: 8px;
  background: #fff;
  height: 50px;
  color: var(--black);
  font-family: "TT Interfaces";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
}
:deep(.ant-select-selection:hover) {
  border-color: var(--blue);
}
:deep(.ant-select-open .ant-select-selection) {
  border: 1px solid var(--blue);
  box-shadow: 0px 0px 0px 3px rgba(70, 105, 229, 0.2);
}
.form-item :deep(.ant-select-selection__rendered) {
  height: 100%;
  display: flex;
  align-items: center;
}
.form-item :deep(.ant-select-selection__rendered .ant-select-selection-selected-value) {
  color: var(--grey-80, #353437);
  font-family: "TT Interfaces";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
}
.form-item :deep(.ant-form-item-label label) {
  color: var(--black);
  font-family: "TT Interfaces";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  position: relative;
  padding-right: 12px;
}
.form-item :deep(label::before) {
  position: absolute;
  right: -3px;
  top: 0;
}
.form-item :deep(label::after) {
  display: none;
}
.form-item :deep(.ant-radio-group) {
  width: 100%;
}
.type-radio {
  margin-right: 0 !important;
}
:deep(.ant-radio-inner::after) {
  width: 12px;
  height: 12px;
  background-color: var(--main-color);
}
:deep(.ant-radio-inner) {
  width: 20px;
  height: 20px;
  border-color: var(--main-color) !important;
  box-shadow: none !important;
  display: flex;
  align-items: center;
  justify-content: center;
}
.gender-btns .active {
  border-color: var(--blue);
}
.gender-btns .active h5 {
  color: var(--blue);
}
.modal :deep(.ant-modal-content) {
  border-radius: 30px;
}
.modal-body {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 40px;
}
.modal-list::-webkit-scrollbar {
  width: 4px;
}

/* Track */
.modal-list::-webkit-scrollbar-track {
  border-radius: 50px;
  background: var(--bg-grey);
  width: 4px;
}

/* Handle */
.modal-list::-webkit-scrollbar-thumb {
  width: 6px;
  border-radius: 50px;
  background: var(--border-darik);
}
.modal-list .active {
  border-color: var(--blue);
  color: var(--blue);
}
:deep(.ant-select-focused
    .ant-select-selection, .ant-select-selection:focus, .ant-select-selection:active) {
  border: 1px solid var(--blue);
  box-shadow: 0px 0px 0px 3px rgba(70, 105, 229, 0.2);
}
.drop-body {
  max-height: 0;
  /* height: 0; */
  overflow: hidden;
  transition: max-height 0.2s linear;
}
.drop-icon {
  transition: 0.2s linear;
}
.drop-list .active .drop-body {
  max-height: 200px;
  /* height: auto; */
}
.drop-list .active .drop-head h2 {
  color: var(--main-color);
}
.drop-head {
  transition: 0.2s linear;
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
  }
}
@media (max-width: 1200px) {
  .form-item :deep(.ant-form-item-label label) {
    font-size: 14px;
  }
  .form-item :deep(.ant-select-selection) {
    height: 44px;
    font-size: 14px;
  }
  .form-item :deep(.ant-input) {
    height: 44px;
    font-size: 14px;
  }
}
</style>
