<template>
    <div id="DemandeSalarie" class="container">
        <h2>Mes demandes</h2>
        <demande-form @error-demande="callForError" :user-prop="this.$parent.user"></demande-form>
    </div>
</template>

<script>
import DemandeForm from '../components/DemandeForm'

export default {
  name: 'DemandeSalarie',
  components: {
    DemandeForm
  },
  methods: {
    callForError: function (message) {
      this.$parent.pushError(message)
    }
  }
}
</script>

<style scoped>

</style>
