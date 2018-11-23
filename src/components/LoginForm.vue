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
      password: null
    }
  },
  methods: {
    logging: function () {
      var loginUser = dataService.loginUser(this.login, this.password)
      loginUser.then(this.onLoginSuccess,
        this.onReject)
    },
    onLoginSuccess: function (userLogged) {
      var getSalarie = dataService.getSalarieById(userLogged.userId)
      getSalarie.then(this.onGetSalarieSuccess,
        this.onReject)
    },
    onGetSalarieSuccess: function (userSalarie) {
      if (userSalarie.length > 0) {
        this.$emit('logged', userSalarie[0])
      } else {
        this.onReject()
      }
    },
    onReject: function () {
      this.$emit('error-login', 'Identifiants invalides')
    }
  }
}
</script>

<style scoped>

</style>
