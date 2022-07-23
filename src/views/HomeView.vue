<template>
  <div class="home">
    <UserCards />
  </div>
</template>

<script>
// @ is an alias to /src
import UserCards from '@/components/UserCards.vue'

export default {
  name: 'HomeView',
  components: {
    UserCards
  }
}
</script>
