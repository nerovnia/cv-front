<script>
import TextInput from "../components/form/Inputs/TextInput.vue";
import PhoneInput from "../components/form/Inputs/PhoneInput.vue";
import EmailInput from "../components/form/Inputs/EmailInput.vue";
import CheckboxList from "../components/form/CheckboxList.vue";

export default {
  components: {
    TextInput,
    PhoneInput,
    EmailInput,
    CheckboxList
  },
  data() {
    return {
      fname: {
        id: "fname",
        placeholder: "First name",
      },
      lname: {
        id: "lname",
        placeholder: "Last name",
      },
      position: {
        id: "position",
        placeholder: "Position",
      },
      address: {
        id: "address",
        placeholder: "Address",
      },
      email: {
        id: "email",
        placeholder: "Email",
      }, 
      phone : {
        id: "phone",
        placeholder: "Phone",
        pattern: "[0-9]{3}-[0-9]{3}-[0-9]{4}",
      },
      socnetworks: {
        view: "ch-box_row", // row || column
        list: [
          { id: 1, text: 'Linkedin'},
          { id: 2, text: 'Facebook'},
          { id: 3, text: 'Github'},
        ]
      }
    }
  }
}
</script>

<template>
  <form>
    <TextInput :inpId="fname.id" :inpPlaceholder="fname.placeholder"/>
    <TextInput :inpId="lname.id" :inpPlaceholder="lname.placeholder"/>
    <TextInput :inpId="position.id" :inpPlaceholder="position.placeholder"/>
    <TextInput :inpId="address.id" :inpPlaceholder="address.placeholder"/>
    <EmailInput :inpId="email.id" :inpPlaceholder="email.placeholder"/>
    <PhoneInput :inpId="phone.id" :inpPlaceholder="phone.placeholder" :inpPattern="phone.pattern"/>
    <div>
      <label for="scales">Social networks</label>
      <checkbox-list 
        :itemList="socnetworks.list" :display="socnetworks.view"
      />
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