<template>
  <main-master-page>
    <div class="supplier-container">
      <data-card
        v-for="supplier in suppliersList"
        :key="supplier.id"
        :data="supplier"
      >
        <div class="icons-container">
          <div v-for="(icon, index) in supplier.icons" :key="index">
            <img :src="icon" alt="icon" />
          </div>
        </div>
      </data-card>
    </div>
    <template #left-side>
      <div class="left-side">
        Набільш популярний: <span class="open">Економ</span>
      </div>
    </template>

    <template #right-side>
      <div class="right-side">Статус: <span class="open">Відкрито</span></div>
    </template>
  </main-master-page>
</template>

<script>
import DataCard from '@/components/DataCard.vue'
import MainMasterPage from '@/masterpages/MainMasterPage.vue'
import {mapGetters} from 'vuex'

export default {
  name: 'SuppliersView',
  components: {
    MainMasterPage,
    DataCard,
  },

  computed: {
    ...mapGetters('suppliers', ['suppliersList']),
  },
}
</script>

<style lang="scss" scoped>
.supplier-container {
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
  img {
    width: 150px;
    height: 150px;
    object-fit: contain;
  }
}
.open {
  color: #42b983;
}
.icons-container {
  display: flex;

  gap: 10px;
  img {
    width: 25px;
    height: 25px;
  }
}
</style>
