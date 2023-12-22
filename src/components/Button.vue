<template>
  <input :class="btnProps.class" :type="btnProps.type" :value="btnProps.value">
</template>

<script>
export default {
  props: {
    btnProps: {
      type: Object,
      required: true,
    },
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
input.submit, input.button {
  color: rgb(4, 116, 0);
  background-color: #bcfdc7;
  border: 1px solid rgb(4, 116, 0);
  padding: 5px;
}
</style>