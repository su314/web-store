<script lang="ts" src="./home.ts"></script>
<template>
  <common-layout>
    <template slot="mainarea">
      <div class="col-2">2</div>
      <div class="col-6">
        <b-carousel
          id="carousel-fade"
          style="text-shadow: 0px 0px 2px #000"
          fade
          indicators
          img-width="1024"
          img-height="480"
        >
          <b-carousel-slide
            caption="First slide"
            img-src="https://su314.github.io/mock-assests/web-store/random/harrison-broadbent-hSHNPyND_dU-unsplash.jpg"
          ></b-carousel-slide>
          <b-carousel-slide
            caption="Second Slide"
            img-src="https://su314.github.io/mock-assests/web-store/random/harrison-broadbent-hxeaAocsOe4-unsplash.jpg"
          ></b-carousel-slide>
          <b-carousel-slide
            caption="Third Slide"
            img-src="https://su314.github.io/mock-assests/web-store/random/harrison-broadbent-i5z1tvRMrnE-unsplash.jpg"
          ></b-carousel-slide>
        </b-carousel>
      </div>
      <div class="col-2">2</div>
    </template>
  </common-layout>
</template>
