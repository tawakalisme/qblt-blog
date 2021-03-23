<template>
  <Post
    ><div class="row">
      <div class="column">
        <div class="container">
          <h1 class="title is-1">Blog Posts</h1>
          <p class="subtitle">Check Out What’s on My Mind.</p>
          <div class="tile is-ancestor is-vertical">
            <div
              v-for="post in $page.allPost.edges"
              :key="post.node.id"
              class="tile is-parent"
            >
              <g-link :to="post.node.path">
                <div class="card">
                  <div class="card-content">
                    <h1 class="title is-3 is-capitalized">
                      {{ post.node.title }}
                    </h1>
                    <p class="content">{{ post.node.excerpt }}</p>
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
          <Pager
            :info="$page.allPost.pageInfo"
            class="pager"
            linkClass="pagination-link"
            :range="$page.allPost.perPage"
          />
        </div>
      </div></div
  ></Post>
</template>

<script>
import { Pager } from "gridsome";
export default {
  components: {
    Pager,
  },
  metaInfo: {
    title: "Blog Posts",
  },
};
</script>

<page-query>
query($page: Int){
  allPost(sortBy: "date", order: DESC, perPage: 5, page: $page) @paginate{
    pageInfo{
      totalPages
      totalItems
      currentPage
      perPage
    }
    edges{
      node{
        id
        title
        excerpt
        path
      }
    }
  }
}
</page-query>

