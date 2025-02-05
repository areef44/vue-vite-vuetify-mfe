<template>
  <div>
    <div class="content">
      <div class="routes">
        <RouterLink class="mr" :to="{name: 'Home'}">Root App</RouterLink>
        <RouterLink class="mr" :to="{name: 'Remote'}">Remote App</RouterLink>
        <RouterLink  :to="{name: 'RemoteTwo'}">Remote Two</RouterLink>
      </div>
      <RouterView/>
    </div>
  </div>
</template>
<script setup lang="ts">


</script>

<style>
.text-center {
  text-align: center;
}

.mb {
  margin-bottom: 12px;
}

.mt {
  margin-top: 50px;
}

.mr {
  margin-right: 40px;
}

.content {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.routes {
  margin-bottom: 3rem;
}

.root-label {
  color: rgb(163, 91, 91);
  font-weight: 600;
  border: 2px dashed rgb(163, 91, 91);
  padding: 8px 12px;
  width: fit-content;
}

.btn {
  background-color: rgb(226, 43, 113);
  color: white;
  border: none;
}

.btn:focus, .btn:active {
  border: none;
  outline: none;
}
</style>
