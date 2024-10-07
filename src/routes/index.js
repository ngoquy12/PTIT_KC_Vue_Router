import AboutPage from "@/views/AboutPage.vue";
import ContactPage from "@/views/ContactPage.vue";
import Feedback from "@/views/Feedback.vue";
import HomePage from "@/views/HomePage.vue";
import ProfilePage from "@/views/ProfilePage.vue";
import UserPage from "@/views/UserPage.vue";
import { createRouter, createWebHistory } from "vue-router";

// B1: Định nghĩa danh sách các route
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      alias: ["/home", "/home-page", "/trang-chu"],
      component: import(/* webpackChunkName: "home" */ "@/views/HomePage.vue"),
      name: "home",
    },
    {
      path: "/about",
      component: import(
        /* webpackChunkName: "about" */ "@/views/AboutPage.vue"
      ),
      name: "about",
    },
    {
      path: "/contact",
      component: import(
        /* webpackChunkName: "contact" */ "@/views/ContactPage.vue"
      ),
      name: "contact",
      redirect: "/feedback",
    },
    {
      path: "/feedback",
      component: import(
        /* webpackChunkName: "feedback" */ "@/views/Feedback.vue"
      ),
      name: "feedback",
    },
    {
      path: "/user/:id",
      component: import(
        /* webpackChunkName: "userPage" */ "@/views/UserPage.vue"
      ),
      name: "userPage",
      redirect: (to) => `/profile/${to.params.id}`,
    },
    {
      path: "/profile/:id",
      component: import(
        /* webpackChunkName: "profile" */ "@/views/ProfilePage.vue"
      ),
      name: "profilePage",
    },
    {
      path: "/list-product",
      component: import(
        /* webpackChunkName: "listProduct" */ "@/views/ListProduct.vue"
      ),
      name: "listProduct",
    },
    {
      path: "/:pathMatch(.*)*",
      component: import(
        /* webpackChunkName: "notFound" */ "@/views/NotFound.vue"
      ),
      name: "notFound",
    },
    {
      path: "/admin",
      component: import(
        /* webpackChunkName: "admin" */ "@/views/AdminIndex.vue"
      ),
      name: "admin",
      beforeEnter: (to, from, next) => {
        const isAuthentication = true;

        if (isAuthentication) {
          // Cho phép chuyển vào trang admin
          next();
        } else {
          next("/");
        }
      },
      children: [
        {
          path: "manager-user",
          component: import(
            /* webpackChunkName: "managerUser" */ "@/views/ManagerUser.vue"
          ),
          name: "managerUser",
        },
        {
          path: "manager-product",
          component: import(
            /* webpackChunkName: "managerProduct" */ "@/views/ManagerProduct.vue"
          ),
          name: "managerProduct",
        },
      ],
    },
  ],
});

export default router;
