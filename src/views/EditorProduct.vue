<template>
  <div>
    <label>
      Category
      <input v-model="newProduct.category" type="text" />
    </label>
    <label>
      Title
      <input v-model="newProduct.title" type="text" />
    </label>
    <label>
      Image src
      <input v-model="newProduct.image" type="text" />
    </label>
    <label>
      Price
      <input v-model="newProduct.price" type="number" />
    </label>
  </div>
  <button @click="onAdd">Add new product</button>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  name: 'EditorProduct',

  data() {
    return {
      newProduct: {},
    }
  },
  methods: {
    ...mapActions('products', ['addProduct']),
    onAdd() {
      this.addProduct(this.newProduct)
      this.newProduct = {}
    },
  },
}
</script>

<style lang="scss" scoped></style>
