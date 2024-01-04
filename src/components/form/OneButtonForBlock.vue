<template>
  <div>
    <component:is="blockComponent" />
  </div>
  <div>
    <Button :btnProps="buttons.add" @click="addResource" />
  </div>
</template>

<script>
export default {
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