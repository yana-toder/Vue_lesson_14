<template>
  <div>
    <second-master-page>
      <div>
        <h2>Правила купівлі:</h2>
        <p>* Купуємо багато</p>
        <p>* Платимо швидко</p>
        <p>* Насолоджуємось товаром</p>
      </div>
    </second-master-page>
  </div>
</template>

<script>
import SecondMasterPage from '@/masterpages/SecondMasterPage.vue'

export default {
  name: 'ShoppingRules',
  components: {SecondMasterPage},
}
</script>

<style lang="scss" scoped></style>
