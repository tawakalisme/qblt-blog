<template>
  <div>
    <Hero :homepage="true"/>
    <BlogSection data-aos="fade-up" />
    <PortfolioSection data-aos="fade-up" />
    <Footer data-aos="fade-up" />
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
  mounted() {
    this.$aos.init();
  },
};
</script>

