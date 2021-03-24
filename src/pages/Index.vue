<template>
  <div>
    <div class="hero is-small">
      <div class="hero-body">
        <div class="has-text-centered">
          <p>This site is under maintenance. Some contents might be weird.</p>
        </div>
      </div>
    </div>
    <Hero />
    <BlogSection />
    <PortfolioSection />
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
};
</script>