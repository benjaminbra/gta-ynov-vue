<template>
    <div id="FicheSalarieForm">
        <div>
           <i class="fa" v-bind:class="{'fa-check': onUpdated, 'fas fa-spinner  fa-pulse': onUpdating}"></i> A jour
        </div>
        <hr/>
        <b-form>
            <b-form-group
                    id="firstname"
                    label="Prénom"
                    label-for="firstname">
                <b-form-input id="firstname" v-model.trim="local_salarie.firstname" v-on:change="updateUser" :disabled="lockFixData"></b-form-input>
            </b-form-group>
            <b-form-group
                    id="lastname"
                    label="Nom"
                    label-for="lastname">
                <b-form-input id="lastname" v-model.trim="local_salarie.lastname" v-on:change="updateUser" :disabled="lockFixData"></b-form-input>
            </b-form-group>
            <b-form-group
                    id="birth_date"
                    label="Date de Naissance"
                    label-for="birth_date">
                <b-form-input id="birth_date" type="date" v-model="local_salarie.birth_date" v-on:change="updateUser"></b-form-input>
            </b-form-group>
            <b-form-group
                    id="address"
                    label="Adresse"
                    label-for="address">
                <b-form-input id="address" v-model="local_salarie.address" v-on:change="updateUser"></b-form-input>
            </b-form-group>
            <b-form-group
                    id="email"
                    label="Email"
                    label-for="email">
                <b-form-input id="email" type="email" v-model.trim="local_salarie.email" v-on:change="updateUser"></b-form-input>
            </b-form-group>
            <b-form-group
                    id="phone"
                    label="Téléphone"
                    label-for="phone">
                <b-form-input id="phone" type="tel" maxlength="15" v-model.trim="local_salarie.phone" v-on:change="updateUser"></b-form-input>
            </b-form-group>
        </b-form>
    </div>
</template>

<script>
export default {
  name: 'FicheSalarieForm',
  props: {
    salarie: Object,
    lockFixData: Boolean
  },
  data: function () {
    return {
      local_salarie: this.salarie,
      onUpdated: true,
      onUpdating: false
    }
  },
  methods: {
    updateUser: function () {
      this.onUpdated = false
      this.onUpdating = true
      let self = this
      // dataService.updateUserById(null, this.local_salarie, this.endUpdate())
      setTimeout(function () {
        self.endUpdate()
      }, 1000)
    },
    endUpdate: function () {
      this.onUpdated = true
      this.onUpdating = false
    }
  }
}
</script>

<style scoped>

</style>
