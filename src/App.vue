<template>
  <div>
    <h1>App Page</h1>

    <router-view v-slot="{ Component }">
      <Suspense>
        <!-- Hiển thị các component sử dụng cơ chế lazy -->
        <template #default>
          <div>
            <component :is="Component" />
          </div>
        </template>

        <!-- Sử dụng hiệu ứng loading khi tải trang -->
        <template #fallback>
          <div>Loading...</div>
        </template>
      </Suspense>
    </router-view>
  </div>
</template>

<script setup></script>

<style></style>
