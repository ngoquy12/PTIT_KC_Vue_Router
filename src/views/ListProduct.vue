<template>
  <div>
    <h1>List Product</h1>

    <input type="text" v-model="keySearch" />
    <input type="number" v-model="priceValue" />

    <button @click="handleSearch">Search</button>

    <h1>ProductName: {{ result.productName }}</h1>
    <h1>Price: {{ result.price }}</h1>
  </div>
</template>

<script setup>
import { computed, reactive, ref } from "vue";
import { useRouter, useRoute } from "vue-router";

const router = useRouter(); // Chuyển trang
const route = useRoute(); // Lấy dữ liệu trên URL

// Lấy giá trị trên URL và cập nhật cho reactive queryParam
const result = computed(() => {
  return {
    productName: route.query.productName,
    price: route.query.price,
  };
});

const keySearch = ref("");
const priceValue = ref(0);

const handleSearch = () => {
  // router.push(`/list-product?search=${keySearch.value}`);

  router.push({
    path: "/list-product",
    query: { productName: keySearch.value, price: priceValue.value },
  });
};
</script>

<style></style>
