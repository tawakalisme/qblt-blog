<template>
  <div>
    <Navbar />
    <slot name="header-image" />
    <div class="row">
      <div class="column">
        <div class="container is-max-desktop">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Navbar from "@/components/TheNavbar.vue";
export default {
  components: {
    Navbar,
  },
};
</script>
