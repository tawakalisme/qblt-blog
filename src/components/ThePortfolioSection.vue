<template>
  <section class="portfolio-section">
    <div class="row">
      <div class="column">
        <div class="container">
          <h1 class="title is-2 has-text-centered-mobile">Portfolios</h1>
          <p class="subtitle has-text-centered-mobile">
            Design Explorations, Projects, and Experiments.
          </p>
          <div class="tile is-ancestor is-flex-wrap-wrap">
            <div
              class="tile is-parent is-4"
              v-for="edge in $static.allStrapiPortfolio.edges"
              :key="edge.node.id"
            >
              <g-link :to="`/portfolio/${edge.node.slug}`">
                <div
                  class="box p-0"
                  @mouseenter="hoverActive(edge.node.id)"
                  @mouseleave="hoverActive(edge.node.id)"
                >
                  <div class="parent m-0">
                    <g-image
                      :src="edge.node.cover.formats.large.url"
                      :alt="edge.node.title"
                    />
                    <transition name="fade">
                      <div
                        class="child"
                        v-if="hover && selectedId === edge.node.id"
                      >
                        <div class="title-wrapper">
                          <h1
                            class="title is-4 is-capitalized has-text-centered"
                          >
                            {{ edge.node.title }}
                          </h1>
                          <p class="subtitle is-size-6 has-text-centered">
                            {{ edge.node.description }}
                          </p>
                        </div>
                      </div>
                    </transition>
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
            to="/portfolios"
            type="is-primary"
            size="is-small"
            class="is-light"
            outlined
          >
            View All Portfolios
          </b-button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      hover: false,
      selectedId: 0,
    };
  },
  methods: {
    hoverActive(id) {
      this.selectedId = id;
      this.hover = !this.hover;
      // this.selectedId = 0;
    },
  },
};
</script>

<style lang="scss" scoped>
.box {
  h1,
  p {
    color: #fff;
  }
}
.parent {
  position: relative;
}
.child {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 16px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(black, 0.5);
  backdrop-filter: blur(4px);
  .title-wrapper {
    position: absolute;
    border-radius: 16px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
img {
  display: block;
  object-fit: cover;
  border-radius: 16px;
  height: 40%;
  max-height: 360px;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s ease;
}
</style>

<static-query>
query{
 allStrapiPortfolio(limit: 3) {
    edges {
      node {
        id
        title
        description
        slug
        updated_at(format: "dddd, D MMMM YYYY")
        cover {
          formats{
            large{
              url
            }
          }
        }
      }
    }
  }
}
</static-query>