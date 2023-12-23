<template>
  <div class="flex flex-column">
    <div class="wrapper" v-for="item in inpUrls">
      <div><img src="" alt="Social networks logo"></div>
      <div><UrlInput :inpId="item.id" :inpPlaceholder="item.placeholder"/></div>
      <div><Button :btnProps="buttons.delete" @click="delInpUrl" /></div>
      
    </div>
    <div>
      <Button :btnProps="buttons.add" @click="addInpUrl" />
    </div>
  </div>
</template>

<script>
import VueGridLayout from 'vue-grid-layout';
import Button from "../Button.vue";
import UrlInput from "../form/Inputs/UrlInput.vue";

export default {  
  components: {
    GridLayout: VueGridLayout.GridLayout,
    GridItem: VueGridLayout.GridItem,
    UrlInput,
    Button,
  },
  data() {
    return {
      inpUrls: [],
      buttons: {
      add: {
        class: "submit",
        type: "button",
        value: "Add link to social network",
      },
      delete: {
        class: "submit",
        type: "button",
        value: "Delete",
      },
    },
    };
  },
  methods: {
    addInpUrl() {
      this.inpUrls.push({id: "",url: "", placeholder: "https://"});
    } 
  }
}
</script>

<style scoped>
.flex {
  width: 100%;
  display: flex;
} 
.flex-row {
  flex-direction: row;
}
.flex-column {
  flex-direction: column;
}


.wrapper {
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  gap: 10px;
  /*grid-auto-rows: minmax(100px, auto);*/
}
.one {
  grid-column: 1 / 3;
  grid-row: 1;
}
.two {
  grid-column: 2 / 3;
  grid-row: 1;
}
.three {
  grid-column: 3/3;
  grid-row: 1;
  justify-self: end;
}

</style>