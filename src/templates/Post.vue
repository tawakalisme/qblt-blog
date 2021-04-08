<template>
  <Post>
    <div class="hero is-medium">
      <div class="hero-body">
        <h1 class="title has-text-centered is-1 is-size-2-mobile">
          {{ $page.strapiPost.title }}
        </h1>
        <p class="subtitle is-size-7 has-text-centered has-text-grey-light">
          Posted on {{ getUpdateTime }}
        </p>
      </div>
    </div>
    <h2 class="title">{{ $page.strapiPost.excerpt }}</h2>
    <vue-markdown :source="$page.strapiPost.article" class="content mt-2" />
  </Post>
</template>

<script>
import VueMarkdown from "vue-markdown";
export default {
  components: {
    VueMarkdown,
  },
  metaInfo() {
    return {
      title: this.$page.strapiPost.title,
    };
  },
  computed: {
    getUpdateTime() {
      const time = this.$page.strapiPost.updated_at;
      return this.$moment.utc(time).local().format("HH:mm dddd, D MMMM YYYY");
    },
  },
  mounted() {
    this.$aos.init();
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
    updated_at
  }
}
</page-query>
