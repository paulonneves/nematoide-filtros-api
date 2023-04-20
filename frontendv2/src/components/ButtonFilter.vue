<template>
  <div class="button">
    <v-btn x-large>
      <div class="d-flex align-center flex-column justify-center">
        <v-icon>mdi-{{icon}}</v-icon>

        {{name}}
      </div>
    </v-btn>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    icon: String,
    name: String
  }
})
</script>
