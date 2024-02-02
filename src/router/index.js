import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '../views/EventListView.vue'
import EventDetails from '../views/event/Details.vue'
import EventLayout from '../views/event/Layout.vue'
import EventRegister from '../views/event/Register.vue'
import EventEdit from '../views/event/Edit.vue'
import AboutView from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // index
    {
      path: '/',
      name: 'event-list',
      component: EventListView,
      // making props route and send it to component (params query)
      props: (route) => ({ page: parseInt(route.query.page) || 1 }),
    },
    // Event List
    {
      path: '/event/:id',
      name: 'event-Layouts',
      props: true,
      component: EventLayout,
      children: [
        {
          path: '',
          name: 'event-Details',
          component: EventDetails,
        },
        // Register
        {
          path: 'register',
          name: 'event-Register',
          component: EventRegister,
        },
        {
          path: 'edit',
          name: 'event-Edit',
          component: EventEdit,
        },
      ],
    },

    {
      path: '/about',
      name: 'About',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: AboutView,
    },
  ],
})

export default router
