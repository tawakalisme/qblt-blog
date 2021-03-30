<template>
  <Post>
    <template v-slot:header-image>
      <div
        class="hero is-medium is-primary"
        :style="{
          background:
            'linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(' +
            $page.strapiPost.image.url +
            ')',
          'background-attachment': 'fixed',
          'background-position': 'center',
          'background-repeat': 'no-repeat',
          'background-size': 'cover',
        }"
      >
        <div class="hero-head">
          <Navbar :color-mode="true" />
        </div>
        <div class="hero-body">
          <h1 class="title is-1 has-text-centered is-size-3-mobile">
            {{ $page.strapiPost.title }}
          </h1>
          <p class="subtitle has-text-centered is-size-6-mobile">
            {{ $page.strapiPost.excerpt }}
          </p>
        </div>
      </div>
    </template>
    <vue-markdown :source="$page.strapiPost.article" class="content mt-6" />
  </Post>
</template>

<script>
import VueMarkdown from "vue-markdown";
import Navbar from "@/components/TheNavbar.vue";
export default {
  components: {
    VueMarkdown,
    Navbar,
  },
  metaInfo() {
    return {
      title: this.$page.strapiPost.title,
    };
  },
};
</script>

<page-query>
query($id:ID!) {
  strapiPost(id: $id){
    id
    title
    article
    slug
    excerpt
    image{
      url
      caption
    }
  }
}
</page-query>
