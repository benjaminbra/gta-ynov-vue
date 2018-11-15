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
        salarie: this.$parent.user
      }
    }
  },
  components: {
    FicheSalarieForm
  }
}
</script>
