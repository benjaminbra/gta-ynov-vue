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
                <b-form-input id="firstname" v-model.trim="localSalarie.firstname" v-on:change="updateUser" :disabled="lockFixData"></b-form-input>
            </b-form-group>
            <b-form-group
                    id="lastname"
                    label="Nom"
                    label-for="lastname">
                <b-form-input id="lastname" v-model.trim="localSalarie.lastname" v-on:change="updateUser" :disabled="lockFixData"></b-form-input>
            </b-form-group>
            <b-form-group
                    id="birth_date"
                    label="Date de Naissance"
                    label-for="birth_date">
                <b-form-input id="birth_date" type="date" v-model="localSalarie.birthDate" v-on:change="updateUser"></b-form-input>
            </b-form-group>
            <b-form-group
                    id="address"
                    label="Adresse"
                    label-for="address">
                <b-form-input id="address" v-model="localSalarie.address" v-on:change="updateUser"></b-form-input>
            </b-form-group>
            <b-form-group
                    id="email"
                    label="Email"
                    label-for="email">
                <b-form-input id="email" type="email" v-model.trim="localSalarie.email" v-on:change="updateUser" disabled></b-form-input>
            </b-form-group>
            <b-form-group
                    id="tel"
                    label="Téléphone"
                    label-for="tel">
                <b-form-input id="tel" type="tel" maxlength="15" v-model.trim="localSalarie.tel" v-on:change="updateUser"></b-form-input>
            </b-form-group>
        </b-form>
    </div>
</template>

<script>
import DataService from '../services/DataService'

let dataService = new DataService()

export default {
  name: 'FicheSalarieForm',
  props: {
    salarie: Object,
    lockFixData: Boolean
  },
  data: function () {
    return {
      localSalarie: this.salarie,
      onUpdated: true,
      onUpdating: false
    }
  },
  created: function () {
    this.localSalarie.birthDate = (new Date(this.localSalarie.birthDate)).toISOString().substring(0, 10)
  },
  methods: {
    updateUser: function () {
      this.onUpdated = false
      this.onUpdating = true
      /**
      this.localSalarie.birthDate = (new Date(this.localSalarie.birthDate)).toISOString()
      var updatingUser = dataService.updateSalarieById(this.localSalarie)
      updatingUser.then(this.endUpdate)
      this.localSalarie.birthDate = (new Date(this.localSalarie.birthDate)).toISOString().substring(0, 10)**/
    },
    endUpdate: function (resp) {
      this.onUpdated = true
      this.onUpdating = false
    }
  }
}
</script>

<style scoped>

</style>
