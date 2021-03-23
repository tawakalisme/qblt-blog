<template>
  <Post>
    <template v-slot:header-image v-if="$page.post.headerImage !== ''">
      <div class="max-height">
        <g-image :src="$page.post.headerImage" class="mb-6 max-height" />
      </div>
    </template>
    <h1 class="title is-1" v-html="$page.post.title" />
    <div class="post-props" v-html="$page.post.content" />
  </Post>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.post.title,
    };
  },
};
</script>

<page-query>
query($id:ID!) {
  post(id: $id){
    id
    title
    content
    headerImage
  }
}
</page-query>

<style>
</style>