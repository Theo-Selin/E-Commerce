<template>
  <div class="container">
    <nuxt-link to="/products" class="a-button-buy-again"
      >Add a new product</nuxt-link
    >
  </div>
</template>

<script>
import Navbar from "~/components/Navbar";
export default {
  components: {
    Navbar,
  },
};
</script>
