<script>
import Checkbox from "../components/form/Checkbox.vue";
export default {
  components: {
    //Checkbox
  },
  data() {
    return {
    }
  }
}
</script>

<template>
  <form>
    <input type="text" id="fname" placeholder="First name">
    <input type="text" id="lname" placeholder="Last name">
    <input type="text" id="position"  placeholder="Position">
    <input type="text" id="address"  placeholder="Address">
    <input type="text" id="email"  placeholder="Email">
    <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" id="phone" placeholder="Phone">
    <div>
      <label for="scales">Social networks</label>
      <div>
        <label class="container" for="linkedin">
          <input class="checkbox" type="checkbox" id="linkedin" name="linkedin" checked />
          <span class="checkmark"></span>
          Linkedin
        </label>
      </div>
      <Checkbox />
      <div>
        <input class="checkbox" type="checkbox" id="facebook" name="facebook" checked />
        <label for="facebook">Facebook</label>
      </div>
      <div>
        <input class="checkbox" type="checkbox" id="github" name="github" checked />
        <label for="github">Github</label>
      </div>
    </div>
    <div class="btn_block">
      <input class="submit" type="button" value="Preview">
      <input class="submit" type="submit" value="Save">
    </div>
  </form>
</template>

<style>
form {
  display: flex;
  flex-direction: column;
}

form input {
  padding: 5px;
  margin: 10px;
}
form input.checkbox {
  color: white;
  background-color: #bcfdc7;
}
form input.submit {
  color: rgb(4, 116, 0);
  background-color: #bcfdc7;
  border: 1px solid rgb(4, 116, 0);
  padding: 5px;
}

.btn_block {
  display: flex;
  flex-shrink: 1;
}

</style>