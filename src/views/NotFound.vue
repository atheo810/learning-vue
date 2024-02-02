<template>
  <h1>Opps!</h1>
  <p>The {{ resource }} you're looking for is not here</p>
  <router-link :to="{ name: 'event-list' }">Back To HomePage</router-link>
</template>
<script>
export default {
  props: {
    resource: {
      required: true,
      type: String,
      default: 'page',
    },
  },
}
</script>
