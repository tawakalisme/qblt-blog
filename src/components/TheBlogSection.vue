<template>
  <section class="blog-posts">
    <div class="row">
      <div class="column">
        <div class="container">
          <h1 class="title is-1">Blog Posts</h1>
          <p class="subtitle">Check Out What’s on My Mind.</p>
          <div class="tile is-ancestor flex-wrapping">
            <div
              v-for="post in $static.posts.edges"
              :key="post.node.id"
              class="tile is-parent"
            >
              <g-link :to="post.node.path">
                <div class="card">
                  <div class="card-content">
                    <h1 class="title is-4 is-capitalized">
                      {{ post.node.title }}
                    </h1>
                    <p class="content is-size-6">{{ post.node.excerpt }}</p>
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
            to="/posts"
            type="is-primary"
            size="is-small"
            outlined
          >
            View All Posts
          </b-button>
        </div>
      </div>
    </div>
  </section>
</template>

<static-query>
query($static: Int){
  posts: allPost(sortBy: "date", order: DESC, perPage: 6, page: $static) @paginate{
    edges{
      node{
        path
        title
        excerpt
      }
    }
  }
}
</static-query>