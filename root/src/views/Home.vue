<template>
  <div>
    <h1>This is the root App!</h1>
    <v-btn>
      coba
    </v-btn>
    <v-card
    class="mx-auto"
    prepend-icon="$vuetify"
    subtitle="The #1 Vue UI Library"
    width="400"
  >
    <template v-slot:title>
      <span class="font-weight-black">Welcome to Vuetify</span>
    </template>

    <v-card-text class="bg-surface-light pt-4">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem!
    </v-card-text>
  </v-card>
  <div>
    <h1>Host App</h1>
    <div>Count: {{ store.count }}</div>
    <div>Message: {{ store.message }}</div>
    <v-btn @click="store.increment">Increment</v-btn>
    <v-btn @click="store.decrement">Decrement</v-btn>
  </div>
  </div>
</template>

<script setup lang="ts">
import { useMainStore} from '../stores/store';

const store = useMainStore();

</script>

<style scoped>
.todo-container {
  margin-top: 50px;
  display: flex;
  justify-content: center;
}
</style>
