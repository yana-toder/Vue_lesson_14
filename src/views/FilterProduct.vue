<template>
  <div>
    <label>
      <input v-model="currentValue" type="text" />
    </label>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  name: 'FilterProduct',

  computed: {
    ...mapGetters('products', ['searchValue']),
    currentValue: {
      get() {
        return this.searchValue
      },
      set(val) {
        return this.setSearchValue(val)
      },
    },
  },
  methods: {
    ...mapActions('products', ['setSearchValue']),
  },
}
</script>

<style lang="scss" scoped></style>
