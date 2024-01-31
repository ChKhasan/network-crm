<template lang="html">
  <div class="create pt-[22px] pb-[120px] max-w-[818px] mx-auto px-4">
    <div class="mb-[42px]">
      <button
        @click="$router.go(-1)"
        class="h-12 px-5 rounded-xl bg-apple-grey flex items-center text-[14px] font-semibold text-black gap-2"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.4">
            <path
              d="M14.1666 7.06844L14.1666 12.9317C14.1666 14.218 12.7712 15.0194 11.6601 14.3713L6.6345 11.4397C5.53199 10.7965 5.53199 9.20355 6.6345 8.56042L11.6601 5.62881C12.7712 4.98067 14.1666 5.78212 14.1666 7.06844Z"
              fill="#28303F"
            />
          </g>
        </svg>
        Uyushmalar royxatiga qaytish
      </button>
    </div>
    <div class="flex justify-between sm:flex-col sm:gap-4">
      <h4 class="text-[24px] decor-500 text-black sm:text-[20px]">Yangi uyushma qo‘shish</h4>
      <div class="flex gap-3 sm:justify-end">
        <button
          @click="visibleDelete = true"
          class="h-12 w-12 rounded-xl bg-apple-grey flex items-center justify-center text-[14px] font-semibold text-black gap-2"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.6234 7.77756V15.2767C15.6234 16.6576 14.5042 17.7767 13.1234 17.7767H7.01255C5.63171 17.7767 4.51255 16.6576 4.51255 15.2767L4.51255 7.77756M3.40088 4.44589L16.7342 4.44589M8.95671 2.22339L11.1792 2.22339M7.21838 8.88922L7.21838 14.4434M10.0675 8.88922L10.0675 14.4434M12.81 8.88922V14.4434"
              stroke="#FF0000"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <button
          @click="$router.push(`/association/${$route.params.id}`)"
          class="h-12 px-5 rounded-xl bg-[#3C4BDC] flex items-center text-[14px] font-semibold text-white gap-2"
        >
          O'zgartirish
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.1968 9.6172L12.1257 7.54607M7.13627 16.6784L16.6801 7.13465L12.8638 3.31835L3.31997 12.8621L3.31997 16.6794L7.13627 16.6784Z"
              stroke="white"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
    <a-form-model ref="ruleForm" :model="form" :rules="rules">
      <div class="body mt-11 flex flex-col gap-6">
        <div class="banner">
          <a-upload
            v-show="!image"
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
          <div class="banner-image overflow-hidden" v-show="image">
            <span v-if="imgLoad" class="flex items-center justify-center w-fuu h-full"
              ><a-spin>
                <a-icon slot="indicator" type="loading" style="font-size: 24px"></a-icon
              ></a-spin>
            </span>
            <div class="flex w-full h-full relative items-center justify-center" v-else>
              <div class="rounded-3xl flex gap-[9px] absolute left-3 bottom-3">
                <p
                  class="flex gap-2 rounded-[500px] px-5 py-[10px] bg-white sm:text-[12px] sm:px-3 sm:py-[6px] text-[#00A96C] font-semibold text-[14px]"
                >
                  <svg
                    width="12"
                    height="16"
                    viewBox="0 0 12 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.665 10.1675C10.665 12.8364 8.5014 15 5.83249 15C3.16358 15 1 12.8364 1 10.1675C1 9.27817 1.1691 8.37909 1.45695 7.50948C1.69107 8.48385 2.56814 9.20794 3.61432 9.20794C4.83968 9.20794 5.83303 8.21459 5.83303 6.98924C5.83303 5.76388 4.99754 4.92995 4.99754 3.73873C4.99754 2.18825 6.12056 1 7.40842 1C7.40842 2.85866 8.08923 3.56194 8.82828 4.75516C9.7056 6.17161 10.665 7.72056 10.665 10.1675Z"
                      stroke="#00A96C"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Aktiv
                </p>
                <p
                  class="flex gap-2 rounded-[500px] px-5 py-[10px] bg-white sm:text-[12px] sm:px-3 sm:py-[6px] font-semibold text-[14px]"
                >
                  {{ moment(form.created_at).format("DD MMM YYYY, HH:mm") }}
                </p>
                <p
                  class="flex gap-2 rounded-[500px] px-5 py-[10px] bg-white sm:text-[12px] sm:px-3 sm:py-[6px] font-semibold text-[14px]"
                >
                  <svg
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <ellipse
                      cx="10.665"
                      cy="13.7498"
                      rx="5"
                      ry="2.08333"
                      stroke="#020105"
                      stroke-width="1.2"
                      stroke-linejoin="round"
                    />
                    <ellipse
                      cx="10.665"
                      cy="6.6665"
                      rx="2.5"
                      ry="2.5"
                      stroke="#020105"
                      stroke-width="1.2"
                      stroke-linejoin="round"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.29396 10.9185C5.14997 10.9391 4.08807 11.1326 3.27363 11.4584C2.84433 11.6301 2.44658 11.8534 2.14389 12.1396C1.83962 12.4274 1.58179 12.8305 1.58179 13.3333C1.58179 13.8361 1.83962 14.2392 2.14389 14.5269C2.44658 14.8132 2.84433 15.0364 3.27363 15.2081C3.74324 15.396 4.29513 15.5399 4.89759 15.632C4.36206 15.1138 4.04089 14.5169 4.00237 13.8797C3.94305 13.8589 3.8858 13.8375 3.83072 13.8154C3.506 13.6855 3.29356 13.5496 3.17456 13.4371C3.12162 13.387 3.09756 13.3524 3.0871 13.3333C3.09756 13.3142 3.12162 13.2795 3.17456 13.2295C3.29356 13.1169 3.506 12.981 3.83072 12.8511C3.96226 12.7985 4.10617 12.7493 4.26109 12.7043C4.62269 12.0024 5.33911 11.3853 6.29396 10.9185ZM3.07966 13.3508C3.07953 13.3508 3.07978 13.3494 3.08078 13.3467C3.08029 13.3494 3.07979 13.3508 3.07966 13.3508ZM3.08078 13.3199C3.07978 13.3172 3.07953 13.3158 3.07966 13.3158C3.07979 13.3158 3.08029 13.3172 3.08078 13.3199Z"
                      fill="#020105"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M17.3277 13.8797C17.2892 14.5169 16.968 15.1138 16.4325 15.632C17.035 15.5399 17.5868 15.396 18.0565 15.2081C18.4858 15.0364 18.8835 14.8132 19.1862 14.5269C19.4905 14.2392 19.7483 13.8361 19.7483 13.3333C19.7483 12.8305 19.4905 12.4274 19.1862 12.1396C18.8835 11.8534 18.4858 11.6301 18.0565 11.4584C17.242 11.1326 16.1801 10.9391 15.0361 10.9185C15.991 11.3853 16.7074 12.0024 17.069 12.7043C17.2239 12.7493 17.3678 12.7985 17.4994 12.8511C17.8241 12.981 18.0365 13.1169 18.1555 13.2295C18.2085 13.2795 18.2325 13.3142 18.243 13.3333C18.2325 13.3524 18.2085 13.387 18.1555 13.4371C18.0365 13.5496 17.8241 13.6855 17.4994 13.8154C17.4443 13.8375 17.387 13.8589 17.3277 13.8797ZM18.2504 13.3508C18.2503 13.3508 18.2498 13.3494 18.2493 13.3467C18.2503 13.3494 18.2506 13.3508 18.2504 13.3508ZM18.2493 13.3199C18.2498 13.3172 18.2503 13.3158 18.2504 13.3158C18.2506 13.3158 18.2503 13.3172 18.2493 13.3199Z"
                      fill="#020105"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M14.4793 8.34662C14.2729 8.81463 13.9829 9.23748 13.6282 9.59624C13.9826 9.80018 14.3936 9.91683 14.8318 9.91683C16.1665 9.91683 17.2485 8.83485 17.2485 7.50016C17.2485 6.16547 16.1665 5.0835 14.8318 5.0835C14.7289 5.0835 14.6276 5.08992 14.5281 5.10239C14.7141 5.56113 14.8207 6.0605 14.831 6.5835C14.8312 6.5835 14.8315 6.5835 14.8318 6.5835C15.3381 6.5835 15.7485 6.9939 15.7485 7.50016C15.7485 8.00642 15.3381 8.41683 14.8318 8.41683C14.7069 8.41683 14.5878 8.39185 14.4793 8.34662Z"
                      fill="#020105"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.80211 5.10239C6.70265 5.08992 6.6013 5.0835 6.49845 5.0835C5.16377 5.0835 4.08179 6.16547 4.08179 7.50016C4.08179 8.83485 5.16377 9.91683 6.49845 9.91683C6.93669 9.91683 7.34768 9.80018 7.70207 9.59624C7.34736 9.23748 7.05733 8.81463 6.85092 8.34662C6.74241 8.39185 6.62335 8.41683 6.49845 8.41683C5.99219 8.41683 5.58179 8.00642 5.58179 7.50016C5.58179 6.9939 5.99219 6.5835 6.49845 6.5835C6.49873 6.5835 6.499 6.5835 6.49927 6.5835C6.50953 6.0605 6.61615 5.56113 6.80211 5.10239Z"
                      fill="#020105"
                    />
                  </svg>
                  {{ members?.length }}
                </p>
              </div>
              <img class="w-full h-full object-cover" :src="image" alt="" />
            </div>
          </div>
        </div>
        <div
          class="qr-code sm:px-4 sm:py-4 sm:rounded-[16px] px-6 py-6 rounded-[30px] border-[2px] border-solid border-bg-grey"
        >
          <div class="image w-[100px] h-[100px]">
            <!-- <img class="w-full h-full" src="@/assets/images/image 2.png" alt="" /> -->
            <img
              class="w-full h-full"
              v-if="form?.qr_code?.qr_code"
              :src="form?.qr_code?.qr_code"
              alt=""
            />
          </div>
          <div class="body flex flex-col gap-2 items-start justify-center">
            <p class="text-base text-black">
              Uyushma havolasi:
              <a
                class="text-base text-black underline"
                target="_black"
                :href="`${base_url_client}/community/join/${form?.qr_code?.uuid}`"
                >{{ `${base_url_client}/community/join/${form?.qr_code?.uuid}` }}</a
              >
            </p>
            <div class="flex gap-3 sm:flex-col">
              <a
                :href="form?.qr_code?.qr_code"
                download=""
                target="_black"
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
              <nuxt-link
                to="/"
                class="flex gap-[6px] items-center h-8 px-2 text-black text-base font-medium bg-bg-grey"
                >Ishtirokchilar soni: {{ members_total
                }}<svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.85417 2.66406C9.43995 2.66406 9.10417 2.99985 9.10417 3.41406C9.10417 3.82828 9.43995 4.16406 9.85417 4.16406V2.66406ZM16.5875 3.41406H17.3375C17.3375 2.99985 17.0017 2.66406 16.5875 2.66406V3.41406ZM15.8375 10.1466C15.8375 10.5608 16.1733 10.8966 16.5875 10.8966C17.0017 10.8966 17.3375 10.5608 17.3375 10.1466H15.8375ZM8.21136 10.7287C7.91846 11.0216 7.91843 11.4965 8.21131 11.7894C8.50419 12.0823 8.97906 12.0823 9.27197 11.7894L8.21136 10.7287ZM17.1078 3.95442C17.4007 3.66154 17.4007 3.18667 17.1079 2.89376C16.815 2.60085 16.3401 2.60083 16.0472 2.8937L17.1078 3.95442ZM7.98667 6.8724C8.40088 6.8724 8.73667 6.53661 8.73667 6.1224C8.73667 5.70818 8.40088 5.3724 7.98667 5.3724V6.8724ZM14.6283 12.0132C14.6283 11.599 14.2925 11.2632 13.8783 11.2632C13.4641 11.2632 13.1283 11.599 13.1283 12.0132H14.6283ZM9.85417 4.16406H16.5875V2.66406H9.85417V4.16406ZM15.8375 3.41406V10.1466H17.3375V3.41406H15.8375ZM9.27197 11.7894L17.1078 3.95442L16.0472 2.8937L8.21136 10.7287L9.27197 11.7894ZM7.98667 5.3724H6.26833V6.8724H7.98667V5.3724ZM6.26833 5.3724C4.63412 5.3724 3.30917 6.69735 3.30917 8.33156H4.80917C4.80917 7.52578 5.46255 6.8724 6.26833 6.8724V5.3724ZM3.30917 8.33156V13.7324H4.80917V8.33156H3.30917ZM3.30917 13.7324C3.30917 15.3666 4.63412 16.6916 6.26833 16.6916V15.1916C5.46255 15.1916 4.80917 14.5382 4.80917 13.7324H3.30917ZM6.26833 16.6916H11.6692V15.1916H6.26833V16.6916ZM11.6692 16.6916C13.3034 16.6916 14.6283 15.3666 14.6283 13.7324H13.1283C13.1283 14.5382 12.475 15.1916 11.6692 15.1916V16.6916ZM14.6283 13.7324V12.0132H13.1283V13.7324H14.6283Z"
                    fill="#3C4BDC"
                  />
                </svg>
              </nuxt-link>
            </div>
          </div>
        </div>
        <div
          class="about-block px-6 py-6 rounded-[30px] bg-bg-grey sm:rounded-2xl sm:px-4 sm:py-4"
        >
          <h5 class="decor-500 text-[24px] text-black sm:text-[18px]">Uyushma haqida</h5>
          <!-- <div class="mt-4 flex flex-col gap-4">
            <a-form-model-item prop="title.ru">
              <p class="text-base font-bold text-black mb-2">Uyushma nomi</p>
              <p class="text-[14px] text-black font-medium" v-html="form.title.ru"></p>
            </a-form-model-item>
            <div class="grid grid-cols-2 gap-4">
              <a-form-model-item ref="name" class="form-item" prop="category">
                <p class="text-base font-bold text-black mb-2">Uyushma turi</p>
                <p class="text-[14px] text-black font-medium">
                  {{ categories.find((item) => item.id == form.category)?.title }}
                </p>
              </a-form-model-item>
            </div>
          </div> -->
          <div class="mt-4 mb-4">
            <a-form-model-item prop="desc.ru">
              <p class="text-base font-bold text-black mb-2">
                Uyushma haqida qisqacha malumot
              </p>
              <p class="text-[14px] text-black font-medium" v-html="form.desc.ru"></p>
              <!-- <quill-editor
                style="min-height: 250px"
                :options="editorOption"
                :value="form.desc.ru"
                v-model="form.desc.ru"
              /> -->
            </a-form-model-item>
          </div>
        </div>

        <div
          class="about-block px-6 py-6 rounded-[30px] bg-bg-grey sm:rounded-2xl sm:px-4 sm:py-4"
        >
          <div class="flex justify-between">
            <h5 class="decor-500 text-[24px] text-black sm:text-[18px]">
              Ishtirokchilar ({{ members?.length }})
            </h5>
            <button
              @click="visibleMembers = true"
              class="py-[10px] px-5 text-[#3C4BDC] rounded-[500px] bg-white flex gap-1 font-medium sm:py-[6px] sm:px-2 sm:text-[14px] sm:hidden"
              :class="{ 'pointer-events-none opacity-50': members_total <= 10 }"
            >
              Barchasini ko‘rish
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.8542 2.66406C9.43999 2.66406 9.1042 2.99985 9.1042 3.41406C9.1042 3.82828 9.43999 4.16406 9.8542 4.16406V2.66406ZM16.5875 3.41406H17.3375C17.3375 2.99985 17.0018 2.66406 16.5875 2.66406V3.41406ZM15.8375 10.1466C15.8375 10.5608 16.1733 10.8966 16.5875 10.8966C17.0018 10.8966 17.3375 10.5608 17.3375 10.1466H15.8375ZM8.2114 10.7287C7.91849 11.0216 7.91847 11.4965 8.21135 11.7894C8.50422 12.0823 8.9791 12.0823 9.27201 11.7894L8.2114 10.7287ZM17.1078 3.95442C17.4007 3.66154 17.4008 3.18667 17.1079 2.89376C16.815 2.60085 16.3401 2.60083 16.0472 2.8937L17.1078 3.95442ZM7.9867 6.8724C8.40092 6.8724 8.7367 6.53661 8.7367 6.1224C8.7367 5.70818 8.40092 5.3724 7.9867 5.3724V6.8724ZM14.6284 12.0132C14.6284 11.599 14.2926 11.2632 13.8784 11.2632C13.4642 11.2632 13.1284 11.599 13.1284 12.0132H14.6284ZM9.8542 4.16406H16.5875V2.66406H9.8542V4.16406ZM15.8375 3.41406V10.1466H17.3375V3.41406H15.8375ZM9.27201 11.7894L17.1078 3.95442L16.0472 2.8937L8.2114 10.7287L9.27201 11.7894ZM7.9867 5.3724H6.26837V6.8724H7.9867V5.3724ZM6.26837 5.3724C4.63416 5.3724 3.3092 6.69735 3.3092 8.33156H4.8092C4.8092 7.52578 5.46258 6.8724 6.26837 6.8724V5.3724ZM3.3092 8.33156V13.7324H4.8092V8.33156H3.3092ZM3.3092 13.7324C3.3092 15.3666 4.63416 16.6916 6.26837 16.6916V15.1916C5.46258 15.1916 4.8092 14.5382 4.8092 13.7324H3.3092ZM6.26837 16.6916H11.6692V15.1916H6.26837V16.6916ZM11.6692 16.6916C13.3034 16.6916 14.6284 15.3666 14.6284 13.7324H13.1284C13.1284 14.5382 12.475 15.1916 11.6692 15.1916V16.6916ZM14.6284 13.7324V12.0132H13.1284V13.7324H14.6284Z"
                  fill="#3C4BDC"
                />
              </svg>
            </button>
          </div>
          <div
            class="mt-4 mx-auto grid grid-cols-2 gap-4 sm:grid-cols-1"
            v-if="members.length > 0"
          >
            <MembersCard
              v-for="(member, index) in members"
              :key="index"
              :member="member"
            />
          </div>
          <div class="flex justify-center mt-6" v-else>
            <a-empty />
          </div>
          <div class="sm:flex hidden justify-center">
            <button
              @click="visibleMembers = true"
              class="py-[10px] px-5 text-[#3C4BDC] mt-4 rounded-[500px] bg-white gap-1 font-medium hidden sm:flex "
              :class="{ 'pointer-events-none opacity-50': members_total <= 10 }"
            >
              Barchasini ko‘rish
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.8542 2.66406C9.43999 2.66406 9.1042 2.99985 9.1042 3.41406C9.1042 3.82828 9.43999 4.16406 9.8542 4.16406V2.66406ZM16.5875 3.41406H17.3375C17.3375 2.99985 17.0018 2.66406 16.5875 2.66406V3.41406ZM15.8375 10.1466C15.8375 10.5608 16.1733 10.8966 16.5875 10.8966C17.0018 10.8966 17.3375 10.5608 17.3375 10.1466H15.8375ZM8.2114 10.7287C7.91849 11.0216 7.91847 11.4965 8.21135 11.7894C8.50422 12.0823 8.9791 12.0823 9.27201 11.7894L8.2114 10.7287ZM17.1078 3.95442C17.4007 3.66154 17.4008 3.18667 17.1079 2.89376C16.815 2.60085 16.3401 2.60083 16.0472 2.8937L17.1078 3.95442ZM7.9867 6.8724C8.40092 6.8724 8.7367 6.53661 8.7367 6.1224C8.7367 5.70818 8.40092 5.3724 7.9867 5.3724V6.8724ZM14.6284 12.0132C14.6284 11.599 14.2926 11.2632 13.8784 11.2632C13.4642 11.2632 13.1284 11.599 13.1284 12.0132H14.6284ZM9.8542 4.16406H16.5875V2.66406H9.8542V4.16406ZM15.8375 3.41406V10.1466H17.3375V3.41406H15.8375ZM9.27201 11.7894L17.1078 3.95442L16.0472 2.8937L8.2114 10.7287L9.27201 11.7894ZM7.9867 5.3724H6.26837V6.8724H7.9867V5.3724ZM6.26837 5.3724C4.63416 5.3724 3.3092 6.69735 3.3092 8.33156H4.8092C4.8092 7.52578 5.46258 6.8724 6.26837 6.8724V5.3724ZM3.3092 8.33156V13.7324H4.8092V8.33156H3.3092ZM3.3092 13.7324C3.3092 15.3666 4.63416 16.6916 6.26837 16.6916V15.1916C5.46258 15.1916 4.8092 14.5382 4.8092 13.7324H3.3092ZM6.26837 16.6916H11.6692V15.1916H6.26837V16.6916ZM11.6692 16.6916C13.3034 16.6916 14.6284 15.3666 14.6284 13.7324H13.1284C13.1284 14.5382 12.475 15.1916 11.6692 15.1916V16.6916ZM14.6284 13.7324V12.0132H13.1284V13.7324H14.6284Z"
                  fill="#3C4BDC"
                />
              </svg>
            </button>
          </div>
        </div>
        <div
          class="about-block px-6 py-6 rounded-[30px] bg-bg-grey sm:rounded-2xl sm:px-4 sm:py-4"
        >
          <h5 class="decor-500 text-[24px] text-black sm:text-[18px]">
            Ijtimoiy tarmoqlar
          </h5>
          <div class="w-full grid grid-cols-2 gap-4 mt-4 sm:grid-cols-1">
            <a-form-model-item class="form-item">
              <p class="text-base font-semibold text-black mb-3">
                Chat uchun telegram gruppa (agar mavjud bo‘lsa)
              </p>
              <div class="relative w-full flex items-center">
                <a-input
                  class="w-full min-h-[50px] rounded-[8px] pointer-events-none border-none"
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
              <p class="text-base font-semibold text-black mb-3">
                Uyushma Telegram sahifasi
              </p>
              <div class="relative w-full flex items-center">
                <a-input
                  class="w-full min-h-[50px] rounded-[8px] pointer-events-none border-none"
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
              <p class="text-base font-semibold text-black mb-3">Instagram sahifasi</p>
              <div class="relative w-full flex items-center">
                <a-input
                  class="w-full min-h-[50px] rounded-[8px] pointer-events-none border-none"
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
              <p class="text-base font-semibold text-black mb-3">Facebook sahifasi</p>
              <div class="relative w-full flex items-center">
                <a-input
                  class="w-full min-h-[50px] rounded-[8px] pointer-events-none border-none"
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
        <div
          class="about-block px-6 py-6 rounded-[30px] bg-bg-grey sm:rounded-2xl sm:px-4 sm:py-4"
        >
          <h5 class="decor-500 text-[24px] text-black sm:text-[18px]">Tashkilotchilar</h5>
          <div class="max-w-[470px] flex flex-col gap-4 mt-4">
            <a-form-model-item class="form-item" prop="phone_number">
              <p class="text-base font-semibold text-black mb-3">Telefon raqami</p>
              <div class="relative w-full flex items-center">
                <a-input
                  class="w-full min-h-[50px] rounded-[8px] pointer-events-none border-none"
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
            <a-form-model-item class="form-item" prop="telegram">
              <p class="text-base font-semibold text-black mb-3">Telegram @nickname</p>
              <div class="relative w-full flex items-center">
                <a-input
                  class="w-full min-h-[50px] rounded-[8px] pointer-events-none"
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
            <a-form-model-item class="form-item" prop="owner_info.ru">
              <p class="text-base font-bold text-black mb-3">Qo‘shimcha malumot:</p>
              <p
                class="text-[14px] text-black font-medium"
                v-html="form.owner_info.ru"
              ></p>
              <!-- <quill-editor
                style="min-height: 250px"
                :options="editorOption"
                :value="form.owner_info.ru"
                v-model="form.owner_info.ru"
              /> -->
            </a-form-model-item>
          </div>
        </div>
        <div
          class="about-block px-6 py-6 rounded-[30px] bg-bg-grey sm:rounded-2xl sm:px-4 sm:py-4"
        >
          <h5 class="decor-500 text-[24px] text-black sm:text-[18px]">
            Media materiallar
          </h5>
          <div class="mt-4 flex flex-col gap-4">
            <div
              v-show="form.files.length > 0"
              class="file-upload-item"
              v-for="(item, index) in form.files"
              :key="index"
            >
              <div>
                <div
                  class="relative w-[362px] sm:w-full px-6 items-start gap-2 py-6 rounded-lg flex justify-start bg-white"
                >
                  <svg
                    width="36"
                    height="36"
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
                  <div class="flex flex-col gap-3">
                    <p class="text-[14px] text-black decor-500">Faylni yuklab olish</p>
                    <a
                      :href="item.file"
                      class="flex gap-[13px] decor text-[#1878F3] text-[12px]"
                      >Yuklab olish<svg
                        width="17"
                        height="18"
                        viewBox="0 0 17 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.24"
                          d="M16.7118 8.99984C16.7118 13.6022 12.9809 17.3332 8.3785 17.3332C3.77613 17.3332 0.045166 13.6022 0.045166 8.99984C0.045166 4.39746 3.77613 0.666504 8.3785 0.666504C12.9809 0.666504 16.7118 4.39746 16.7118 8.99984Z"
                          fill="#1878F3"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12.1539 9.44194C12.3979 9.19786 12.3979 8.80214 12.1539 8.55806L9.65386 6.05806C9.40978 5.81398 9.01405 5.81398 8.76997 6.05806C8.52589 6.30214 8.52589 6.69786 8.76997 6.94194L10.203 8.375L5.04525 8.375C4.70007 8.375 4.42025 8.65482 4.42025 9C4.42025 9.34518 4.70007 9.625 5.04525 9.625L10.203 9.625L8.76997 11.0581C8.52589 11.3021 8.52589 11.6979 8.76997 11.9419C9.01405 12.186 9.40978 12.186 9.65386 11.9419L12.1539 9.44194Z"
                          fill="#1878F3"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <!-- <a-form-model-item class="w-full">
                <input
                  placeholder="File nomini kiriting"
                  class="border w-full border-solid border-border-darik min-h-[50px] bg-white rounded-lg px-4"
                  type="text"
                  v-model="item.name.ru"
                />
              </a-form-model-item> -->
              <!-- <button @click="deleteFile(item.indexId)">
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
          <!-- <div class="flex justify-center mt-4">
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
          </div> -->
        </div>
        <div class="flex justify-center">
          <p class="text-base text-grey-24 font-medium">
            Uyushma yaratildi:
            {{ moment(form.created_at).format("DD.MM.YYYY HH:mm") }} |
            {{ $store.state.profile?.full_name }}
          </p>
        </div>
      </div>
    </a-form-model>

    <a-modal
      v-model="visibleDelete"
      centered
      @ok="() => (visibleDelete = false)"
      :width="524"
    >
      <div>
        <div class="pb-6 border-[0] border-b border-solid border-grey-8">
          <h4 class="decor-500 text-[24px] text-black sm:text-[18px]">Spiker qo’shish</h4>
        </div>
        <div class="flex flex-col items-center gap-2 mt-6">
          <h4 class="text-[24px] decor-500 text-black sm:text-[20px] max-w-[363px] text-center">
            Uyushmani ochirishga aminmisiz?
          </h4>
          <p class="text-base text-grey-80">Uyushmani qaytarib bolmaydi</p>
        </div>
        <div class="btns grid grid-cols-2 gap-3 mt-[28px]">
          <button
            @click="visibleDelete = false"
            class="h-12 px-5 w-full rounded-xl bg-apple-grey flex items-center text-[14px] font-semibold justify-center text-black gap-2"
          >
            Yoq, bekor qilish
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.4617 14.4443L5.575 5.556M5.575 14.4443L14.4617 5.556"
                stroke="#020105"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <button
            @click="deleteCommunity"
            class="h-12 px-5 rounded-xl w-full bg-[#F00] flex items-center text-[14px] font-semibold text-white justify-center gap-2"
          >
            Xa, ochirib yuborish
            <svg
              width="16"
              height="18"
              viewBox="0 0 16 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.6233 6.77731V14.2765C13.6233 15.6573 12.5042 16.7765 11.1233 16.7765H5.01249C3.63165 16.7765 2.51248 15.6573 2.51248 14.2765L2.51248 6.77731M1.40082 3.44564L14.7342 3.44564M6.95665 1.22314L9.17915 1.22314M5.21832 7.88898L5.21832 13.4431M8.06749 7.88898L8.06749 13.4431M10.81 7.88898V13.4431"
                stroke="white"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
      <template slot="footer"></template>
    </a-modal>
    <a-modal
      v-model="visibleMembers"
      centered
      @ok="() => (visibleMembers = false)"
      :width="524"
    >
      <div>
        <div class="pb-6 border-[0] border-b border-solid border-grey-8">
          <h4 class="decor-500 text-[24px] text-black sm:text-[18px]">
            Ishtirokchilar ({{ members_total }})
          </h4>
        </div>
        <div class="search mt-6">
          <div class="relative flex items-center w-full">
            <input
              v-model="search"
              @input="onSearch"
              class="rounded-[12px] w-full border border-solid border-grey-8 pl-12 bg-white h-12"
              type="text"
              placeholder="Uyushmani qidirish"
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
                d="M15.3342 15.335L19.9992 20.001M17.3342 10.507C17.3342 14.278 14.2772 17.335 10.5062 17.335C6.73522 17.335 3.67822 14.278 3.67822 10.507C3.67822 6.73595 6.73522 3.67896 10.5062 3.67896C14.2772 3.67896 17.3342 6.73595 17.3342 10.507Z"
                stroke="black"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
        <div class="mt-6">
          <div
            class="mx-auto flex flex-col w-full gap-4 max-h-[624px] overflow-y-scroll pr-2 pb-4"
          >
            <MembersCard
              class="border border-solid border-grey-8"
              v-for="(member, index) in all_members"
              :key="index"
              :member="member"
            />
            <div v-if="loaderSize" class="flex justify-center">
              <a-spin />
            </div>
          </div>
        </div>
        <div class="btns grid grid-cols-2 gap-3 mt-[28px]">
          <button
            @click="visibleMembers = false"
            class="h-12 px-5 w-full rounded-xl bg-apple-grey flex items-center text-[14px] font-semibold justify-center text-black gap-2"
          >
            Yopish
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.4617 14.4443L5.575 5.556M5.575 14.4443L14.4617 5.556"
                stroke="#020105"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <button
            @click="showMore"
            class="h-12 px-5 rounded-xl w-full bg-[#3C4BDC] flex items-center text-[14px] font-semibold text-white justify-center gap-2"
            :class="{ 'opacity-25 pointer-events-none': members_total < members_size }"
          >
            Yana korish +20
          </button>
        </div>
      </div>
      <template slot="footer"></template>
    </a-modal>
    <Loader v-if="loading" />
  </div>
