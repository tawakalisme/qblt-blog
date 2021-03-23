<template>
  <Portfolio>
    <div
      class="hero is-medium is-primary"
      :style="{
        background:
          'linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,.9)), url(' +
          $page.portfolio.coverImage +
          ')',
        'background-position': 'center',
        'background-size': 'cover',
      }"
    >
      <div class="hero-head">
        <Navbar :color-mode="true" />
      </div>
      <div class="hero-body">
        <p class="is-size-7 has-text-centered uppercase mb-2">
          {{ $page.portfolio.category }}
        </p>
        <h1
          v-html="$page.portfolio.title"
          class="title is-1 has-text-centered is-size-3-mobile"
        ></h1>
        <p
          v-html="$page.portfolio.content"
          class="has-text-centered is-size-6-mobile"
        ></p>
        <div class="has-text-centered">
          <b-button
            tag="a"
            href="/"
            icon-left="dribbble"
            icon-pack="fab"
            type="is-dribbble"
          >
            View on Dribbble
          </b-button>
        </div>
      </div>
    </div>
    <template #images>
      <nav class="level my-6">
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Font Family</p>
            <p class="title">{{ $page.portfolio.fonts }}</p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Made By</p>
            <p class="title">{{ $page.portfolio.tools }}</p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Platform</p>
            <p class="title">{{ $page.portfolio.platform }}</p>
          </div>
        </div>
      </nav>
      <div class="tile is-ancestor flex-wrapping">
        <div
          :key="image"
          class="tile is-6"
          v-for="image in $page.portfolio.images"
        >
          <div class="container has-text-centered">
            <g-image :src="image" />
          </div>
        </div>
      </div>
    </template>
  </Portfolio>
</template>

<script>
import Navbar from "@/components/TheNavbar.vue";
export default {
  components: {
    Navbar,
  },
  metaInfo() {
    return {
      title: this.$page.portfolio.title,
    };
  },
};
</script>

<style scope lang="scss">
.uppercase {
  text-transform: uppercase;
  font-weight: 300;
}
</style>

<page-query>
query($id: ID!){
  portfolio(id: $id){
    id
    title
    content
    coverImage
    platform
    category
    fonts
    tools
    slug
    images
  }
}
</page-query>