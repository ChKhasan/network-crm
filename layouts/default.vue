<template lang="html">
  <div class="layout">
    <Header />
    <Nuxt />
  </div>
</template>
<script>
import Header from "@/components/layouts/Header.vue";
export default {
  middleware: ["auth"],
  mounted() {
    localStorage.removeItem("accessCode");
  },
  components: {
    Header,
  },
};
</script>
<style lang=""></style>
