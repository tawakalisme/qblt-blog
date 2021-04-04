<template>
  <div>
    <div class="upper-layer-bg">
      <Navbar />
      <Post>
        <div class="row">
          <div class="column">
            <div class="container">
              <h1 class="title is-1">Portfolio</h1>
              <p class="subtitle">
                Design Explorations, Projects, and Experiments.
              </p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="columns">
            <div class="column">
              <div class="container">
                <div
                  class="row my-4"
                  v-for="edge in $page.allStrapiPortfolio.edges"
                  :key="edge.node.id"
                >
                  <g-link :to="`/portfolio/${edge.node.slug}`">
                    <div class="box px-0 pt-0">
                      <b-image
                        :src="`http://localhost:1337${edge.node.cover.url}`"
                        :alt="edge.node.title"
                        lazy
                        ratio="16by4"
                        responsive
                        class="border-rect"
                      />
                      <div class="mx-4 mt-4">
                        <h1 class="title is-capitalized">
                          {{ edge.node.title }}
                        </h1>
                        <p class="subtitle is-size-6">
                          {{ edge.node.description }}
                        </p>
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
    <div class="area">
      <ul class="circles">
        <li v-for="i in 15" :key="i"></li>
      </ul>
    </div>
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
};
</script>

<page-query>
query{
 allStrapiPortfolio {
    edges {
      node {
        id
        title
        description
        slug
        updated_at
        created_at
        cover {
          id
          url
        }
      }
    }
  }
}
</page-query>