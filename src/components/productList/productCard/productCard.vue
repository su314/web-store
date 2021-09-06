<script lang="ts" src="./productCard.ts"></script>
<style lang="scss" scoped src="./productCard.scss"></style>
<template>
  <div class="card">
    <img :src="product.image" alt="" class="card-img-top" />
    <div class="card-body">
      <p class="card-title">{{ product.title }}</p>
      <p class="card-text">sdfasdf</p>
    </div>
  </div>
</template>
