<script lang="ts" src="./navigation.ts"></script>
<style lang="scss" scoped src="./navigation.scss"></style>
<template>
  <div class="container">
    <nav class="navbar navbar-dark bg-black">
      <ul class="nav mr-auto nav-pills">
        <li class="nav-item active">
          <router-link :to="{ name: 'Home' }" class="nav-link">
            Home
          </router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'products' }" class="nav-link">
            Products
          </router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'Cart' }" class="nav-link">
            Cart
          </router-link>
        </li>
        <li class="nav-item active">
          <router-link :to="{ name: 'Orders' }" class="nav-link">
            Order</router-link
          >
        </li>
        <li class="nav-item active">
          <router-link :to="{ name: 'Profile' }" class="nav-link">
            Profile
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>
