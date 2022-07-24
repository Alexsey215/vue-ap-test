<template>
  <div>
    <UserCardsList />
  </div>
</template>

<script> 
// @ is an alias to /src
import UserCardsList from '@/components/UserCardsList.vue'

export default {
  name: 'UsersView',
  components: {
    UserCardsList
  }
}
</script>
