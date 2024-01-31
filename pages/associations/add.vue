<template lang="html">
  <div class="create pt-[120px] sm:pt-[60px] pb-[120px] max-w-[818px] mx-auto px-4">
    <div class="flex justify-between sm:items-center sm:flex-col sm:gap-4">
      <h4 class="text-[24px] decor-500 text-black sm:text-[20px]">Yangi Uyushma qo‘shish</h4>
      <div class="flex gap-3 sm:justify-end">
        <button
          @click="$router.go(-1)"
          class="h-12 px-5 rounded-xl bg-apple-grey flex items-center text-[14px] font-semibold text-black gap-2"
        >
          Bekor qilish<svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.4617 14.4441L5.575 5.55576M5.575 14.4441L14.4617 5.55576"
              stroke="#020105"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <button
          @click="onSubmit"
          class="h-12 px-5 rounded-xl bg-[#3C4BDC] flex items-center text-[14px] font-semibold text-white gap-2"
          :class="{ 'pointer-events-none opacity-50': loading }"
        >
          <span v-if="!loading">Saqlash</span> <LoaderBtn v-else />
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.4"
              d="M17.3333 9.00008C17.3333 13.6025 13.6024 17.3334 8.99999 17.3334C4.39762 17.3334 0.666656 13.6025 0.666656 9.00008C0.666656 4.39771 4.39762 0.666748 8.99999 0.666748C13.6024 0.666748 17.3333 4.39771 17.3333 9.00008Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.717 6.00668C12.9895 6.2186 13.0386 6.61127 12.8267 6.88374L9.48751 11.177C8.96774 11.8452 7.99007 11.9319 7.36079 11.3656L5.24856 9.46459C4.99199 9.23368 4.97119 8.83849 5.2021 8.58193C5.43301 8.32536 5.8282 8.30456 6.08476 8.53547L8.197 10.4365C8.2869 10.5174 8.42656 10.505 8.50082 10.4095L11.84 6.11632C12.0519 5.84385 12.4446 5.79476 12.717 6.00668Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </div>
    <a-form-model ref="ruleForm" :model="form" :rules="rules">
      <div class="body mt-11 flex flex-col gap-6">
        <div class="banner">
          <a-upload
            v-show="fileList.length == 0"
            class="banner-upload"
            :action="`${base_url}/upload_image`"
            :fileList="fileList"
            @change="handleChange"
            :headers="headers"
            @preview="handlePreview"
          >
            <div class="flex justify-center flex-col items-center w-full gap-[10px]">
              <svg
                width="31"
                height="30"
                viewBox="0 0 31 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.4"
                  d="M0.935135 6C0.935135 2.68629 3.56334 0 6.80541 0H24.4162C27.6583 0 30.2865 2.68629 30.2865 6V24C30.2865 27.3137 27.6583 30 24.4162 30H6.80541C3.56334 30 0.935135 27.3137 0.935135 24V6Z"
                  fill="#3C4BDC"
                />
                <path
                  d="M6.80541 29.9998H24.4162C27.6583 29.9998 30.2865 27.3135 30.2865 23.9998V17.9998L25.9733 14.8256C23.732 13.1763 20.6691 13.3467 18.6163 15.2351L12.6054 20.7645C10.5526 22.6528 7.48958 22.8233 5.24833 21.1739L0.935135 17.9998V23.9998C0.935135 27.3135 3.56334 29.9998 6.80541 29.9998Z"
                  fill="#3C4BDC"
                />
                <ellipse cx="10.4743" cy="9.75" rx="3.66892" ry="3.75" fill="#3C4BDC" />
              </svg>
              <p class="text-base font-semibold text-black">Uyushma rasmini kiriting</p>
              <button
                class="px-5 py-[10px] bg-white rounded-[500px] text-[14px] font-semibold text-[#3C4BDC]"
              >
                Rasmni tanlash
              </button>
            </div>
          </a-upload>
          <div class="banner-image overflow-hidden" v-show="fileList.length != 0">
            <span v-if="imgLoad" class="flex items-center justify-center w-fuu h-full"
              ><a-spin>
                <a-icon slot="indicator" type="loading" style="font-size: 24px"></a-icon
              ></a-spin>
            </span>
            <div class="flex w-full h-full relative items-center justify-center" v-else>
              <div class="px-6 py-4 rounded-3xl flex gap-6 upload-btns absolute">
                <!-- <button>
                    <svg
                      width="33"
                      height="32"
                      viewBox="0 0 33 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.5 8L16.5 4M16.5 4L20.5 8M16.5 4L16.5 20"
                        stroke="#020105"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10.5 12L8.5 12C6.29086 12 4.5 13.7909 4.5 16L4.5 24C4.5 26.2091 6.29086 28 8.5 28L24.5 28C26.7091 28 28.5 26.2091 28.5 24L28.5 16C28.5 13.7909 26.7091 12 24.5 12L22.5 12"
                        stroke="#020105"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button> -->
                <!-- <span class="flex bg-white w-[1px] h-[27px] items-center"></span> -->
                <button @click="handleRemove">
                  <svg
                    width="33"
                    height="32"
                    viewBox="0 0 33 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.16667 10.6665V23.9998C7.16667 26.9454 9.55448 29.3332 12.5 29.3332H20.5C23.4455 29.3332 25.8333 26.9454 25.8333 23.9998V10.6665M19.1667 14.6665V22.6665M13.8333 14.6665L13.8333 22.6665M21.8333 6.6665L19.9583 3.85397C19.4637 3.11211 18.6311 2.6665 17.7395 2.6665H15.2605C14.3689 2.6665 13.5363 3.11211 13.0417 3.85397L11.1667 6.6665M21.8333 6.6665H11.1667M21.8333 6.6665H28.5M11.1667 6.6665H4.5"
                      stroke="#020105"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <img class="w-full h-full object-cover" :src="image" alt="" />
            </div>
          </div>
        </div>
        <div
          class="qr-code sm:px-4 sm:py-4 px-6 py-6 rounded-[30px] border-[2px] border-solid border-bg-grey"
        >
          <div class="image w-[100px] h-[100px]">
            <img class="w-full h-full" src="@/assets/images/image 2.png" alt="" />
          </div>
          <div class="body flex flex-col gap-2 items-start justify-center sm:items-center">
            <p class="text-base text-black sm:flex sm:flex-col sm:items-center">
              Uyushma havolasi:
              <a
                class="text-base text-black underline sm:text-center"
                href="https://www.figma.com/proto/5m2C"
                >https://www.figma.com/proto/5m2C</a
              >
            </p>
            <a
              href=""
              class="flex gap-[6px] items-center h-8 px-2 text-[#3C4BDC] text-base font-medium bg-bg-grey"
              >QR kodni yuklab olish<svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.59085 13.4327C3.28251 13.4327 2.22168 12.3719 2.22168 11.0636C2.22168 9.75522 3.28251 8.69439 4.59085 8.69439C4.59085 6.07772 6.71251 3.95605 9.32918 3.95605C11.2875 3.95605 12.9675 5.14439 13.69 6.83939C13.9308 6.78439 14.1792 6.74855 14.4367 6.74855C16.2825 6.74855 17.7783 8.24439 17.7783 10.0902C17.7783 11.9361 16.2825 13.4319 14.4367 13.4319M11.8767 13.0694L9.56918 15.3769L7.26251 13.0694M9.56918 15.3702V10.0002"
                  stroke="#3C4BDC"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
        <div class="about-block px-6 py-6 rounded-[30px] bg-bg-grey sm:rounded-2xl sm:px-4 sm:py-4">
          <h5 class="decor-500 text-[24px] text-black sm:text-[18px]">Uyushma haqida</h5>
          <div class="mt-4 flex flex-col gap-4">
            <a-form-model-item prop="title.ru">
              <p class="text-base font-semibold text-black mb-2">Uyushma nomi</p>
              <input
                type="text"
                v-model="form.title.ru"
                placeholder="Uyushma nomini kiriting"
                class="border w-full border-solid border-border-darik min-h-[54px] bg-white rounded-lg px-4 text-base"
              />
            </a-form-model-item>
            <div class="grid grid-cols-2 gap-4 sm:grid-cols-1">
              <a-form-model-item ref="name" class="form-item" prop="category">
                <p class="text-base font-semibold text-black mb-2">Uyushma yo‘nalishi</p>
                <a-select
                  v-model="form.category"
                  placeholder="Uyushma yo‘nalishini tanlang"
                >
                  <a-select-option
                    :value="region?.id"
                    v-for="region in categories"
                    :key="region?.id"
                  >
                    {{ region?.title }}</a-select-option
                  >
                </a-select>
              </a-form-model-item>
              <span></span>
              <a-form-model-item ref="name" class="form-item" prop="category">
                <p class="text-base font-semibold text-black mb-2">Uyushma turi</p>
                <a-select v-model="form.public">
                  <a-select-option
                    :value="region.value"
                    v-for="(region, index) in associalType"
                    :key="index"
                  >
                    {{ region.title }}</a-select-option
                  >
                </a-select>
              </a-form-model-item>
              <div class="flex flex-col gap-6">
                <p class="text-base text-black italic font-medium">
                  <span class="font-bold">Publik</span> - uyushba malumotlar va
                  ishtirokchilari barcha uchun ochiq boladi.
                </p>
                <p class="text-base text-black italic font-medium">
                  <span class="font-bold">Yopiq</span> - uyushma malumotlari faqat link
                  orqali korish imkoniyati boladi. justlink.uz saytidaham chiqmaydi
                </p>
              </div>
            </div>
          </div>
          <div class="mt-4 mb-4">
            <a-form-model-item>
              <p class="text-base font-semibold text-black mb-2">
                OUyushma haqida qisqacha malumot
              </p>
              <quill-editor
                style="min-height: 250px"
                :options="editorOption"
                :value="form.desc.ru"
                v-model="form.desc.ru"
              />
            </a-form-model-item>
          </div>
        </div>

        <div class="about-block px-6 py-6 rounded-[30px] bg-bg-grey sm:rounded-2xl sm:px-4 sm:py-4">
          <h5 class="decor-500 text-[24px] text-black sm:text-[18px]">Ijtimoiy tarmoqlar</h5>
          <div class="w-full grid grid-cols-2 gap-4 mt-4 sm:grid-cols-1">
            <a-form-model-item class="form-item">
              <p class="text-base font-semibold text-black mb-3 sm:text-[14px]">
                Chat uchun telegram gruppa (agar mavjud bo‘lsa)
              </p>
              <div class="relative w-full flex items-center">
                <a-input
                  class="w-full min-h-[50px] rounded-[8px]"
                  v-model="form.telegram_chat"
                  placeholder="@"
                  type="text"
                />
                <svg
                  class="absolute left-4"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.4">
                    <path
                      d="M2.89645 10.7969L18.2851 4.14624C19.0088 3.83349 19.7929 4.44207 19.6695 5.22072L17.5655 18.4967C17.4355 19.3167 16.4206 19.6304 15.8506 19.0266L12.3977 15.3691C11.7206 14.6518 11.6675 13.548 12.2727 12.7691L14.7107 9.63132C14.8501 9.45195 14.63 9.21597 14.4414 9.34253L9.59406 12.5944C8.77148 13.1462 7.77341 13.3732 6.79309 13.2314L3.15003 12.7045C2.15204 12.5602 1.97083 11.1969 2.89645 10.7969Z"
                      fill="#1878F3"
                    />
                  </g>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M19.411 4.37946L14.6491 9.33258C14.5897 9.29872 14.5133 9.29431 14.4414 9.34253L9.59406 12.5944C8.77148 13.1462 7.77341 13.3732 6.79309 13.2314L3.15003 12.7045C2.15204 12.5602 1.97083 11.1969 2.89645 10.7969L18.2851 4.14624C18.7021 3.96606 19.139 4.09169 19.411 4.37946Z"
                    fill="#1878F3"
                  />
                </svg>
              </div>
            </a-form-model-item>
            <a-form-model-item class="form-item">
              <p class="text-base font-semibold text-black mb-3 sm:text-[14px]">
                Uyushma Telegram sahifasi
              </p>
              <div class="relative w-full flex items-center">
                <a-input
                  class="w-full min-h-[50px] rounded-[8px]"
                  v-model="form.telegram_channel"
                  placeholder="@"
                  type="text"
                />
                <svg
                  class="absolute left-4"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.90891 11.0952L19.2976 4.44458C20.0212 4.13183 20.8054 4.74041 20.682 5.51906L18.5779 18.795C18.448 19.6151 17.4331 19.9287 16.8631 19.325L13.5295 15.7699C12.8523 15.0526 12.7992 13.9488 13.4045 13.1698L15.7232 9.92966C15.8626 9.75029 15.6425 9.51431 15.4538 9.64086L10.6065 12.8927C9.78393 13.4445 8.78586 13.6715 7.80554 13.5297L4.16248 13.0028C3.16449 12.8585 2.98328 11.4952 3.90891 11.0952Z"
                    stroke="#1878F3"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </a-form-model-item>
            <a-form-model-item class="form-item">
              <p class="text-base font-semibold text-black mb-3 sm:text-[14px]">Instagram sahifasi</p>
              <div class="relative w-full flex items-center">
                <a-input
                  class="w-full min-h-[50px] rounded-[8px]"
                  v-model="form.instagram"
                  placeholder="@"
                  type="text"
                />
                <svg
                  class="absolute left-4"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.0105 6.98963L17.0126 6.99091M10.7556 21.2458H13.2446C16.0448 21.2458 17.445 21.2458 18.5145 20.7008C19.4553 20.2215 20.2202 19.4566 20.6996 18.5158C21.2446 17.4462 21.2446 16.0461 21.2446 13.2458V10.7568C21.2446 7.95657 21.2446 6.55644 20.6996 5.48688C20.2202 4.54607 19.4553 3.78117 18.5145 3.3018C17.445 2.75684 16.0448 2.75684 13.2446 2.75684H10.7556C7.95535 2.75684 6.55522 2.75684 5.48566 3.3018C4.54485 3.78117 3.77995 4.54607 3.30058 5.48688C2.75562 6.55644 2.75562 7.95658 2.75562 10.7568V13.2458C2.75562 16.0461 2.75562 17.4462 3.30058 18.5158C3.77995 19.4566 4.54485 20.2215 5.48566 20.7008C6.55522 21.2458 7.95535 21.2458 10.7556 21.2458ZM15.6651 12.0016C15.6651 14.0247 14.0251 15.6647 12.002 15.6647C9.97897 15.6647 8.33894 14.0247 8.33894 12.0016C8.33894 9.97858 9.97897 8.33855 12.002 8.33855C14.0251 8.33855 15.6651 9.97858 15.6651 12.0016Z"
                    stroke="#EF5DA8"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </a-form-model-item>
            <a-form-model-item class="form-item">
              <p class="text-base font-semibold text-black mb-3 sm:text-[14px]">Facebook sahifasi</p>
              <div class="relative w-full flex items-center">
                <a-input
                  class="w-full min-h-[50px] rounded-[8px]"
                  v-model="form.feacebook"
                  placeholder="https://"
                  type="text"
                />
                <svg
                  class="absolute left-4"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 3H15C12.2386 3 10 5.23858 10 8V10H6V14H10V21H14V14H18V10H14V8C14 7.44772 14.4477 7 15 7H18V3Z"
                    stroke="#28303F"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </a-form-model-item>
          </div>
        </div>

        <div class="about-block px-6 py-6 rounded-[30px] bg-bg-grey sm:rounded-2xl sm:px-4 sm:py-4">
          <h5 class="decor-500 text-[24px] text-black sm:text-[18px]">Aloqa uchun:</h5>
          <div class="max-w-[470px] flex flex-col gap-4 mt-4">
            <a-form-model-item class="form-item">
              <p class="text-base font-semibold text-black mb-3 sm:text-[14px]">Telefon raqami</p>
              <div class="relative w-full flex items-center">
                <a-input
                  class="w-full min-h-[50px] rounded-[8px]"
                  v-model="form.phone_number"
                  placeholder="+998"
                  v-mask="'+998 ## ### ## ##'"
                  type="text"
                />
                <svg
                  class="absolute left-4"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 19V17.3541C21 16.5363 20.5021 15.8008 19.7428 15.4971L17.7086 14.6835C16.7429 14.2971 15.6422 14.7156 15.177 15.646L15 16C15 16 12.5 15.5 10.5 13.5C8.5 11.5 8 9 8 9L8.35402 8.82299C9.28438 8.35781 9.70285 7.25714 9.31654 6.29136L8.50289 4.25722C8.19916 3.4979 7.46374 3 6.64593 3L5 3C3.89543 3 3 3.89543 3 5C3 13.8366 10.1634 21 19 21C20.1046 21 21 20.1046 21 19Z"
                    stroke="#009A10"
                    stroke-width="1.5"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </a-form-model-item>
            <a-form-model-item class="form-item">
              <p class="text-base font-semibold text-black mb-3 sm:text-[14px]">Telegram @nickname</p>
              <div class="relative w-full flex items-center">
                <a-input
                  class="w-full min-h-[50px] rounded-[8px]"
                  v-model="form.telegram"
                  placeholder="@"
                  type="text"
                />
                <svg
                  class="absolute left-4"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.90891 11.0952L19.2976 4.44458C20.0212 4.13183 20.8054 4.74041 20.682 5.51906L18.5779 18.795C18.448 19.6151 17.4331 19.9287 16.8631 19.325L13.5295 15.7699C12.8523 15.0526 12.7992 13.9488 13.4045 13.1698L15.7232 9.92966C15.8626 9.75029 15.6425 9.51431 15.4538 9.64086L10.6065 12.8927C9.78393 13.4445 8.78586 13.6715 7.80554 13.5297L4.16248 13.0028C3.16449 12.8585 2.98328 11.4952 3.90891 11.0952Z"
                    stroke="#1878F3"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </a-form-model-item>
          </div>
          <div class="mt-4">
            <a-form-model-item class="form-item">
              <p class="text-base font-semibold text-black mb-3 sm:text-[14px]">Qo‘shimcha malumot:</p>
              <quill-editor
                style="min-height: 250px"
                :options="editorOption"
                :value="form.owner_info.ru"
                v-model="form.owner_info.ru"
              />
            </a-form-model-item>
          </div>
        </div>
        <div class="about-block px-6 py-6 rounded-[30px] bg-bg-grey sm:rounded-2xl sm:px-4 sm:py-4">
          <h5 class="decor-500 text-[24px] text-black sm:text-[18px]">Media materiallar</h5>
          <div class="px-[28px] py-[28px] rounded-xl bg-white mt-4 flex flex-col gap-4">
            <div
              v-show="form.files.length > 0"
              class="file-upload-item"
              v-for="(item, index) in form.files"
              :key="index"
            >
            <div>
                <a-upload
                  class="file-upload"
                  :disabled="!!item.file"
                  :action="`${base_url}/upload_image`"
                  @change="($event) => handleChangeFile($event, item.indexId)"
                  :headers="headers"
                  @preview="handlePreview"
                >
                  <div
                    class="relative w-[267px] h-[50px] border rounded-lg border-dashed border-[#3C4BDC] flex items-center justify-center bg-white sm:w-full"
                  >
                    <div>
                      <p class="text-base text-black">
                        {{ item.file ? "Faylni yuklangan" : `Faylni yuklang` }}
                      </p>
                    </div>
                    <svg
                      v-if="!!item.file"
                      class="absolute right-4"
                      width="20"
                      height="20"
                      viewBox="0 0 36 36"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        d="M4.88379 27L4.88379 9C4.88379 5.68629 7.512 3 10.7541 3L19.5595 3L31.3 15V27C31.3 30.3137 28.6718 33 25.4297 33H10.7541C7.512 33 4.88379 30.3137 4.88379 27Z"
                        fill="#1878F3"
                      />
                      <path
                        d="M19.5596 9L19.5596 3L31.3001 15L25.4298 15C22.1878 15 19.5596 12.3137 19.5596 9Z"
                        fill="#1878F3"
                      />
                      <path
                        d="M15.157 26.6085V18.3915C15.157 17.5882 16.0563 17.1128 16.7201 17.5651L22.7496 21.6736C23.3321 22.0705 23.3321 22.9295 22.7496 23.3264L16.7201 27.4349C16.0563 27.8872 15.157 27.4118 15.157 26.6085Z"
                        fill="#1878F3"
                      />
                    </svg>

                    <svg
                      v-else
                      class="absolute right-4"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        d="M18.3694 14.1667V8.33333C18.3694 6.49238 16.9093 5 15.1081 5H12.9339C12.2283 5 11.5417 4.76607 10.9772 4.33333L9.45526 3.16667C8.89075 2.73393 8.20414 2.5 7.4985 2.5H5.32433C3.52318 2.5 2.06306 3.99238 2.06306 5.83333V14.1667C2.06306 16.0076 3.52318 17.5 5.32433 17.5H15.1081C16.9093 17.5 18.3694 16.0076 18.3694 14.1667Z"
                        fill="#3C4BDC"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M9.60473 9.85661C9.56669 9.88584 9.53019 9.91815 9.49557 9.95353L8.20266 11.275C7.96386 11.5191 7.57668 11.5191 7.33788 11.275C7.09908 11.0309 7.09908 10.6352 7.33788 10.3911L8.6308 9.06965C9.5064 8.1747 10.926 8.1747 11.8016 9.06965L13.0945 10.3911C13.3333 10.6352 13.3333 11.0309 13.0945 11.275C12.8557 11.5191 12.4686 11.5191 12.2298 11.275L10.9369 9.95353C10.9022 9.91815 10.8657 9.88584 10.8277 9.85661V13.3331C10.8277 13.6783 10.5539 13.9581 10.2162 13.9581C9.8785 13.9581 9.60473 13.6783 9.60473 13.3331V9.85661Z"
                        fill="#3C4BDC"
                      />
                    </svg>
                  </div>
                </a-upload>
              </div>
              <span class="w-full sm:hidden">
              <a-form-model-item class="w-full sm:hidden">
                <input
                  placeholder="File nomini kiriting"
                  class="border w-full border-solid border-border-darik min-h-[50px] bg-white rounded-lg px-4 sm:hidden"
                  type="text"
                  v-model="item.name.ru"
                />
              </a-form-model-item>
              </span>
              <button class="sm:hidden" @click="deleteFile(item.indexId)">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.4">
                    <path
                      d="M11.7196 18.9582H8.30521C6.09607 18.9582 4.30521 17.1673 4.30521 14.9582V4.7915H15.7196V14.9582C15.7196 17.1673 13.9288 18.9582 11.7196 18.9582Z"
                      fill="#FF0000"
                    />
                  </g>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.643 8.33301C11.9808 8.33301 12.2545 8.61283 12.2545 8.95801L12.2545 13.958C12.2545 14.3032 11.9808 14.583 11.643 14.583C11.3053 14.583 11.0316 14.3032 11.0316 13.958L11.0316 8.95801C11.0316 8.61283 11.3053 8.33301 11.643 8.33301Z"
                    fill="#FF0000"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.38178 8.33301C8.7195 8.33301 8.99327 8.61283 8.99327 8.95801L8.99327 13.958C8.99327 14.3032 8.7195 14.583 8.38178 14.583C8.04407 14.583 7.77029 14.3032 7.77029 13.958L7.77029 8.95801C7.77029 8.61283 8.04407 8.33301 8.38178 8.33301Z"
                    fill="#FF0000"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.38891 2.68698C7.80474 2.04944 8.5048 1.6665 9.25446 1.6665H10.7703C11.52 1.6665 12.2201 2.04944 12.6359 2.68698L13.6009 4.1665H17.3502C17.688 4.1665 17.9617 4.44633 17.9617 4.7915C17.9617 5.13668 17.688 5.4165 17.3502 5.4165H2.67457C2.33685 5.4165 2.06308 5.13668 2.06308 4.7915C2.06308 4.44633 2.33685 4.1665 2.67457 4.1665H6.42389L7.38891 2.68698Z"
                    fill="#FF0000"
                  />
                </svg>
              </button>
              <div class="hidden sm:flex gap-2">
                <a-form-model-item class="w-full">
                <input
                  placeholder="File nomini kiriting"
                  class="border w-full border-solid border-border-darik min-h-[50px] bg-white rounded-lg px-4"
                  type="text"
                  v-model="item.name.ru"
                />
              </a-form-model-item>
              <button @click="deleteFile(item.indexId)">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.4">
                    <path
                      d="M11.7196 18.9582H8.30521C6.09607 18.9582 4.30521 17.1673 4.30521 14.9582V4.7915H15.7196V14.9582C15.7196 17.1673 13.9288 18.9582 11.7196 18.9582Z"
                      fill="#FF0000"
                    />
                  </g>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.643 8.33301C11.9808 8.33301 12.2545 8.61283 12.2545 8.95801L12.2545 13.958C12.2545 14.3032 11.9808 14.583 11.643 14.583C11.3053 14.583 11.0316 14.3032 11.0316 13.958L11.0316 8.95801C11.0316 8.61283 11.3053 8.33301 11.643 8.33301Z"
                    fill="#FF0000"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.38178 8.33301C8.7195 8.33301 8.99327 8.61283 8.99327 8.95801L8.99327 13.958C8.99327 14.3032 8.7195 14.583 8.38178 14.583C8.04407 14.583 7.77029 14.3032 7.77029 13.958L7.77029 8.95801C7.77029 8.61283 8.04407 8.33301 8.38178 8.33301Z"
                    fill="#FF0000"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.38891 2.68698C7.80474 2.04944 8.5048 1.6665 9.25446 1.6665H10.7703C11.52 1.6665 12.2201 2.04944 12.6359 2.68698L13.6009 4.1665H17.3502C17.688 4.1665 17.9617 4.44633 17.9617 4.7915C17.9617 5.13668 17.688 5.4165 17.3502 5.4165H2.67457C2.33685 5.4165 2.06308 5.13668 2.06308 4.7915C2.06308 4.44633 2.33685 4.1665 2.67457 4.1665H6.42389L7.38891 2.68698Z"
                    fill="#FF0000"
                  />
                </svg>
              </button>
              </div>
              <!-- <div>
                <a-upload
                  class="file-upload"
                  :disabled="!!item.file"
                  :action="`${base_url}/upload_image`"
                  @change="($event) => handleChangeFile($event, item.indexId)"
                  :headers="headers"
                  @preview="handlePreview"
                >
                  <div
                    class="relative w-[267px] h-[50px] border rounded-lg border-dashed border-[#3C4BDC] flex items-center justify-center bg-white"
                  >
                    <div>
                      <p class="text-base text-black">
                        {{ item.file ? "Faylni yuklangan" : `Faylni yuklang` }}
                      </p>
                    </div>
                    <svg
                      v-if="!!item.file"
                      class="absolute right-4"
                      width="20"
                      height="20"
                      viewBox="0 0 36 36"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        d="M4.88379 27L4.88379 9C4.88379 5.68629 7.512 3 10.7541 3L19.5595 3L31.3 15V27C31.3 30.3137 28.6718 33 25.4297 33H10.7541C7.512 33 4.88379 30.3137 4.88379 27Z"
                        fill="#1878F3"
                      />
                      <path
                        d="M19.5596 9L19.5596 3L31.3001 15L25.4298 15C22.1878 15 19.5596 12.3137 19.5596 9Z"
                        fill="#1878F3"
                      />
                      <path
                        d="M15.157 26.6085V18.3915C15.157 17.5882 16.0563 17.1128 16.7201 17.5651L22.7496 21.6736C23.3321 22.0705 23.3321 22.9295 22.7496 23.3264L16.7201 27.4349C16.0563 27.8872 15.157 27.4118 15.157 26.6085Z"
                        fill="#1878F3"
                      />
                    </svg>

                    <svg
                      v-else
                      class="absolute right-4"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        d="M18.3694 14.1667V8.33333C18.3694 6.49238 16.9093 5 15.1081 5H12.9339C12.2283 5 11.5417 4.76607 10.9772 4.33333L9.45526 3.16667C8.89075 2.73393 8.20414 2.5 7.4985 2.5H5.32433C3.52318 2.5 2.06306 3.99238 2.06306 5.83333V14.1667C2.06306 16.0076 3.52318 17.5 5.32433 17.5H15.1081C16.9093 17.5 18.3694 16.0076 18.3694 14.1667Z"
                        fill="#3C4BDC"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M9.60473 9.85661C9.56669 9.88584 9.53019 9.91815 9.49557 9.95353L8.20266 11.275C7.96386 11.5191 7.57668 11.5191 7.33788 11.275C7.09908 11.0309 7.09908 10.6352 7.33788 10.3911L8.6308 9.06965C9.5064 8.1747 10.926 8.1747 11.8016 9.06965L13.0945 10.3911C13.3333 10.6352 13.3333 11.0309 13.0945 11.275C12.8557 11.5191 12.4686 11.5191 12.2298 11.275L10.9369 9.95353C10.9022 9.91815 10.8657 9.88584 10.8277 9.85661V13.3331C10.8277 13.6783 10.5539 13.9581 10.2162 13.9581C9.8785 13.9581 9.60473 13.6783 9.60473 13.3331V9.85661Z"
                        fill="#3C4BDC"
                      />
                    </svg>
                  </div>
                </a-upload>
              </div>
              <a-form-model-item class="w-full">
                <input
                  placeholder="File nomini kiriting"
                  class="border w-full border-solid border-border-darik min-h-[50px] bg-white rounded-lg px-4"
                  type="text"
                  v-model="item.name.ru"
                />
              </a-form-model-item>
              <button @click="deleteFile(item.indexId)">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.4">
                    <path
                      d="M11.7196 18.9582H8.30521C6.09607 18.9582 4.30521 17.1673 4.30521 14.9582V4.7915H15.7196V14.9582C15.7196 17.1673 13.9288 18.9582 11.7196 18.9582Z"
                      fill="#FF0000"
                    />
                  </g>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.643 8.33301C11.9808 8.33301 12.2545 8.61283 12.2545 8.95801L12.2545 13.958C12.2545 14.3032 11.9808 14.583 11.643 14.583C11.3053 14.583 11.0316 14.3032 11.0316 13.958L11.0316 8.95801C11.0316 8.61283 11.3053 8.33301 11.643 8.33301Z"
                    fill="#FF0000"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.38178 8.33301C8.7195 8.33301 8.99327 8.61283 8.99327 8.95801L8.99327 13.958C8.99327 14.3032 8.7195 14.583 8.38178 14.583C8.04407 14.583 7.77029 14.3032 7.77029 13.958L7.77029 8.95801C7.77029 8.61283 8.04407 8.33301 8.38178 8.33301Z"
                    fill="#FF0000"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.38891 2.68698C7.80474 2.04944 8.5048 1.6665 9.25446 1.6665H10.7703C11.52 1.6665 12.2201 2.04944 12.6359 2.68698L13.6009 4.1665H17.3502C17.688 4.1665 17.9617 4.44633 17.9617 4.7915C17.9617 5.13668 17.688 5.4165 17.3502 5.4165H2.67457C2.33685 5.4165 2.06308 5.13668 2.06308 4.7915C2.06308 4.44633 2.33685 4.1665 2.67457 4.1665H6.42389L7.38891 2.68698Z"
                    fill="#FF0000"
                  />
                </svg>
              </button> -->
            </div>
            <a-empty v-show="form.files.length == 0" />
          </div>
          <div class="flex justify-center mt-4">
            <button
              @click="addFile"
              class="flex gap-1 px-5 py-[10px] rounded-[500px] bg-white text-[14px] font-semibold text-[#3C4BDC]"
            >
              Yana qoshish<svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.4"
                  d="M18.8333 9.99984C18.8333 14.6022 15.1024 18.3332 10.5 18.3332C5.89763 18.3332 2.16666 14.6022 2.16666 9.99984C2.16666 5.39747 5.89763 1.6665 10.5 1.6665C15.1024 1.6665 18.8333 5.39747 18.8333 9.99984Z"
                  fill="#3C4BDC"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.125 6.6665C11.125 6.32133 10.8452 6.0415 10.5 6.0415C10.1548 6.0415 9.87501 6.32133 9.87501 6.6665V9.37484H7.16667C6.82149 9.37484 6.54167 9.65466 6.54167 9.99984C6.54167 10.345 6.82149 10.6248 7.16667 10.6248H9.87501L9.87501 13.3332C9.87501 13.6783 10.1548 13.9582 10.5 13.9582C10.8452 13.9582 11.125 13.6783 11.125 13.3332V10.6248H13.8333C14.1785 10.6248 14.4583 10.345 14.4583 9.99984C14.4583 9.65466 14.1785 9.37484 13.8333 9.37484L11.125 9.37484V6.6665Z"
                  fill="#3C4BDC"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </a-form-model>
    <div class="flex gap-3 justify-center mt-4">
        <button
          @click="$router.go(-1)"
          class="h-12 px-5 rounded-xl bg-apple-grey flex items-center text-[14px] font-semibold text-black gap-2"
        >
          Bekor qilish<svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.4617 14.4441L5.575 5.55576M5.575 14.4441L14.4617 5.55576"
              stroke="#020105"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <button
          @click="onSubmit"
          class="h-12 px-5 rounded-xl bg-[#3C4BDC] flex items-center text-[14px] font-semibold text-white gap-2"
          :class="{ 'pointer-events-none opacity-50': loading }"
        >
          <span v-if="!loading">Saqlash</span> <LoaderBtn v-else />
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.4"
              d="M17.3333 9.00008C17.3333 13.6025 13.6024 17.3334 8.99999 17.3334C4.39762 17.3334 0.666656 13.6025 0.666656 9.00008C0.666656 4.39771 4.39762 0.666748 8.99999 0.666748C13.6024 0.666748 17.3333 4.39771 17.3333 9.00008Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.717 6.00668C12.9895 6.2186 13.0386 6.61127 12.8267 6.88374L9.48751 11.177C8.96774 11.8452 7.99007 11.9319 7.36079 11.3656L5.24856 9.46459C4.99199 9.23368 4.97119 8.83849 5.2021 8.58193C5.43301 8.32536 5.8282 8.30456 6.08476 8.53547L8.197 10.4365C8.2869 10.5174 8.42656 10.505 8.50082 10.4095L11.84 6.11632C12.0519 5.84385 12.4446 5.79476 12.717 6.00668Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    <a-modal v-model="visible" centered @ok="() => (modal2Visible = false)" :width="524">
      <div>
        <div class="pb-6 border-[0] border-b border-solid border-grey-8">
          <h4 class="decor-500 text-[24px] text-black sm:text-[18px]">Spiker qo’shish</h4>
        </div>
        <div class="flex justify-center items-center gap-4 mt-6">
          <a-upload
            v-show="!imageSpeaker"
            class="file-upload"
            :fileList="fileListSpeaker"
            :action="`${base_url}/upload_image`"
            @change="handleChangeSpeaker"
            :headers="headers"
            @preview="handlePreview"
          >
            <div
              class="relative w-[96px] h-[96px] border rounded-lg border-dashed border-grey-8 flex items-center justify-center bg-white"
            >
              <!-- <div>
                  <p class="text-base text-black">Fileni yuklang</p>
                </div> -->
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.4"
                  d="M18.3694 14.1667V8.33333C18.3694 6.49238 16.9093 5 15.1081 5H12.9339C12.2283 5 11.5417 4.76607 10.9772 4.33333L9.45526 3.16667C8.89075 2.73393 8.20414 2.5 7.4985 2.5H5.32433C3.52318 2.5 2.06306 3.99238 2.06306 5.83333V14.1667C2.06306 16.0076 3.52318 17.5 5.32433 17.5H15.1081C16.9093 17.5 18.3694 16.0076 18.3694 14.1667Z"
                  fill="#3C4BDC"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.60473 9.85661C9.56669 9.88584 9.53019 9.91815 9.49557 9.95353L8.20266 11.275C7.96386 11.5191 7.57668 11.5191 7.33788 11.275C7.09908 11.0309 7.09908 10.6352 7.33788 10.3911L8.6308 9.06965C9.5064 8.1747 10.926 8.1747 11.8016 9.06965L13.0945 10.3911C13.3333 10.6352 13.3333 11.0309 13.0945 11.275C12.8557 11.5191 12.4686 11.5191 12.2298 11.275L10.9369 9.95353C10.9022 9.91815 10.8657 9.88584 10.8277 9.85661V13.3331C10.8277 13.6783 10.5539 13.9581 10.2162 13.9581C9.8785 13.9581 9.60473 13.6783 9.60473 13.3331V9.85661Z"
                  fill="#3C4BDC"
                />
              </svg>
            </div>
          </a-upload>
          <div
            v-show="imageSpeaker"
            class="relative w-[96px] h-[96px] border rounded-lg border-dashed border-grey-8 flex items-center justify-center bg-white"
          >
            <img :src="imageSpeaker" alt="" />
          </div>
          <div class="flex gap-3">
            <button @click="deleteSpeakerImg">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 8V18C5 20.2091 6.79086 22 9 22H15C17.2091 22 19 20.2091 19 18V8M14 11V17M10 11L10 17M16 5L14.5937 2.8906C14.2228 2.3342 13.5983 2 12.9296 2H11.0704C10.4017 2 9.7772 2.3342 9.40627 2.8906L8 5M16 5H8M16 5H21M8 5H3"
                  stroke="#EB5757"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <button>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 6L12 3M12 3L15 6M12 3L12 15"
                  stroke="#5C46E6"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.5 9L7 9C4.79086 9 3 10.7909 3 13L3 17C3 19.2091 4.79086 21 7 21L17 21C19.2091 21 21 19.2091 21 17L21 13C21 10.7909 19.2091 9 17 9L16.5 9"
                  stroke="#5C46E6"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
        <a-form-model ref="ruleForm1" :model="formSpeaker" :rules="rules1">
          <div class="flex flex-col gap-4 mt-4">
            <a-form-model-item class="w-full" prop="name.ru">
              <p class="text-base font-semibold text w-full-black mb-3 text-black">
                F.I.SH
              </p>
              <input
                v-model="formSpeaker.name.ru"
                type="text"
                class="border w-full border-solid border-border-darik min-h-[48px] bg-white rounded-lg px-4 text-base"
                placeholder="F.I.SH"
              />
            </a-form-model-item>
            <a-form-model-item class="w-full" prop="job_title.ru">
              <p class="text-base font-semibold text w-full-black mb-3 text-black">
                Darajasi
              </p>
              <input
                v-model="formSpeaker.job_title.ru"
                type="text"
                class="border w-full border-solid border-border-darik min-h-[48px] bg-white rounded-lg px-4 text-base"
                placeholder="Darajasi"
              />
            </a-form-model-item>
            <a-form-model-item class="w-full" prop="company.ru">
              <p class="text-base font-semibold text w-full-black mb-3 text-black">
                Kompaniya nomi
              </p>
              <input
                type="text"
                v-model="formSpeaker.company.ru"
                class="border w-full border-solid border-border-darik min-h-[48px] bg-white rounded-lg px-4 text-base"
                placeholder="Kompaniya nomi"
              />
            </a-form-model-item>
            <div class="flex gap-3 justify-end mt-2">
              <button
                @click="visible = false"
                class="h-12 px-5 rounded-xl bg-apple-grey flex items-center text-[14px] font-semibold text-black gap-2"
              >
                Bekor qilish<svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.4617 14.4441L5.575 5.55576M5.575 14.4441L14.4617 5.55576"
                    stroke="#020105"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
              <button
                @click="onSubmitSpeaker"
                class="h-12 px-5 rounded-xl bg-[#3C4BDC] flex items-center text-[14px] font-semibold text-white gap-2"
              >
                Saqlash
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.4"
                    d="M17.3333 9.00008C17.3333 13.6025 13.6024 17.3334 8.99999 17.3334C4.39762 17.3334 0.666656 13.6025 0.666656 9.00008C0.666656 4.39771 4.39762 0.666748 8.99999 0.666748C13.6024 0.666748 17.3333 4.39771 17.3333 9.00008Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.717 6.00668C12.9895 6.2186 13.0386 6.61127 12.8267 6.88374L9.48751 11.177C8.96774 11.8452 7.99007 11.9319 7.36079 11.3656L5.24856 9.46459C4.99199 9.23368 4.97119 8.83849 5.2021 8.58193C5.43301 8.32536 5.8282 8.30456 6.08476 8.53547L8.197 10.4365C8.2869 10.5174 8.42656 10.505 8.50082 10.4095L11.84 6.11632C12.0519 5.84385 12.4446 5.79476 12.717 6.00668Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
          </div>
        </a-form-model>
      </div>
      <template slot="footer"></template>
    </a-modal>
  </div>
