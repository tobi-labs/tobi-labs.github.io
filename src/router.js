import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home.vue";
import PrivatePolicy from "@/pages/PrivatePolicy.vue";
import Terms from "@/pages/Terms.vue";

const router = createRouter({
  history: createWebHistory('/'),
  routes: [
    { path: "/", component: Home },
    { path: "/private-policy", component: PrivatePolicy },
    { path: "/terms-of-service", component: Terms },
    {
      path: "/promo/tcat",
      redirect: () => {
        window.location.href = "https://t.me/TobiCopilotBot/wallet?startapp=TCAT";
        return {path: '/'};
      },
    },
  ],
});

export default router;