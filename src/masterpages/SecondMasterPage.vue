<template>
  <div>
    <router-link to="/">На головну</router-link> |
    <slot>
      <h2>Наші контакти</h2>
      <div>Адреса магазину: біля будинку Баби Галі</div>
      <div>Менеджер: Дід Петро</div>
      <div>Заступник: онука Софійка</div>
    </slot>
    <h2>Галерея</h2>
    <div class="image-container">
      <div v-for="(image, index) in imageList" :key="index" class="image-item">
        <img :src="image" alt="image" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SecondMasterPage',

  computed: {
    imageList() {
      return this.$store.getters.images
    },
  },
}
</script>

<style lang="scss" scoped>
.image-container {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}
.image-item {
  display: flex;
  img {
    width: 415px;
    height: 233px;
  }
}
</style>
