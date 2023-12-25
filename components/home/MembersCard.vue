<template lang="html">
  <div class="card px-4 py-4 rounded-xl bg-white">
    <div class="image h-[72px] w-[72px] overflow-hidden rounded-lg">
      <img
        v-if="member?.image"
        class="w-full h-full object-cover"
        :src="member?.image"
        alt=""
      />
      <img
        v-else
        class="w-full h-full object-cover"
        src="@/assets/images/user.png"
        alt=""
      />
    </div>
    <div class="body flex justify-between w-full">
      <div class="flex flex-col gap-1 justify-center">
        <h5 class="text-black decor-500 text-[14px]">{{ member?.user?.full_name }}</h5>
        <p class="text-[14px] text-[#1878F3] font-semibold">{{ member?.job_title }}</p>
        <p class="text-[14px] text-grey-40 font-semibold">{{ member?.company_name }}</p>
      </div>
      <div class="flex flex-col gap-1">
        <p class="text-black text-[14px]">
          +{{
            `${member?.user?.phone_number}`
              .match(/(\d{3})(\d{2})(\d{3})(\d{2})(\d{2})/)
              .filter((item, index) => index != 0)
              .join(" ")
          }}
        </p>
        <p class="text-[14px] text-[#1878F3] font-semibold" v-if="member?.telegram">
          <a
            v-if="!member?.telegram.includes('http://')"
            :href="`http://t.me/${member?.telegram.replace('@', '')}`"
            target="_blank"
            >{{ member?.telegram }}</a
          >
          <a v-else target="_blank" :href="member?.telegram">{{ member?.telegram }}</a>
        </p>
        <p>-------</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["member"],
};
</script>
<style lang="css" scoped>
.card {
  display: grid;
  grid-template-columns: 72px 1fr;
  gap: 16px;
}
</style>