</template>
<script>
import Loader from "@/components/Loader.vue";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
import SpeakersCard from "@/components/SpeakersCard.vue";
import moment from "moment";
import communitiesApi from "../../api/communitiesApi";
import LoaderBtn from "../../components/loader-btn.vue";
function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}
export default {
  data() {
    return {
      visible: false,
      associalType: [
        {
          title: "Public",
          value: 1,
        },
        {
          title: "Private",
          value: 0,
        },
      ],
      editorOption: {
        theme: "snow",
      },
      loading: false,
      imgLoad: false,
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      form: {
        category: undefined,
        title: {
          ru: "",
          en: "",
        },
        desc: {
          ru: "",
          en: "",
        },

        image: "",
        active: true,
        telegram: "",
        phone_number: "",
        owner_info: {
          ru: "",
          en: "",
        },
        files: [
          {
            indexId: 1,
            name: {
              ru: "",
              en: "",
            },
            file: "",
          },
        ],
        telegram_chat: "",
        telegram_channel: "",
        instagram: "",
        feacebook: "",
        public: 1,
      },
      rules: {
        start_date: [
          { required: true, message: "This field is required", trigger: "change" },
        ],
        title: {
          ru: [{ required: true, message: "This field is required", trigger: "change" }],
        },

        category: [
          { required: true, message: "This field is required", trigger: "change" },
        ],
      },
      rules1: {
        name: {
          ru: [{ required: true, message: "This field is required", trigger: "change" }],
        },
        job_title: {
          ru: [{ required: true, message: "This field is required", trigger: "change" }],
        },

        company: {
          ru: [{ required: true, message: "This field is required", trigger: "change" }],
        },
      },
      previewVisible: false,
      previewImage: "",
      fileList: [],
      base_url: process.env.BASE_URL || "https://networking.pythonanywhere.com/api",
      image: "",
      imageSpeaker: "",
      categories: [],
      fileListSpeaker: [],
      edit: null,
      formSpeaker: {
        image: "",
        show_img: "",
        name: {
          ru: "",
          en: "",
        },
        job_title: {
          ru: "",
          en: "",
        },
        company: {
          ru: "",
          en: "",
        },
      },
      markerLatLng: [41.311081, 69.240562],
      center: [41.311081, 69.240562],
    };
  },
  mounted() {
    this.__GET_CATEGORIES();
  },
  methods: {
    moment,
    onSubmit() {
      const data = {
        ...this.form,
        files: this.form.files.filter((elem) => elem.name.ru && elem.file),
        phone_number: Number(this.form.phone_number.replaceAll(" ", "").replace("+", "")),
        public: Boolean(this.form.public),
      };
      this.$refs.ruleForm.validate((valid) => valid && this.__POST_EVENTS(data));
    },
    async __GET_CATEGORIES() {
      try {
        const data = await communitiesApi.getCategories();
        this.categories = data?.data?.results;
      } catch (e) {
        console.log(e);
        this.$notification["error"]({
          message: "Error",
          description: e.response.statusText,
        });
      }
    },
    async __POST_EVENTS(form) {
      try {
        this.loading = true;
        const data = await communitiesApi.postCommunities(form);
        this.$notification["success"]({
          message: "Succes",
          description: `Uyushma muvaffaqiyatli qo'shildi`,
        });
        this.$router.push("/associations");
      } catch (e) {
        this.$notification["error"]({
          message: "Error",
          description: e.response.statusText,
        });
      } finally {
        this.loading = false;
      }
    },
    onChange() {},
    // handleChangeSelect(value) {
    //   this.specialities = value;
    // },
    handleCancel() {
      this.previewVisible = false;
    },
    async handlePreview(file) {
      if (!file.url && !file.preview) {
        file.preview = await getBase64(file.originFileObj);
      }
      this.previewImage = file.url || file.preview;
      this.previewVisible = true;
    },
    handleRemove() {
      this.fileList = [];
      this.image = "";
    },
    handleChange({ fileList }) {
      this.imgLoad = true;
      this.fileList = fileList;
      if (fileList[0]?.response?.upload_url) {
        this.form.image = fileList[0]?.response?.upload_url;
        this.image = fileList[0]?.response?.show_url;
        this.imgLoad = false;
      }
    },
    handleChangeFile({ fileList }, indexId) {
      if (fileList[0]?.response?.upload_url) {
        this.form.files.find((elem) => elem.indexId == indexId).file =
          fileList[0]?.response?.upload_url;
      }
    },
    deleteSpeakerImg() {
      this.imageSpeaker = "";
      this.formSpeaker.image = "";
      this.fileListSpeaker = [];
    },
    handleChangeSpeaker({ fileList }) {
      this.fileListSpeaker = fileList;
      if (fileList[0]?.response?.upload_url) {
        this.imageSpeaker = fileList[0]?.response?.show_url;
        this.formSpeaker.image = fileList[0]?.response?.upload_url;
        this.formSpeaker.show_img = fileList[0]?.response?.show_url;
      }
    },
    handleOk() {
      this.visible = false;
    },
    deleteFile(indexId) {
      this.form.files = this.form.files.filter((item) => item.indexId != indexId);
    },
    addFile() {
      this.form.files.push({
        indexId: this.form.files.length > 0 ? this.form.files.at(-1).indexId + 1 : 1,
        name: {
          ru: "",
          en: "",
        },
        file: "",
      });
    },
    async deleteEventFiles() {
      try {
        const data = await communitiesApi.deleteCommunityFiles({
          id: this.$route.params.id,
        });
        this.fileList = [];
        this.image = "";
      } catch (e) {
        this.$notification["error"]({
          message: "Error",
          description: e.response.statusText,
        });
      }
    },
    dateHandleChange(e) {
      this.form.start_date = e[0];
      this.form.end_date = e[1];
    },
    onSubmitSpeaker() {
      this.$refs.ruleForm1.validate((valid) => {
        if (valid) {
          if (this.edit) {
            let obj = this.form.speakers.find((elem) => elem.id == this.edit);
            obj = {
              ...this.formSpeaker,
              image: this.imageSpeaker,
            };
          } else {
            this.form.speakers.push({
              ...this.formSpeaker,
              indexId:
                this.form.speakers.length > 0 ? this.form.speakers.at(-1).indexId + 1 : 1,
            });
          }
          this.visible = false;
          console.log(this.form);
        }
      });
    },
    deleteSpeaker(indexId) {
      this.form.speakers = this.form.speakers.filter((item) => item.indexId != indexId);
    },
    editSpeaker(indexId) {
      this.formSpeaker = {
        ...this.form.speakers.find((item) => item.indexId == indexId),
      };
      this.edit = indexId;
      this.imageSpeaker = this.formSpeaker.image;
      this.visible = true;
    },
    handleMapClick(event) {
      // Update marker position on map click
      this.markerLatLng = [event.latlng.lat, event.latlng.lng];
      this.form.lat = event.latlng.lat;
      this.form.lon = event.latlng.lng;
    },
  },
  watch: {
    visible(val) {
      if (!val) {
        this.imageSpeaker = "";
        this.edit = null;
        this.fileListSpeaker = [];
        this.formSpeaker = {
          image: "",
          name: {
            ru: "",
            en: "",
          },
          job_title: {
            ru: "",
            en: "",
          },
          company: {
            ru: "",
            en: "",
          },
        };
      }
    },
  },
  components: { Loader, SpeakersCard, LoaderBtn },
};
</script>
<style lang="css" scoped>
:deep(.ant-modal-content) {
  border-radius: 30px;
  background: #fff;
}
:deep(.ant-modal-body) {
  padding: 32px 41px;
}
.banner-upload :deep(.ant-upload) {
  width: 100%;
  border-radius: 30px;
  border: 1px solid var(--grey-8, #ebebeb);
  background: var(--Apple-Grey, #f5f5f7);
  display: flex;
  height: 431px;
}
.banner-image {
  border-radius: 30px;
  border: 1px solid var(--grey-8, #ebebeb);
  height: 431px;
}
.upload-btns {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(12px);
}
.qr-code {
  display: grid;
  grid-template-columns: 100px 1fr;
  grid-gap: 24px;
}
:deep(.ql-toolbar.ql-snow) {
  border-radius: 10px 10px 0 0;
  background: #fff;
  border: none;
  border-bottom: 1px solid var(--grey-8, #ebebeb);
}
:deep(.ql-container) {
  border-radius: 0 0 10px 10px;
  background: #fff;
  border: none;
  min-height: 250px;
}
:deep(.ql-editor) {
  min-height: 250px;
}
.form-item :deep(input) {
  border-radius: 8px;
  border: 1px solid #e0e0ed;
  background: #fff;
  padding-left: 50px;
}
.file-upload-item {
  display: grid;
  grid-template-columns: 267px 1fr 20px;
  align-items: center;
  gap: 16px;
}
.form-item :deep(.ant-select-selection--single) {
  border-radius: 8px;
  border: 1px solid #ebebeb;
  background: #fff;
  height: 48px;
}
.form-item :deep(.ant-select-selection__rendered) {
  display: flex;
  align-items: center;
  height: 100%;
}
.date-item :deep(.ant-calendar-picker-input) {
  border-radius: 8px;
  border: 1px solid #e0e0ed;
  background: #fff;
  height: 48px;
}
:deep(.ant-calendar-range-picker-separator) {
  display: inline-flex;
  align-items: center;
}
@media (max-width: 576px) {
  .banner-upload :deep(.ant-upload) {
    border-radius: 24px;
    height: 214px;
  }
  .banner-image {
    border-radius: 24px;
    height: 214px;
  }
  .qr-code {
    display: flex;
    flex-direction: column;
    grid-gap: 16px;
    align-items: center;
  }
  :deep(.ql-editor) {
    min-height: 180px;
  }
  :deep(.ql-container) {
    min-height: 180px;
  }
  :deep(.ant-upload) {
    width: 100%;
  }
  .file-upload-item {
    grid-template-columns: 1fr;
  }
}
</style>
