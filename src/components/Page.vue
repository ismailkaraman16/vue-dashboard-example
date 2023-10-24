
<template>
  <div class="page">

    <div class="pageTitle">{{ currentPage }}</div>

    <router-view />

  </div>
</template>

<script>
export default {
  computed: {
    currentPage() {
      return this.$route.name;
    }
  }
};
</script>

<style>
.page {
  animation: opacity-on ease-in-out 0.2s;
  display: block;
  height: 100%;
  width: 100%;
  font-family: 'Exo 2', sans-serif;
}

.pageTitle {
  width: calc(100% - 40px);
  height: 40px;
  border-radius: 20px 20px 0 0;
  padding: 20px;
  font-size: xx-large;
  font-weight: 600;
  color: rgb(102, 122, 152);
  user-select: none;
}

.pageContent {
  width: calc(100% - 40px);
  height: calc(100% - 170px);
  padding-left: 20px;
  padding-right: 20px;
  overflow: auto;
}

.bottomBar {
  width: calc(100% - 40px);
  height: 50px;
  padding: 20px;
  border-radius: 0 0 20px 20px;
  display: flex;
  justify-content: flex-end;
}

@media screen and (max-width: 700px) {
  .bottomBar{justify-content: center;}
}

</style>
