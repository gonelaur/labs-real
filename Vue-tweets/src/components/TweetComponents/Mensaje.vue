<template>
  <p class="message">
    {{ mensajePropNieto }}
  </p>
</template>

<script setup>
// Metodo de props en VUE se llama defineProps()
// NO se importa
// Es autoImportado
defineProps({
  mensajePropNieto: {
    // llave que define el tipon de dato que va a recibir este prop
    type: String,
    // una llave que usaremos de defacto/default/por-defecto
    default:
      "Un mensaje super cool por-defecto si el prop no recibe ninguna informacion",
  },
});
</script>
