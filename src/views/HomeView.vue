<template>
  <main-master-page>
    <div class="home">
      <h1>Вітаємо!</h1>
      <div>Сподіваюсь, ви не будете чемними і обов'язково щось купите.</div>
    </div>
  </main-master-page>
</template>

<script>
import MainMasterPage from '@/masterpages/MainMasterPage.vue'
export default {
  name: 'HomeView',
  components: {
    MainMasterPage,
  },
}
</script>
