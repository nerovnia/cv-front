<template>
  <input :type="inpType" :id="inpId" :placeholder="inpPlaceholder">
</template>

<script>
export default {
  props: {
    inpType: {
      type: String,
      required: true,
    },
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