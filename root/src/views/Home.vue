<template>
  <div>
    <h1>This is the root App!</h1>
    <v-btn>
      coba
    </v-btn>
    <div class="todo-container">
      <TodoList></TodoList>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.todo-container {
  margin-top: 50px;
  display: flex;
  justify-content: center;
}
</style>
