<template>
  <div>
    <Post>
      <div class="row">
        <div class="column">
          <div class="container">
            <h1 class="title is-1">Blog Posts</h1>
            <p class="subtitle">Check Out What’s on My Mind.</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="columns">
          <div class="column">
            <div class="container">
              <div class="tile is-ancestor is-flex-wrap-wrap is-vertical">
                <div
                  class="tile is-parent"
                  v-for="post in $page.allStrapiPost.edges"
                  :key="post.node.id"
                >
                  <g-link :to="`/post/${post.node.slug}`">
                    <div class="tile is-child box">
                      <h1 class="title is-4 is-capitalized">
                        {{ post.node.title }}
                      </h1>
                      <p class="subtitle is-size-6">
                        {{ post.node.excerpt }}
                      </p>
                      <span class="is-size-7">
                        {{ post.node.updated_at }}
                      </span>
                    </div></g-link
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="column is-centered">
          <div class="container has-text-centered">
            <Pager
              :info="$page.allStrapiPost.pageInfo"
              class="pager"
              linkClass="pagination-link"
              :range="$page.allStrapiPost.perPage"
            />
          </div>
        </div></div
    ></Post>
  </div>
</template>

<script>
import { Pager } from "gridsome";
import Navbar from "@/components/TheNavbar.vue";
export default {
  components: {
    Pager,
    Navbar,
  },
  metaInfo: {
    title: "Blog Posts",
  },
};
</script>

<page-query>
query($page: Int){
  allStrapiPost(sortBy: "updated_at", order: DESC, perPage: 10, page: $page){
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
        article
        excerpt
        slug
        updated_at(format: "dddd, D MMMM YYYY")
      }
    }
  }
}
</page-query>

