<template>
    <div id="PlanningSalarie" class="container">
        <h2>Mon Planning</h2>
        <planning-form :salarie="salarie"></planning-form>
    </div>
</template>

<script>
import PlanningForm from '../components/PlanningForm'
export default {
  name: 'PlanningSalarie',
  data: function () {
    return {
      salarie: this.$parent.user
    }
  },
  components: {
    PlanningForm
  }
}
</script>
