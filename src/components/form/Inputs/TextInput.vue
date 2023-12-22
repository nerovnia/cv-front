<template>
  <Input inpType="text" :inpId="inpId" :inpPlaceholder="inpPlaceholder"/>
</template>

<script>
import Input from "./Input.vue";

export default {
  components: {
    Input
  },
  props: {
    inpId: {
      type: String,
      required: true,
    },
    inpPlaceholder: {
      type: String,
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
</style>