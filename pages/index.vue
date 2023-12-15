<template>
  <div class="home-page pt-10 pb-[160px]">
    <div class="max-w-[818px] mx-auto 2xl:px-4">
      <div class="mb-3">
        <h4 class="text-[24px] text-black decor-500">Tadbirlar</h4>
      </div>
      <div class="search">
        <div class="relative flex items-center w-full">
          <input
            v-model="search"
            @change="onSearch"
            class="rounded-[12px] w-full border border-solid border-grey-8 pl-12 bg-white h-12"
            type="text"
            placeholder="Tadbirni qidirish"
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
        <div>
          <button
            @click="$router.push('/add')"
            class="flex gap-2 h-12 rounded-xl bg-[#3C4BDC] items-center justify-center text-white px-5 text-[14px] font-semibold"
          >
            Tadbir qoshish<svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.4"
                d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.75 8C12.75 7.58579 12.4142 7.25 12 7.25C11.5858 7.25 11.25 7.58579 11.25 8V11.25H8C7.58579 11.25 7.25 11.5858 7.25 12C7.25 12.4142 7.58579 12.75 8 12.75H11.25V16C11.25 16.4142 11.5858 16.75 12 16.75C12.4142 16.75 12.75 16.4142 12.75 16V12.75H16C16.4142 12.75 16.75 12.4142 16.75 12C16.75 11.5858 16.4142 11.25 16 11.25H12.75V8Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>
      <div class="list mt-8 flex flex-col gap-6" v-if="!loading">
        <TheCard v-for="event in events" :key="event?.id" :event="event" />
      </div>
      <div class="list mt-8 flex flex-col gap-6" v-if="loading">
        <a-skeleton
          :paragraph="false"
          class="loading-card"
          v-for="elem in [1, 2, 3, 4, 5]"
          :key="elem"
        />
      </div>
      <VPagination
        :load="true"
        class="xl:hidden"
        :totalPage="totalPage"
        @getData="__GET_EVENTS"
      />
    </div>
  </div>
</template>

<script>
import TheCard from "../components/home/TheCard.vue";
import eventsApi from "../api/eventsApi";
import VPagination from "../components/VPagination.vue";
export default {
  name: "IndexPage",
  data() {
    return {
      events: [],
      totalPage: 1,
      loading: false,
      search: "",
    };
  },
  mounted() {
    this.__GET_EVENTS();
    this.search = this.$route.query?.search ? this.$route.query?.search : "";
  },
  methods: {
    async __GET_EVENTS() {
      try {
        this.loading = true;
        const data = await eventsApi.getEvents({
          params: {
            ...this.$route.query,
            page_size: this.$route.query?.page_size ? this.$route.query?.page_size : 5,
          },
        });
        this.totalPage = data?.data?.count;
        this.events = data?.data?.results;
      } catch (e) {
        if (e.response.status == 401) {
          this.__GET_EVENTS();
        }
      } finally {
        this.loading = false;
      }
    },
    async onSearch(e) {
      if (this.$route.query?.search != e.target.value && e.target.value.length > 2) {
        await this.$router.replace({
          path: this.$route.path,
          query: { ...this.$route.query, page: 1, search: e.target.value },
        });
        this.__GET_EVENTS();
      }
    },
  },
  watch: {
    async search(val) {
      if (val.length == 0 && this.$route.query?.search) {
        await this.$router.replace({
          path: this.$route.path,
          query: {
            page: 1,
            page_size: this.$route.query.page_size,
          },
        });
        this.__GET_EVENTS();
      }
    },
  },
  components: { TheCard, VPagination },
};
</script>
<style lang="css" scoped>
.search {
  display: grid;
  grid-template-columns: 1fr 170px;
  grid-gap: 12px;
}
.loading-card :deep(.ant-skeleton-title) {
  height: 230px;
  border-radius: 30px;
  margin-bottom: 0;
  margin-top: 0;
}
</style>
