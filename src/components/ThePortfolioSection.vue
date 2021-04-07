<template>
  <section class="portfolio-section">
    <div class="row">
      <div class="column">
        <div class="container">
          <h1 class="title is-2 has-text-centered-mobile">Portfolios</h1>
          <p class="subtitle has-text-centered-mobile">
            Design Explorations, Projects, and Experiments.
          </p>
          <div class="tile is-ancestor is-flex-wrap-wrap">
            <div
              class="tile is-parent is-4"
              v-for="edge in $static.allStrapiPortfolio.edges"
              :key="edge.node.id"
            >
              <g-link :to="`/portfolio/${edge.node.slug}`">
                <div class="box px-0 pt-0">
                  <figure class="image">
                    <g-image
                      :src="edge.node.cover.formats.small.url"
                      :alt="edge.node.title"
                    />
                  </figure>
                  <div class="mx-4 mt-4">
                    <h1 class="title is-4 is-capitalized">
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
    <div class="row">
      <div class="column is-centered">
        <div class="container has-text-centered">
          <b-button
            tag="router-link"
            to="/portfolios"
            type="is-primary"
            size="is-small"
            class="is-light"
            outlined
          >
            View All Portfolios
          </b-button>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
img {
  border-radius: 6px 6px 0 0;
}
</style>

<static-query>
query{
 allStrapiPortfolio(limit: 3) {
    edges {
      node {
        id
        title
        description
        slug
        updated_at(format: "dddd, D MMMM YYYY")
        cover {
          formats{
            small{
              url
            }
          }
        }
      }
    }
  }
}
</static-query>