<template>
  <div>
    <label class="container" :for="id">
      <input class="checkbox" type="checkbox" :id="id" name="linkedin" checked />
      <span class="checkmark"></span>
      {{ item.text }}
    </label>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    }
  },
  data() {
    return {
      id: `chbox-${this.item.id}`,
    };
  },
  methods: {
  }
}
</script>

<style scoped>
.container {
  display: block;
  position: relative;
  padding-left: 28px;
  margin-bottom: 12px;
  margin-right: 20px;
  cursor: pointer;
  font-size: 14px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: #dafdd8;
  border: 1px solid rgb(178, 230, 185);
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
  background-color: #98d690;
}

/* When the checkbox is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: #bcfdc7;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.container .checkmark:after {
  left: 7px;
  top: 4px;
  width: 5px;
  height: 10px;
  border: 1px solid rgba(8, 112, 2, 0.918);
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

</style>