<script setup lang="ts">
import { saveRecord } from '~/common/db'

const formData = reactive<IRecord>({
  title: '',
  url: '',
  favIconUrl: '',
  remark: '',
})

// 获取网页的标题和 url
async function getCurrentTabInfo() {
  const tabs = await chrome.tabs.query({ active: true })
  const { title, url, favIconUrl } = tabs[0]
  formData.title = title
  formData.url = url
  formData.favIconUrl = favIconUrl
}
onMounted(() => {
  getCurrentTabInfo()
})

// 保存数据到数据库
async function onSave() {
  await saveRecord(toRaw(formData))
  window.close()
}
</script>

<template>
  <main class="w-[350px] px-4 py-5 text-center text-gray-700">
    <div class="flex justify-between items-center mb-4">
      <h1 class="text-size-lg font-500">
        添加书签
      </h1>
      <button class="text-size-xs px-3 py-1 border-rd-[3px] bg-[#007be9] text-white" @click="onSave">
        添加
      </button>
    </div>

    <div>
      <div class="add-form-item">
        <h2 class="label">
          名称
        </h2>
        <PopupInput v-model="formData.title" />
      </div>
      <div class="add-form-item">
        <h2 class="label">
          链接
        </h2>
        <PopupInput v-model="formData.url" />
      </div>
      <div class="add-form-item">
        <h2 class="label">
          备注
        </h2>
        <PopupInput v-model="formData.remark" />
      </div>
    </div>
  </main>
</template>

<style lang="css">
.label {
  text-align: left;
  font-size: 12px;
  margin-bottom: 6px;
}

.add-form-item {
  margin-bottom: 12px;
}
</style>
