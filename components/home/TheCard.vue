<template lang="html">
  <div class="the-card rounded-[30px] bg-bg-grey px-4 py-[10px]">
    <div class="image h-[210px] overflow-hidden rounded-2xl relative">
      <div class="absolute left-4 top-4">
        <p
          class="flex gap-2 rounded-[500px] px-5 h-9 items-center bg-white text-[#00A96C] font-semibold text-[14px]"
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
      </div>
      <img
        class="h-full w-full object-cover"
        :src="event?.image"
        v-if="event?.image"
        alt=""
      />
      <img
        class="h-full w-full object-cover"
        src="../../assets/images/Hero-Banner-Placeholder-Light-1024x480-1.png"
        v-else
        alt=""
      />
    </div>
    <div class="body flex flex-col justify-between">
      <div class="flex flex-col gap-[10px]">
        <div class="flex gap-2">
          <span
            class="px-5 py-[10px] rounded-[500px] bg-white text-[14px] font-semibold"
            >{{ moment(event?.start_date).format("DD MMM YYYY, HH:mm") }}</span
          >
          <span
            class="flex gap-1 px-5 py-[10px] rounded-[500px] bg-white text-[14px] font-semibold"
            ><svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse
                cx="10"
                cy="13.7498"
                rx="5"
                ry="2.08333"
                stroke="#020105"
                stroke-width="1.2"
                stroke-linejoin="round"
              />
              <ellipse
                cx="10"
                cy="6.66675"
                rx="2.5"
                ry="2.5"
                stroke="#020105"
                stroke-width="1.2"
                stroke-linejoin="round"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.62892 10.9185C4.48493 10.9391 3.42303 11.1326 2.60859 11.4584C2.17929 11.6301 1.78154 11.8534 1.47885 12.1396C1.17458 12.4274 0.916748 12.8305 0.916748 13.3333C0.916748 13.8361 1.17458 14.2392 1.47885 14.5269C1.78154 14.8132 2.17929 15.0364 2.60859 15.2081C3.0782 15.396 3.63009 15.5399 4.23255 15.632C3.69702 15.1138 3.37585 14.5169 3.33733 13.8797C3.27801 13.8589 3.22076 13.8375 3.16568 13.8154C2.84096 13.6855 2.62852 13.5496 2.50952 13.4371C2.45658 13.387 2.43252 13.3524 2.42206 13.3333C2.43252 13.3142 2.45658 13.2795 2.50952 13.2295C2.62852 13.1169 2.84096 12.981 3.16568 12.8511C3.29722 12.7985 3.44113 12.7493 3.59605 12.7043C3.95765 12.0024 4.67407 11.3853 5.62892 10.9185ZM2.41462 13.3508C2.41449 13.3508 2.41474 13.3494 2.41574 13.3467C2.41526 13.3494 2.41475 13.3508 2.41462 13.3508ZM2.41574 13.3199C2.41474 13.3172 2.41449 13.3158 2.41462 13.3158C2.41475 13.3158 2.41526 13.3172 2.41574 13.3199Z"
                fill="#020105"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16.6627 13.8797C16.6242 14.5169 16.303 15.1138 15.7675 15.632C16.3699 15.5399 16.9218 15.396 17.3914 15.2081C17.8207 15.0364 18.2185 14.8132 18.5212 14.5269C18.8254 14.2392 19.0833 13.8361 19.0833 13.3333C19.0833 12.8305 18.8254 12.4274 18.5212 12.1396C18.2185 11.8534 17.8207 11.6301 17.3914 11.4584C16.577 11.1326 15.5151 10.9391 14.3711 10.9185C15.3259 11.3853 16.0424 12.0024 16.404 12.7043C16.5589 12.7493 16.7028 12.7985 16.8343 12.8511C17.159 12.981 17.3715 13.1169 17.4905 13.2295C17.5434 13.2795 17.5675 13.3142 17.578 13.3333C17.5675 13.3524 17.5434 13.387 17.4905 13.4371C17.3715 13.5496 17.159 13.6855 16.8343 13.8154C16.7793 13.8375 16.722 13.8589 16.6627 13.8797ZM17.5854 13.3508C17.5853 13.3508 17.5848 13.3494 17.5843 13.3467C17.5853 13.3494 17.5855 13.3508 17.5854 13.3508ZM17.5843 13.3199C17.5848 13.3172 17.5853 13.3158 17.5854 13.3158C17.5855 13.3158 17.5853 13.3172 17.5843 13.3199Z"
                fill="#020105"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.8143 8.34637C13.6079 8.81439 13.3178 9.23724 12.9631 9.596C13.3175 9.79994 13.7285 9.91659 14.1668 9.91659C15.5014 9.91659 16.5834 8.83461 16.5834 7.49992C16.5834 6.16523 15.5014 5.08325 14.1668 5.08325C14.0639 5.08325 13.9626 5.08968 13.8631 5.10215C14.0491 5.56088 14.1557 6.06026 14.1659 6.58325C14.1662 6.58325 14.1665 6.58325 14.1668 6.58325C14.673 6.58325 15.0834 6.99366 15.0834 7.49992C15.0834 8.00618 14.673 8.41659 14.1668 8.41659C14.0419 8.41659 13.9228 8.39161 13.8143 8.34637Z"
                fill="#020105"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.13707 5.10215C6.03761 5.08968 5.93626 5.08325 5.83341 5.08325C4.49873 5.08325 3.41675 6.16523 3.41675 7.49992C3.41675 8.83461 4.49873 9.91659 5.83341 9.91659C6.27165 9.91659 6.68264 9.79994 7.03703 9.596C6.68232 9.23724 6.39229 8.81439 6.18588 8.34637C6.07737 8.39161 5.95831 8.41659 5.83341 8.41659C5.32715 8.41659 4.91675 8.00618 4.91675 7.49992C4.91675 6.99366 5.32715 6.58325 5.83341 6.58325C5.83369 6.58325 5.83396 6.58325 5.83423 6.58325C5.84449 6.06026 5.95111 5.56088 6.13707 5.10215Z"
                fill="#020105"
              />
            </svg>
            {{event?.members_count}}</span
          >
        </div>
        <h5 class="text-[18px] decor-500 text-black">
          {{ event?.title }}
        </h5>
      </div>
      <div class="flex justify-between">
        <button
          @click="$router.push(`/event/${event?.id}`)"
          class="text-base font-medium text-black flex gap-[6px] items-center"
        >
          Ozgartirish<svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.1967 9.61745L12.1256 7.54632M7.13615 16.6787L16.6799 7.13489L12.8636 3.31859L3.31985 12.8624L3.31985 16.6797L7.13615 16.6787Z"
              stroke="black"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <nuxt-link
          :to="`/event/view/${event?.id}`"
          class="text-base font-medium text-blue flex gap-[6px] items-center"
          >Batafsil ko‘rish
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.6667 13.3335L15 10.0002M15 10.0002L11.6667 6.66683M15 10.0002L5 10.0002"
              stroke="#5C46E6"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
<script>
import moment from "moment";

export default {
  props: ["event"],
  methods: {
    moment,
  },
};
</script>
<style lang="css" scoped>
.the-card {
  display: grid;
  grid-template-columns: 362px 1fr;
  gap: 16px;
}
</style>
