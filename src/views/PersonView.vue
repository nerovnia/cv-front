<script>
import TextInput from "../components/form/Inputs/TextInput.vue";
import PhoneInput from "../components/form/Inputs/PhoneInput.vue";
import EmailInput from "../components/form/Inputs/EmailInput.vue";
import CheckboxList from "../components/form/CheckboxList.vue";
import SocialNetworksBlock from "@/components/form/SocialNetworksBlock.vue";
import TechnologiesView from "@/views/forms/dict/Technologies.vue";
import Button from "@/components/Button.vue";

export default {
  components: {
    TextInput,
    PhoneInput,
    EmailInput,
    CheckboxList,
    SocialNetworksBlock,
    TechnologiesView,
    Button,
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
      },
      buttons: {
        preview: {
          class: "submit",
          type: "button",
          value: "Preview",
        },
        save: {
          class: "submit",
          type: "submit",
          value: "Save",
        },
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
    <SocialNetworksBlock />


    <div>
      <label for="scales">Social networks</label>
      <checkbox-list 
        :itemList="socnetworks.list" :display="socnetworks.view"
      />
    </div>
    <TechnologiesView />


    <div class="btn_block">
      <Button :btnProps="buttons.preview" />
      <Button :btnProps="buttons.save" />
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

.btn_block {
  display: flex;
  flex-shrink: 1;
}

</style>