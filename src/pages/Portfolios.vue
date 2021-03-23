<template>
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
      <div class="column">
        <div class="container">
          <div class="tile is-ancestor flex-wrapping">
            <div
              class="tile is-parent is-6"
              v-for="edge in $page.allPortfolio.edges"
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
                    <p class="subtitle is-size-6">{{ edge.node.excerpt }}</p>
                  </div>
                </div>
              </g-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="row">
      <div class="column is-centered">
        <div class="container has-text-centered">
          <Pager
            :info="$page.allPost.pageInfo"
            class="pager"
            linkClass="pagination-link"
            :range="$page.allPost.perPage"
          />
        </div>
      </div>
    </div> -->
  </Post>
</template>

<script>
export default {
  metaInfo: {
    title: "Portfolios",
  },
};
</script>

<page-query>
query($page: Int){
  allPortfolio(sortBy: "date", order: DESC, perPage: 6, page: $page) @paginate{
    edges{
      node{
        id
        path
        title
        coverImage
        excerpt
      }
    }
  }
}
</page-query>

<style>
</style>