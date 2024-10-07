<template>
  <div>
    <h1>Admin index Page</h1>

    <nav>
      <router-link exact-active-class="active" to="/admin"
        >Dashoard</router-link
      >
      <router-link active-class="active" to="/admin/manager-user"
        >Manager User</router-link
      >
      <router-link active-class="active" to="/admin/manager-product"
        >Manager Product</router-link
      >
    </nav>

    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style>
.active {
  background-color: red;
  color: #fff;
}
</style>
