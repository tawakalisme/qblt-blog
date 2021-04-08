<template>
  <div>
    <Post>
      <div class="row" data-aos="fade-left">
        <div class="column">
          <div class="container">
            <h1 class="title is-1">Portfolio</h1>
            <p class="subtitle">
              Design Explorations, Projects, and Experiments.
            </p>
          </div>
        </div>
      </div>
      <div class="row" data-aos="fade-up">
        <div class="columns">
          <div class="column">
            <div class="container">
              <div
                class="row mb-4"
                v-for="edge in $page.allStrapiPortfolio.edges"
                :key="edge.node.id"
              >
                <g-link :to="`/portfolio/${edge.node.slug}`">
                  <div class="box px-0 pt-0">
                    <figure class="image">
                      <img :src="edge.node.cover.url" :alt="edge.node.title" />
                    </figure>
                    <div class="mx-4 mt-4">
                      <h1 class="title is-capitalized">
                        {{ edge.node.title }}
                      </h1>
                      <p class="subtitle is-size-6">
                        {{ edge.node.description }}
                      </p>
                      <span class="is-size-7">
                        {{ edge.node.updated_at }}
                      </span>
                    </div>
                  </div>
                </g-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Post>
  </div>
</template>

<script>
import Navbar from "@/components/TheNavbar.vue";
export default {
  components: {
    Navbar,
  },
  metaInfo: {
    title: "Portfolios",
  },
  methods: {
    checkCover(url, alt) {
      if (url === null) {
        return `https://dummyimage.com/750/ffffff/3b83f6.png&text=${alt}`;
      }
      return url.formats.medium.url;
    },
  },
  mounted() {
    this.$aos.init();
  },
};
</script>

<style lang="scss" scoped>
img {
  border-radius: 6px 6px 0 0;
  max-height: 320px;
  object-fit: cover;
}
</style>

<page-query>
query{
 allStrapiPortfolio {
    edges {
      node {
        id
        title
        description
        slug
        updated_at(format: "dddd, D MMMM YYYY")
        cover {
          id
          url
        }
      }
    }
  }
}
</page-query>