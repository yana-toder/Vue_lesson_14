<template>
  <div class="container">
    <div>
      <img :src="data.image" :alt="data.title" />
    </div>
    <div>
      <h3>{{ data.title }}</h3>
    </div>
    <slot>
      <div>{{ data.price }}</div>
    </slot>
    <button>Купити</button>
  </div>
</template>

<script>
export default {
  name: 'DataCard',

  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  border: 2px solid #42b983;
  gap: 10px;
  padding: 15px;
  display: flex;
  flex-direction: column;

  img {
    width: 150px;
    height: 150px;
    object-fit: contain;
  }
  h3 {
    font-size: 18px;
  }
}
</style>
