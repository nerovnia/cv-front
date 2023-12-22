<template>
  <Input inpType="tel" :inpId="inpId" :inpPlaceholder="inpPlaceholder" :pattern="inpPattern"/>
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
    inpPattern : {
      type: String,
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
</style>