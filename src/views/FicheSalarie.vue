<template>
    <div id="FicheSalarie" class="container">
        <h2>Fiche salarié</h2>
        <FicheSalarieForm :salarie="form.salarie" :lockFixData="true"></FicheSalarieForm>
    </div>
</template>

<script>
import FicheSalarieForm from '../components/FicheSalarieForm'

export default {
  name: 'FicheSalarie',
  data: function () {
    return {
      form: {
        salarie: {
          firstname: this.$parent.user.firstname,
          lastname: this.$parent.user.lastname,
          birth_date: this.$parent.user.birth_date,
          address: this.$parent.user.address,
          phone: this.$parent.user.phone,
          email: this.$parent.user.email
        }
      }
    }
  },
  components: {
    FicheSalarieForm
  }
}
</script>
