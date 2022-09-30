<template>
  <Nuxt-Layout>
    <Navbar />
    <Nuxt />
    <Footer />
  </Nuxt-Layout>
</template>

<script>
import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";
export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>
