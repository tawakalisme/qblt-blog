<template>
  <section class="portfolio-section">
    <div class="row">
      <div class="column">
        <div class="container">
          <h1 class="title is-1">Portfolios</h1>
          <p class="subtitle">
            Design Explorations, Projects, and Experiments.
          </p>
          <div class="tile is-ancestor flex-wrapping">
            <div
              class="tile is-parent is-4"
              v-for="edge in $static.allPortfolio.edges"
              :key="edge.node.id"
            >
              <g-link :to="edge.node.path">
                <div class="card">
                  <div class="card-image">
                    <figure class="image">
                      <img :src="edge.node.coverImage" :alt="edge.node.title" />
                    </figure>
                  </div>
                  <div class="card-content">
                    <h1 class="title is-4">{{ edge.node.title }}</h1>
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
            outlined
          >
            View All Portfolios
          </b-button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>
<static-query>
query($page: Int){
  allPortfolio(sortBy: "date", order: DESC, perPage: 6, page: $page) @paginate{
    edges{
      node{
        id
        path
        title
        coverImage
      }
    }
  }
}
</static-query>