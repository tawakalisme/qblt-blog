// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import PostLayout from "~/layouts/PostLayout.vue";
import PortfolioLayout from "~/layouts/PortfolioLayout.vue";

import Navbar from "~/components/TheNavbar.vue";

import Buefy from "buefy";
import "~/styles/prism.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import moment from "moment";

import "./styles/index.scss";

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Post", PostLayout);
  Vue.component("Portfolio", PortfolioLayout);

  Vue.component("Navbar", Navbar);

  Vue.prototype.$moment = moment;

  head.link.push({
    rel: "stylesheet",
    href: "https://use.fontawesome.com/releases/v5.2.0/css/all.css",
  });

  if (process.isClient) {
    AOS.init();
  }
  Vue.use(Buefy, {
    defaultIconPack: "far", // Font Awesome Regular
  });
}
