<template>
  <section>
    <base-card>
      <header>
        <h2>Requests Received</h2>
      </header>
      <ul v-if="hasRequests">
        <request-item
            v-for="req in receivedRequests"
            :key="req.id"
            :email="req.userEmail"
            :message="req.message">
        </request-item>
      </ul>
      <h3 v-else>You haven't received any requests yet!</h3>
    </base-card>
  </section>
</template>

<script>
import RequestItem from "@/components/requests/RequestItem.vue";

export default {
  components: {
    RequestItem
  },
  computed: {
    receivedRequests() {
      // return this.$store.getters['requests/requests'];
      const allRequests = this.$store.getters['requests/requests'];
      return allRequests.filter(request => request.coachId === this.$store.getters.userId);
    },
    hasRequests() {
      return this.$store.getters['requests/hasRequests'];
    }
  },
  methods: {
    print() {
      console.log(this.$store.getters['requests/requests']);
    }
  }
}
</script>

<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>