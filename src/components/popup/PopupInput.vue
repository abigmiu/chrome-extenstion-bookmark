<script lang="ts" setup>
const inputValue = defineModel()
</script>

<template>
  <div class="border-rd-[3px] b-[#7c7c7c] p-2 b-1.5px">
    <input v-model="inputValue" class="h-[20] w-full outline-none">
  </div>
</template>
