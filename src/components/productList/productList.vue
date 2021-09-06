<script lang="ts" src="./productList.ts"></script>
<style lang="scss" scoped src="./productList.scss"></style>
<template>
  <div class="container">
    <div class="row">
      <div class="col-3">Filter</div>
      <div class="col-6 product-container">
        <div class="row">
          <template v-for="(product, index) in products">
            <div class="col-4" :key="index">
              <productCard :product="product"></productCard>
            </div>
          </template>
        </div>
      </div>
      <div class="col-3">adds</div>
    </div>
  </div>
</template>
