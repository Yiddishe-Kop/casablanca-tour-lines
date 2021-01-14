<template>
  <ul class="relative">
    <li v-for="(img, i) in images" :key="img" class="absolute w-full h-full">
      <transition name="fadeIn">
        <img v-if="current == i" :src="img" class="absolute object-cover w-full h-full" />
      </transition>
    </li>
  </ul>
</template>

<script>
export default {
  name: "ImageSlider",
  props: {
    images: Array,
    interval: {
      type: Number,
      default: 3500,
    },
  },
  data() {
    return {
      current: 0,
      intervalId: undefined,
    };
  },
  mounted() {
    this.intervalId = setInterval(() => {
      if (this.current == this.images.length - 1) {
        this.current = 0;
        return;
      }
      this.current++;
    }, this.interval);
  },
};
</script>

<style>
.fadeIn-enter-active {
  transition: all 1s ease-in;
}
.fadeIn-leave-active {
  transition: none;
}
.fadeIn-enter,
.fadeIn-leave-to {
  opacity: 0;
}
</style>
