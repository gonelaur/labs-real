<template>
  <div class="tweet">
    <Imagen
      v-bind:imagenSrcNieto="imagenSrcPadre"
      v-bind:imagenAltNieto="imagenAltPadre"
    />
    <div class="body">
      <div class="top">
        <Usuario
          v-bind:usuarioNombrePropNieto="usuarioNombrePadre"
          v-bind:usuarioHandlePropNieto="usuarioHandlePadre"
        />
        <Timestamp v-bind:timestampPropNieto="timestampPadre" />
      </div>

      <Mensaje v-bind:mensajePropNieto="mensajePropPadre" />

      <!-- Incorporar iconos como un componente -->
      <Iconos />
    </div>

    <i class="fas fa-ellipsis-h"></i>
  </div>
</template>

<script setup>
import Iconos from "./TweetComponents/Iconos.vue";
import Mensaje from "./TweetComponents/Mensaje.vue";
import Usuario from "./TweetComponents/Usuario.vue";
import Timestamp from "./TweetComponents/TimeStamp.vue";
import Imagen from "./TweetComponents/Imagen.vue";

defineProps({
  mensajePropPadre: {
    type: String,
  },
  timestampPadre: {
    type: String,
  },
  usuarioNombrePadre: {
    type: String,
  },
  usuarioHandlePadre: {
    type: String,
  },
  imagenSrcPadre: {
    type: String,
  },
  imagenAltPadre: {
    type: String,
  },
});
</script>
