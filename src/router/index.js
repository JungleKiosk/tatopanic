import { createRouter, createWebHistory } from "vue-router";

import home from "../views/Home.vue";
import about from "../views/About.vue";
import skill from "../views/Skill.vue";
import gallery from "../views/Gallery.vue";


/* ------------------------------------------------- */

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: home,
    },
    {
      path: "/about",
      name: "about",
      component: about,
    },
    {
      path: "/skill",
      name: "skill",
      component: skill,
    },
    {
      path: "/gallery",
      name: "gallery",
      component: gallery,
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

export default router;
