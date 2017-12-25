<template>
    <div>
        <h3 class="greeting">{{name}}{{exclamationMarks}}</h3>
        <button @click="decrement">-</button>
        <button @click="increment">+</button>
    </div>
</template>

<style scoped>
.greeting {
    font-size: 20px;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({ name: 'example' })
export default class extends Vue {
  @Prop() name: string;
  @Prop() initialEnthusiasm: number;
  enthusiasm = this.initialEnthusiasm;
  increment() {
    this.enthusiasm++;
  }
  decrement() {
    if (this.enthusiasm > 1) {
      this.enthusiasm--;
    }
  }
  get exclamationMarks(): string {
    return Array(this.enthusiasm + 1).join('!');
  }

  mounted() {
    console.log('Component mounted.')
  }
}

</script>
