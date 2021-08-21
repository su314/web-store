<script lang="ts" src="./commonLayout.ts"></script>
<template>
  <div>
    <common-header />
    <main>
      <slot name="mainbody"></slot>
    </main>
    <common-footer />
  </div>
</template>
