<template>
  <main-master-page>
    <div class="link-container">
      <router-link to="/products/selector" class="link-item">
        Пошук
        <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
      </router-link>
      <router-link to="/products/editor" class="link-item">
        Додати новий продукт
        <font-awesome-icon :icon="['fas', 'plus']" />
      </router-link>
      <router-view />
    </div>
    <div class="card-container">
      <data-card
        v-for="product in filteredProductsList"
        :key="product.id"
        :data="product"
      >
      </data-card>
    </div>
    <template #right-side>
      <div class="right-side">Статус: <span class="open">відкрито</span></div>
    </template>
  </main-master-page>
</template>

<script>
import DataCard from '@/components/DataCard.vue'
import MainMasterPage from '@/masterpages/MainMasterPage.vue'
import {mapGetters} from 'vuex'

export default {
  name: 'ProductsView',
  components: {
    MainMasterPage,
    DataCard,
  },

  computed: {
    ...mapGetters('products', ['filteredProductsList']),
  },
}
</script>
<style lang="scss" scoped>
.open {
  color: #42b983;
}
.link-container {
  padding: 20px 0;
}
.link-item {
  color: #42b983;
  text-decoration: none;
  font-weight: bold;
  margin-right: 30px;
}
.card-container {
  display: flex;

  gap: 10px;
  margin-bottom: 20px;
}
.right-side {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
