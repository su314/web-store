<script lang="ts" src="./commonLayout.ts"></script>
<style lang="scss" scoped src="./commonLayout.scss"></style>
<template>
  <div>
    <common-header />
    <main>
      <slot name="mainarea"></slot>
    </main>
    <common-footer />
  </div>
</template>
