<template>
  <Portfolio>
    <div
      class="hero is-medium is-primary"
      :style="coverBackground($page.strapiPortfolio.cover.url)"
    >
      <div class="hero-head">
        <Navbar :color-mode="true" />
      </div>
      <div class="hero-body">
        <p
          class="is-size-7 has-text-centered is-uppercase mb-2 has-text-weight-light"
        >
          {{ $page.strapiPortfolio.category.categoryName }}
        </p>
        <h1 class="title is-1 has-text-centered is-size-3-mobile">
          {{ $page.strapiPortfolio.title }}
        </h1>
        <p class="subtitle has-text-centered is-size-6-mobile">
          {{ $page.strapiPortfolio.description }}
        </p>
        <div class="has-text-centered">
          <b-button
            tag="a"
            :href="$page.strapiPortfolio.dribbble"
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
            <p class="heading">Typeface</p>
            <p class="title">{{ $page.strapiPortfolio.font }}</p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Made By</p>
            <p class="title">{{ $page.strapiPortfolio.tools }}</p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Platform</p>
            <p class="title">{{ $page.strapiPortfolio.platform }}</p>
          </div>
        </div>
      </nav>
      <div class="tile is-ancestor is-flex-wrap-wrap">
        <div
          :key="image.id"
          class="tile"
          :class="{
            'is-12': $page.strapiPortfolio.images.length === 1,
            'is-6':
              $page.strapiPortfolio.images.length % 2 === 0 &&
              $page.strapiPortfolio.images.length % 3 !== 0,
            'is-4':
              $page.strapiPortfolio.images.length % 3 === 0 &&
              $page.strapiPortfolio.images.length > 4,
          }"
          v-for="image in $page.strapiPortfolio.images"
        >
          <div class="container has-text-centered on-hover">
            <g-link :href="image.url" target="_blank"
              ><g-image :src="image.url"
            /></g-link>
          </div>
        </div>
      </div>
    </template>
  </Portfolio>
</template>

<style lang="scss" scoped>
@for $i from 1 through 20 {
  .tile:nth-child(#{$i}) {
    overflow: hidden;
    .on-hover {
      transition: 0.2s transform;
    }
    .on-hover:hover {
      transform: scale(1.05);
    }
  }
}
</style>

<script>
import Navbar from "@/components/TheNavbar.vue";
export default {
  components: {
    Navbar,
  },
  metaInfo() {
    return {
      title: this.$page.strapiPortfolio.title,
    };
  },
  mounted() {
    this.$aos.init();
  },
  methods: {
    coverBackground(url) {
      return {
        background:
          "linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,.9)), url(" + url + ")",
        "background-attachment": "fixed",
        "background-position": "center",
        "background-repeat": "no-repeat",
        "background-size": "cover",
      };
    },
  },
};
</script>

<page-query>
query($id: ID!){
  strapiPortfolio(id: $id) {
    id
    title
    description
    font
    platform
    tools
    slug
    dribbble
    category{
      categoryName
    }
    created_at
    cover {
      id
      url
    }
    images {
      id
      url
      caption
    }
  }
}
</page-query>
