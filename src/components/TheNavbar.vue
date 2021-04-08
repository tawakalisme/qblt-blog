<template>
  <b-navbar
    wrapper-class="container"
    transparent
    spaced
    :class="{ 'is-primary': colorMode }"
  >
    <template #brand>
      <b-navbar-item tag="g-link" to="/" aria-label="qblt">
        <Icon v-if="!colorMode" />
        <IconInvert v-else
      /></b-navbar-item>
    </template>
    <template #end>
      <b-navbar-item to="/" tag="g-link" class="has-text-weight-semibold"
        >Home</b-navbar-item
      >
      <b-navbar-item to="/posts" tag="g-link" class="has-text-weight-semibold"
        >Blog Posts</b-navbar-item
      >
      <b-navbar-item
        to="/portfolios"
        tag="g-link"
        class="has-text-weight-semibold"
        >Portfolios</b-navbar-item
      >
      <b-navbar-item
        v-if="isHomepage"
        @click="scrollToContact"
        class="has-text-weight-semibold"
        >Contact</b-navbar-item
      >
    </template>
  </b-navbar>
</template>

<script>
import Icon from "@/assets/Icon.svg";
import IconInvert from "@/assets/Icon-invert.svg";
export default {
  props: ["color-mode", "is-homepage"],
  components: { Icon, IconInvert },
  methods: {
    scrollToContact() {
      window.scrollTo({
        top:
          document.body.scrollHeight || document.documentElement.scrollHeight,
        left: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>
