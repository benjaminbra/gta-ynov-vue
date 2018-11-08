<template>
    <div id="FicheSalarie" class="container">
        <h2>Fiche salarié</h2>
        <FicheSalarieForm :salarie="form.salarie"></FicheSalarieForm>
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
          firstname: 'Test',
          lastname: '',
          birth_date: null,
          address: 'Demo',
          phone: '',
          email: ''
        }
      }
    }
  },
  components: {
    FicheSalarieForm
  }
}
</script>
