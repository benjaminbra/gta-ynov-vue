<template>
    <div id="LoginForm" class="container">
        <b-form>
            <b-form-group
                    id="login"
                    label="Email"
                    label-for="login">
                <b-form-input id="login" type="email" v-model.trim="login"></b-form-input>
            </b-form-group>
            <b-form-group
                    id="password"
                    label="Mot de passe"
                    label-for="password">
                <b-form-input id="password" type="password" v-model.trim="password"></b-form-input>
            </b-form-group>
            <b-form-group>
                <b-button :disabled="login == null || password == null" v-on:click="logging">Connexion</b-button>
            </b-form-group>
            <b-alert  :show="error != null" variant="danger" dismissible fade @dismissed="error = null">
                {{ this.error }}
            </b-alert>
        </b-form>
    </div>
</template>

<script>
import DataService from '../services/DataService'

let dataService = new DataService()
export default {
  name: 'LoginForm',
  props: {
    user: Object
  },
  data: function () {
    return {
      login: null,
      password: null,
      error: null,
      local_user: this.user
    }
  },
  methods: {
    logging: function () {
      this.error = null
      if (dataService.checkPasswordSalarie(this.login, this.password)) {
        let loggedUser = dataService.getUserByEmail(this.login)
        console.log(loggedUser)
        if (loggedUser != null && loggedUser !== undefined) {
          this.local_user = loggedUser.firstname
          this.$emit('logged', this.local_user)
        } else {
          this.error = 'Identifiants invalides'
        }
      } else {
        this.error = 'Identifiants invalides'
      }
    }
  }
}
</script>

<style scoped>

</style>