</template>
<script>
import Loader from "@/components/Loader.vue";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
import SpeakersCard from "@/components/SpeakersCard.vue";
import MembersCard from "@/components/MembersCard.vue";
import moment from "moment";
import communitiesApi from "../../../api/communitiesApi";

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
      search: "",
      visibleMembers: false,
      loaderSize: false,
      base_url_client:
        process.env.BASE_URL_CLIENT || "http://network-events-tau.vercel.app",
      visibleDelete: false,
      loading: true,
      visible: false,
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
        plan: {
          ru: "",
          en: "",
        },
        image: "",
        start_date: "",
        end_date: "",
        adress: "",
        lat: 56,
        lon: 54,
        active: true,
        speakers: [],
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
      },
      rules: {
        start_date: [
          { required: true, message: "This field is required", trigger: "change" },
        ],
        title: {
          ru: [{ required: true, message: "This field is required", trigger: "change" }],
        },
        desc: {
          ru: [{ required: true, message: "This field is required", trigger: "change" }],
        },
        telegram: [
          { required: true, message: "This field is required", trigger: "change" },
        ],
        phone_number: [
          { required: true, message: "This field is required", trigger: "change" },
        ],
        owner_info: {
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
      members: [],
      all_members: [],
      image: "",
      imageSpeaker: "",
      categories: [],
      fileListSpeaker: [],
      members_size: 10,
      members_total: null,
      edit: null,
      formSpeaker: {
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
      },
    };
  },
  async mounted() {
    this.__GET_CATEGORIES();
    this.__GET_MEMBERS_();
    this.__GET_MEMBERS();
    await this.__GET_COMMUNITY();
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  },
  methods: {
    moment,
    async onSearch(e) {
      if (this.$route.query?.search != e.target.value && e.target.value.length > 2) {
        this.__GET_MEMBERS({ search: e.target.value });
      } else {
        this.__GET_MEMBERS({});
      }
    },
    async __GET_CATEGORIES(data) {
      try {
        const data = await communitiesApi.getCategories();
        this.categories = data?.data?.results;
      } catch (e) {
        this.$notification["error"]({
          message: "Error",
          description: e.response.statusText,
        });
      }
    },
    showMore() {
      if (this.members_total > this.members_size) {
        this.members_size += 20;
        this.__GET_MEMBERS();
      }
    },
    async __GET_MEMBERS_() {
      try {
        const data = await communitiesApi.getMembers({
          params: {
            community: this.$route.params.id,
            page_size: 10,
          },
        });
        this.members = data?.data?.results;
      } catch (e) {
        this.$notification["error"]({
          message: "Error",
          description: e.response.statusText,
        });
      } finally {
      }
    },
    async __GET_MEMBERS(params = {}) {
      try {
        this.loaderSize = true;
        const data = await communitiesApi.getMembers({
          params: {
            community: this.$route.params.id,
            page_size: this.members_size,
            ...params,
          },
        });
        this.all_members = data?.data?.results;
        this.members_total = data?.data?.count;
      } catch (e) {
        this.$notification["error"]({
          message: "Error",
          description: e.response.statusText,
        });
      } finally {
        this.loaderSize = false;
      }
    },
    async __GET_COMMUNITY(form) {
      try {
        const data = await communitiesApi.getCommunityById({ id: this.$route.params.id });
        const { id, updated_at, ...rest } = data?.data;
        this.form = {
          ...rest,
          category: rest.category.id,
          phone_number: `+${rest.phone_number}`,
          files: rest.files.map((item, index) => {
            return {
              ...item,
              indexId: index,
            };
          }),
        };

        this.image = this.form.image;
      } catch (e) {
        this.$notification["error"]({
          message: "Error",
          description: e.response.statusText,
        });
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
        this.formSpeaker.image = fileList[0]?.response?.show_url;
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
    dateHandleChange(e) {
      this.form.start_date = e[0];
      this.form.end_date = e[1];
    },
    deleteCommunity() {
      this.__DELETE_COMMUNITY();
    },
    async __DELETE_COMMUNITY() {
      try {
        await communitiesApi.deleteCommunity({ id: this.$route.params.id });
        this.$notification["success"]({
          message: "Success",
          description: "Uyushma muvaffaqiyatli o'chirildi",
        });
        this.$router.push("/");
      } catch (e) {
        this.$notification["error"]({
          message: "Error",
          description: e.response.statusText,
        });
      }
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
  components: { Loader, SpeakersCard, MembersCard },
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
  border: none;
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
