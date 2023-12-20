<template>
  <h1>Technologies</h1>
  <checkbox-list 
      :itemList="technologiesList" :display="view"
    />
</template>

<script>
import CheckboxList from "../../../components/form/CheckboxList.vue";
export default {
  components: {
    CheckboxList
  },
  data() {
    return {
      view: "ch-box_row", // row || column
      technologiesList: [
      { id: 1, text: 'Node.js'},
      { id: 2, text: 'Vue'},
      { id: 3, text: 'React'},
      { id: 4, text: 'Next.js'},
      { id: 5, text: 'Nest.js'},
      { id: 6, text: 'CSS'},
      { id: 7, text: 'HTML'},
      { id: 8, text: 'SCSS'},
      { id: 9, text: 'MongoDB'},
      { id: 10, text: 'MySql'},
      { id: 11, text: 'Postgree'},
      ]
    }
  },
  methods: {
  }
}
</script>

<style scoped>
</style>