<template lang="html">
  <div class="header bg-bg-grey">
    <div class="max-w-[818px] mx-auto 2xl:px-4 pt-10 flex flex-col gap-9 pb-6">
      <div class="flex justify-between">
        <div>
          <h4 class="text-[24px] text-black decor-500">
            {{ $store.state.profile?.company?.name }}
          </h4>
          <div class="flex gap-3 items-center">
            <p class="text-[14px] text-black">
              +{{
                `${$store.state.profile?.phone_number}`
                  .match(/(\d{3})(\d{2})(\d{3})(\d{2})(\d{2})/)
                  .filter((item, index) => index != 0)
                  .join(" ")
              }}
            </p>
            <span class="flex h-5 w-[1px] bg-grey-light"></span>
            <p class="text-[14px] text-grey-64">Toshkent shahri</p>
            <span class="flex h-5 w-[1px] bg-grey-light"></span>
            <p class="text-[14px] text-grey-64">{{ $store.state.profile?.full_name }}</p>
          </div>
        </div>
        <div class="flex gap-3">
          <button class="flex w-12 h-12 items-center justify-center rounded-xl bg-white">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.17209 12C5.17209 12.513 5.23309 13.01 5.34009 13.49L4.21209 14.58C3.64909 15.125 3.52809 15.983 3.92009 16.661C4.31209 17.34 5.11509 17.664 5.86909 17.449L7.38009 17.018C8.11309 17.693 8.98909 18.215 9.96309 18.519L10.3431 20.039C10.5331 20.799 11.2161 21.332 12.0001 21.332C12.7841 21.332 13.4671 20.799 13.6571 20.038L14.0371 18.519C15.0091 18.216 15.8821 17.696 16.6141 17.023L18.1361 17.458C18.8891 17.674 19.6921 17.349 20.0841 16.67C20.4761 15.991 20.3561 15.133 19.7921 14.589L18.6591 13.494C18.7671 13.012 18.8281 12.514 18.8281 12C18.8281 11.49 18.7681 10.995 18.6621 10.517L19.7971 9.41903C20.3601 8.87403 20.4811 8.01603 20.0891 7.33803C19.6971 6.65903 18.8941 6.33503 18.1401 6.55003L16.6221 6.98403C15.8911 6.31003 15.0181 5.78903 14.0471 5.48403L13.6661 3.96103C13.4761 3.20103 12.7931 2.66803 12.0091 2.66803C11.2251 2.66803 10.5421 3.20103 10.3521 3.96203L9.97309 5.47803C8.99809 5.78103 8.12109 6.30203 7.38709 6.97503L5.87309 6.54203C5.12009 6.32703 4.31609 6.65103 3.92509 7.33003C3.53309 8.00903 3.65409 8.86703 4.21709 9.41103L5.34209 10.499C5.23409 10.983 5.17209 11.484 5.17209 12ZM12.0001 9.33403C13.4721 9.33403 14.6661 10.528 14.6661 12C14.6661 13.472 13.4721 14.666 12.0001 14.666C10.5281 14.666 9.33409 13.472 9.33409 12C9.33409 10.528 10.5281 9.33403 12.0001 9.33403Z"
                stroke="black"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <button
            @click="logout"
            class="flex px-6 h-12 items-center justify-center rounded-xl bg-white text-black text-base gap-2"
          >
            Выйти<svg
              width="21"
              height="18"
              viewBox="0 0 21 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.85355 7.5606C4.14645 7.26771 4.14645 6.79284 3.85355 6.49994C3.56066 6.20705 3.08579 6.20705 2.79289 6.49994L1.5 7.79284C0.816582 8.47625 0.816584 9.58429 1.5 10.2677L2.79289 11.5606C3.08579 11.8535 3.56066 11.8535 3.85355 11.5606C4.14645 11.2677 4.14645 10.7928 3.85355 10.4999L3.13388 9.78027L9.25 9.78027C9.66421 9.78027 10 9.44449 10 9.03027C10 8.61606 9.66421 8.28027 9.25 8.28027L3.13388 8.28027L3.85355 7.5606Z"
                fill="#F2154A"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16.25 0.25L9 0.249999C6.37665 0.249999 4.25 2.37665 4.25 5C4.25 5.41421 4.58579 5.75 5 5.75C5.41421 5.75 5.75 5.41421 5.75 5C5.75 3.20507 7.20507 1.75 9 1.75L12.7859 1.75C13.6524 0.826731 14.8839 0.25 16.25 0.25ZM12.7859 16.25L9 16.25C7.20507 16.25 5.75 14.7949 5.75 13C5.75 12.5858 5.41421 12.25 5 12.25C4.58579 12.25 4.25 12.5858 4.25 13C4.25 15.6234 6.37665 17.75 9 17.75L16.25 17.75C14.8839 17.75 13.6524 17.1733 12.7859 16.25Z"
                fill="#F2154A"
              />
              <path
                opacity="0.4"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M21 13C21 15.6234 18.8734 17.75 16.25 17.75C13.6266 17.75 11.5 15.6234 11.5 13L11.5 5C11.5 2.37665 13.6266 0.249999 16.25 0.25C18.8734 0.25 21 2.37665 21 5L21 13Z"
                fill="#F2154A"
              />
            </svg>
          </button>
        </div>
      </div>
      <div class="flex gap-4 tab">
        <button
          @click="$router.push('/')"
          class="text-[14px] flex items-center gap-2 h-12 px-4 rounded-xl bg-white font-bold border-[2px] border-solid border-transparent"
          :class="{ active: $route.name == 'index' }"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.4"
              d="M3 7.5C3 5.29086 4.79086 3.5 7 3.5L17 3.5C19.2091 3.5 21 5.29086 21 7.5V9V18C21 20.2091 19.2091 22 17 22H7C4.79086 22 3 20.2091 3 18L3 9L3 7.5Z"
              fill="#3C4BDC"
            />
            <path
              d="M17 3.5L7 3.5C4.79086 3.5 3 5.29086 3 7.5L3 9L21 9V7.5C21 5.29086 19.2091 3.5 17 3.5Z"
              fill="#3C4BDC"
              stroke="#3C4BDC"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              opacity="0.4"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8 1.25C8.41421 1.25 8.75 1.58579 8.75 2V5C8.75 5.41421 8.41421 5.75 8 5.75C7.58579 5.75 7.25 5.41421 7.25 5L7.25 2C7.25 1.58579 7.58579 1.25 8 1.25ZM16 1.25C16.4142 1.25 16.75 1.58579 16.75 2V5C16.75 5.41421 16.4142 5.75 16 5.75C15.5858 5.75 15.25 5.41421 15.25 5V2C15.25 1.58579 15.5858 1.25 16 1.25Z"
              fill="#3C4BDC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M15.4939 12.4356C15.8056 12.7083 15.8372 13.1822 15.5645 13.4939L12.6946 16.7738C12.0779 17.4786 11.0156 17.5729 10.2843 16.9879L8.53151 15.5857C8.20806 15.3269 8.15562 14.8549 8.41438 14.5315C8.67313 14.208 9.1451 14.1556 9.46855 14.4144L11.2214 15.8166C11.3258 15.9002 11.4776 15.8867 11.5657 15.786L14.4356 12.5061C14.7084 12.1944 15.1822 12.1628 15.4939 12.4356Z"
              fill="#3C4BDC"
            />
          </svg>
          Tadbirlar
        </button>
        <button
          @click="$router.push('/members')"
          :class="{ active: $route.name == 'members' }"
          class="text-[14px] flex items-center gap-2 h-12 px-4 rounded-xl bg-white font-bold border-[2px] border-solid border-transparent"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="14"
            viewBox="0 0 21 14"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.25 7C11.25 6.58579 11.5858 6.25 12 6.25L20 6.25C20.4142 6.25 20.75 6.58579 20.75 7C20.75 7.41421 20.4142 7.75 20 7.75L12 7.75C11.5858 7.75 11.25 7.41421 11.25 7Z"
              fill="#3C4BDC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.25 2C11.25 1.58579 11.5858 1.25 12 1.25L20 1.25C20.4142 1.25 20.75 1.58579 20.75 2C20.75 2.41421 20.4142 2.75 20 2.75L12 2.75C11.5858 2.75 11.25 2.41421 11.25 2Z"
              fill="#3C4BDC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M13.25 12C13.25 11.5858 13.5858 11.25 14 11.25L20 11.25C20.4142 11.25 20.75 11.5858 20.75 12C20.75 12.4142 20.4142 12.75 20 12.75L14 12.75C13.5858 12.75 13.25 12.4142 13.25 12Z"
              fill="#3C4BDC"
            />
            <circle cx="5" cy="3" r="3" fill="#3C4BDC" />
            <ellipse opacity="0.4" cx="5" cy="10.5" rx="5" ry="3.5" fill="#3C4BDC" /></svg
          >Ishtirokchilar
        </button>
        <button
          class="text-[14px] flex items-center gap-2 h-12 px-4 rounded-xl bg-white font-bold border-[2px] border-solid border-transparent"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="16"
            viewBox="0 0 18 16"
            fill="none"
          >
            <g opacity="0.4">
              <path
                d="M0.896699 6.79661L16.2854 0.145998C17.009 -0.166755 17.7932 0.441829 17.6698 1.22047L15.5657 14.4965C15.4358 15.3165 14.4208 15.6301 13.8509 15.0264L10.398 11.3689C9.72083 10.6516 9.66776 9.54774 10.273 8.76881L12.711 5.63108C12.8503 5.4517 12.6303 5.21573 12.4416 5.34228L7.5943 8.59411C6.77172 9.14594 5.77366 9.37293 4.79333 9.23115L1.15027 8.70426C0.152284 8.55992 -0.0289275 7.19664 0.896699 6.79661Z"
                fill="#28303F"
              />
            </g>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M17.4112 0.37922L12.6493 5.33233C12.5899 5.29847 12.5135 5.29406 12.4416 5.34228L7.5943 8.59411C6.77172 9.14594 5.77366 9.37293 4.79333 9.23115L1.15027 8.70426C0.152284 8.55992 -0.0289275 7.19664 0.896699 6.79661L16.2854 0.145998C16.7023 -0.0341891 17.1393 0.0914415 17.4112 0.37922Z"
              fill="#28303F"
            /></svg
          >SMS rassilka
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    async logout() {
      await localStorage.removeItem("accessToken");
      await localStorage.removeItem("refreshToken");
      this.$router.push("/registration");
    },
  },
};
</script>
<style lang="css" scoped>
.tab .active {
  border-color: #3c4bdc;
  box-shadow: 0px 4px 15px 0px rgba(92, 70, 229, 0.2);
}
</style>
