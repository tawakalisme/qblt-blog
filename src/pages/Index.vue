<template>
  <div>
    <Hero :homepage="true" />
    <BlogSection data-aos="fade-up" data-aos-delay="200" />
    <PortfolioSection data-aos="fade-up" />
    <Footer />
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

