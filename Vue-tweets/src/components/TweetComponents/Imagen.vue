<template>
  <img v-bind:src="imagenSrcNieto" class="profile" :alt="imagenAltNieto" />
</template>

<script setup>
defineProps({
  imagenSrcNieto: {
    type: String,
    default:
      "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcTo7Ip1_kUvkTHPE7QSLlCr_-hYsl8ts_HQ997mQ14iiD3mbds6IZCz_kC_f2VAxM4bsgvbaegk70M3hXQ",
  },
  imagenAltNieto: {
    type: String,
    default: "A cool image about a dog who uses twitter",
  },
});
</script>
