<template>
  <section class="hero is-medium">
    <div class="hero-head">
      <Navbar :is-homepage="homepage"/>
    </div>
    <div class="hero-body" data-aos="fade-right">
      <div class="container has-text-centered-mobile">
        <p class="title is-1">Hello! I'm Iqbal Tawakal, a UI UX Designer</p>
        <p class="subtitle mb-5">
          I am currently live in Jember, Indonesia and open for app design or
          front-end development opportunities. <br />Reach me on my
          <strong>social media</strong> or <strong>email me</strong> your
          project description.
        </p>
        <b-button
          type="is-primary"
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
  props: ["homepage"],
  components: {
    Navbar,
  },
  mounted() {
    this.$aos.init();
  },
};
</script>
