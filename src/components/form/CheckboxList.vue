<template>
  <div :class="display">
    <Checkbox v-for="item in itemList" :key="item.id" :item="item" value=""/>
  </div>
</template>

<script>
import Checkbox from "./Checkbox.vue";

export default {
  components: {
    Checkbox
  },
  props: {
    display: {
      type: String,
      required: true,
    },
    itemList: {
      type: Array,
      required: true,
    }
  },
  data() {
    return {
    };
  },
  methods: {
  }
}
</script>

<style scoped>
.ch-box_column {
  display: flex;
  flex-direction: column;
}
.ch-box_row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>