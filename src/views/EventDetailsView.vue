<script setup>
import { ref, onMounted } from 'vue'
import EventService from '@/services/EventService.js'

// received props
const props = defineProps({
  id: {
    required: true,
  },
})
// usinf reactive state
const event = ref(null)

// if component get mount will do the calling for axios service
onMounted(() => {
  EventService.getEvent(props.id)
    .then((response) => {
      event.value = response.data
    })
    .catch((error) => {
      console.log(error)
    })
})
</script>

<template>
  <div v-if="event">
    <!-- if event no null do the template below -->
    <h1>{{ event.title }}</h1>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
  </div>
</template>
