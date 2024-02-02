<script>
import EventService from '@/services/EventService.js'

export default {
  props: ['id'],
  // if component get mount will do the calling for axios service
  data() {
    return {
      event: null,
    }
  },
  created() {
    EventService.getEvent(this.id)
      .then((response) => {
        this.event = response.data
      })
      .catch((error) => {
        if (error.response && error.response.status == 404) {
          this.$router.push({
            name: '404Resource',
            params: { resource: 'event' },
          })
        } else {
          this.$router.push({ name: 'NetworkError' })
        }
      })
  },
}
</script>

<template>
  <div v-if="event">
    <!-- if event no null do the template below -->
    <h1>{{ event.title }}</h1>
    <div id="nav">
      <router-link :to="{ name: 'event-Details' }">Details</router-link>
      |
      <router-link :to="{ name: 'event-Register' }">Register</router-link>
      |
      <router-link :to="{ name: 'event-Edit' }">Edit</router-link>
    </div>
    <router-view :event="event" />
  </div>
</template>

<style></style>
