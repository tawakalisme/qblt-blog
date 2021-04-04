<template>
  <div>
    <div class="upper-layer-bg">
      <Hero :homepage="true"/>
      <BlogSection />
      <PortfolioSection />
      <Footer />
    </div>
    <div class="area">
      <ul class="circles">
        <li v-for="i in 15" :key="i"></li>
      </ul>
    </div>
  </div>
</template>

<script>
import Hero from "@/components/TheHero.vue";
import BlogSection from "@/components/TheBlogSection.vue";
import PortfolioSection from "@/components/ThePortfolioSection.vue";
import Footer from "@/components/TheFooter.vue";
export default {
  components: {
    Hero,
    BlogSection,
    PortfolioSection,
    Footer,
  },
  metaInfo: {
    title: "Hello, world!",
  },
};
</script>

