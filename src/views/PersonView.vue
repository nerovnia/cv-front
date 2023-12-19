<script setup>
</script>

<template>
  <form>
    <input type="text" id="fname" placeholder="First name">
    <input type="text" id="lname" placeholder="Last name">
    <input type="text" id="position"  placeholder="Position">
    <input type="text" id="address"  placeholder="Address">
    <input type="text" id="email"  placeholder="Email">
    <input type="text" id="phone" placeholder="Phone">
    <div>
      <label for="scales">Social networks</label>
      <div>
        <label class="container" for="linkedin">
          <input class="checkbox" type="checkbox" id="linkedin" name="linkedin" checked />
          <span class="checkmark"></span>
          Linkedin
        </label>
      </div>
      <div>
        <input class="checkbox" type="checkbox" id="facebook" name="facebook" checked />
        <label for="facebook">Facebook</label>
      </div>
      <div>
        <input class="checkbox" type="checkbox" id="github" name="github" checked />
        <label for="github">Github</label>
      </div>
    </div>
    <input class="submit" type="submit" value="Submit">
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



.container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
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
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid rgb(4, 116, 0);
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>