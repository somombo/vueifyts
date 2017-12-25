<template>
  <div>
    <!-- <h1>{{ msg }}</h1> -->

    <example :name="msg" :initialEnthusiasm="5" ></example>
  </div>
</template>

<style scoped>
h1 {
  font-weight: normal;
}
</style>

<script lang="ts">

import { Vue, Component } from "vue-property-decorator";
import Example from "../components/Example.vue"
@Component({
  name: 'bar',
  components: { Example }
})
export default class extends Vue {
  msg = 'Bar'
}


</script>
