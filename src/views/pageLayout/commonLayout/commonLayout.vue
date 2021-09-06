<script lang="ts" src="./commonLayout.ts"></script>
<style lang="scss" scoped src="./commonLayout.scss"></style>
<template>
  <div class="container">
    <common-header />
    <main class="row">
      <slot name="mainarea"></slot>
    </main>
    <common-footer />
  </div>
</template>
