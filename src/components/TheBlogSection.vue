<template>
  <section class="blog-posts">
    <div class="row">
      <div class="column">
        <div class="container">
          <h1 class="title is-2 has-text-centered-mobile">Blog Posts</h1>
          <p class="subtitle has-text-centered-mobile">
            Check Out What’s on My Mind.
          </p>
          <div class="tile is-ancestor is-flex-wrap-wrap">
            <div
              class="tile is-4 is-parent"
              v-for="post in $static.allStrapiPost.edges"
              :key="post.node.id"
            >
              <g-link :to="`/post/${post.node.slug}`" class="">
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
            to="/posts"
            type="is-primary"
            size="is-small"
            class="is-light"
            outlined
          >
            View All Posts
          </b-button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import VueMarkdown from "vue-markdown";
export default {
  components: {
    VueMarkdown,
  },
  mounted() {
    this.$aos.init();
  },
};
</script>


<static-query>
query{
  allStrapiPost(limit: 3){
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
</static-query>