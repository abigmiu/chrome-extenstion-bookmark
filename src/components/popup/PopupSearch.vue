<script lang="ts" setup>
const searchKeyWord = ref('')
</script>

<template>
  <div class="b-2 p-1.5 border-rd-full flex justify-center items-center">
    <MingcuteSearch3Line />
    <div class="flex-1 ml-2">
      <input v-model="searchKeyWord" class="w-full h-full outline-none">
    </div>
  </div>
</template>
