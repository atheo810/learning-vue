<script>
// import service from service (axios)
import EventService from '@/services/EventService.js'
// import eventCard Component
import EventCard from '@/components/EventCard.vue'
// add watchEffect similiar with useEffect
import { watchEffect } from 'vue'

export default {
  name: 'event-list',
  // add props when using this
  props: ['page'],
  // loaded component
  components: {
    EventCard,
  },

  data() {
    return {
      events: null,
      totalEvents: 0,
    }
  },
  // do thing on created
  created() {
    // watch effect will run all component depending on change in this function watch
    watchEffect(() => {
      this.events = null
      EventService.getEvents(2, this.page)
        .then((response) => {
          this.events = response.data
          this.totalEvents = response.headers['x-total-count']
        })
        .catch((error) => {
          console.log(error)
        })
    })
  },
  computed: {
    hasNextPage() {
      var totalPages = Math.ceil(this.totalEvents / 2)
      return this.page < totalPages
    },
  },
}
</script>

<template>
  <div class="events">
    <!-- components using v-for for looping and use index in key watch event.id and props event looking from data(){eventss} -->
    <EventCard v-for="event in events" :key="event.id" :event="event" />

    <div class="pagination">
      <!-- router-link to eventlist and send query and doesn't show up if page != 1 -->
      <router-link
        id="prev-page"
        :to="{ name: 'event-list', query: { page: page - 1 } }"
        rel="prev"
        v-if="page != 1"
        >&#60; Prev Page</router-link
      >
      <!-- same as pre page but have increment in query page -->
      <router-link
        id="next-page"
        :to="{ name: 'event-list', query: { page: page + 1 } }"
        rel="next"
        v-if="hasNextPage"
        >Next Page &#62;</router-link
      >
    </div>
  </div>
</template>

<!-- scoped style for styling in this component -->
<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.pagination {
  display: flex;
  width: 209px;
}
.pagination a {
  flex: 1;
  text-decoration: none;
  color: #2c3e50;
}
#prev-page {
  text-align: left;
}
#next-page {
  text-align: right;
}
</style>
