<template>
  <div class="container">
    <nav>
      <router-link to="/">Головна</router-link> |
      <router-link to="/products">Товари</router-link> |
      <router-link to="/suppliers">Постачальники</router-link> |
      <router-link to="/contacts">Контакти</router-link> |
      <router-link to="/shopping-rules">Правила купівлі</router-link> |
    </nav>
    <slot></slot>
    <footer class="footer">
      <slot name="left-side">
        <div>Рейтинг магазину: 54449</div>
      </slot>
      <slot name="right-side">
        <div class="right-side">
          <div>Власник: Баба Галя</div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIV9-EWI4ToeYVJfUupFWHOcDJsBsyYOhM_Q&usqp=CAU"
            alt="Galia"
          />
        </div>
      </slot>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'MainMasterPage',
}
</script>

<style lang="scss" scoped>
.container {
  max-width: 1200px;
  padding: 0 30px;
}
.footer {
  display: flex;

  justify-content: space-between;
  align-items: center;
}
.right-side {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
