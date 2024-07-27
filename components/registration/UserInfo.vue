<template lang="html">
  <div
    class="number-check flex flex-col px-[120px] gap-8 xl:gap-10 py-[80px] border border-solid border-grey-light rounded-3xl number-card xl:px-0 xl:border-0 xl:py-0"
  >
    <div class="flex flex-col items-center">
      <nuxt-link to="/">
        <span > <Logo /></span
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
          <a-form-model-item ref="name" class="form-item" label="Qisqacha ma'lumot">
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
        :class="{ 'pointer-events-none opacity-50': loading }"
      >
        <span v-if="!loading">Saqlash</span> <LoaderBtn v-else />
      </button>
    </div>

    <!-- Modal -->
  </div>
</template>
<script>
import moment from "moment";
import LoaderBtn from "../loader-btn.vue";
export default {
    props: ["regions", "specialities", "loading"],
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
                }
                else {
                    return false;
                }
            });
        },
    },
    components: { LoaderBtn }
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
