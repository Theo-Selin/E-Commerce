<template>
  <div>
    <Navbar />
    <nuxt-link to="/products" class="a-button-buy-again"
      >Add a new product</nuxt-link
    >
    <Footer />
  </div>
</template>

<script>
import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer.vue";
export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>
