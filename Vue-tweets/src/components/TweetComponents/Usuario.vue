<template>
  <span class="user">
    <span class="name">{{ usuarioNombrePropNieto }}</span>
    <span class="handle">{{ usuarioHandlePropNieto }}</span>
  </span>
</template>

<script setup>
// Metodo de props en VUE se llama defineProps()
// NO se importa
// Es autoImportado
defineProps({
  usuarioNombrePropNieto: {
    // llave que define el tipon de dato que va a recibir este prop
    type: String,
  },
  usuarioHandlePropNieto: {
    type: String,
  },
});
</script>
