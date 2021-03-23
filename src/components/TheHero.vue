<template>
  <section class="hero is-medium">
    <div class="hero-head">
      <Navbar />
    </div>
    <div class="hero-body">
      <div class="container">
        <p class="title is-1">
          Hello! I'm Iqbal Tawakal, a UI UX Designer
        </p>
        <p class="subtitle mb-5">
          I am currently live in Jember, Indonesia and currently open for app
          design or front-end development opportunities. <br />Reach me on my
          <strong>social media</strong> or <strong>email me</strong> your Portfolio description.
        </p>
        <b-button type="is-primary" size="is-medium" class="mr-4" tag="router-link" to="/portfolios"
          >See My Portfolios</b-button
        >
        <b-button
          type="is-primary is-light"
          size="is-medium"
          icon-left="envelope"
          tag="a"
          href="mailto:tawakalisme@gmail.com"
          >Email Me</b-button
        >
      </div>
    </div>
  </section>
</template>

<script>
import Navbar from "@/components/TheNavbar.vue";
export default {
  components: {
    Navbar,
  },
};
</script>

<style>
</style>