<template>
  <div>
    <h1>This is the remote App!</h1>
    <div class="flex-align mt">
      <div>
        <h1>Halo Remote 2</h1>
      </div>
      <v-card>
        <v-btn class="text-2xl">
          button
        </v-btn>
      </v-card>
      <v-card width="300px">
      <v-card-title class="text-h6 text-md-h5 text-lg-h4">Title</v-card-title>
      <v-card-text>
        Body text
      </v-card-text>
    </v-card>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style>
.label-remote {
  background-color: rgb(170, 247, 187);
  padding: 12px 18px;
  border: 3px dashed rgb(123, 185, 123);
}

.flex-align {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
