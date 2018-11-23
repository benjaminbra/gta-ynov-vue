<template>
    <div id="ErrorMessage">
        <b-alert variant="danger"
                 dismissible
                 :show="error.maxSecs"
                 @dismissed="dismissError"
                 @dismiss-count-down="countDownUpdate">
            {{ error.msg }}
            <b-progress variant="danger"
                        :max="error.maxSecs"
                        :value="errorCountDown"
                        height="4px">
            </b-progress>
        </b-alert>
    </div>
</template>

<script>
export default {
  name: 'ErrorMessage',
  props: { errorProp: Object },
  data: function () {
    return {
      showErrors: true,
      error: this.errorProp,
      errorCountDown: 0
    }
  },
  created: function () {
    this.errorCountDown = this.errorProp.actualSec
  },
  methods: {
    dismissError: function () {
      this.$emit('delete-error')
    },
    countDownUpdate: function (countDown) {
      this.errorCountDown = countDown
      if (countDown <= 0) {
        this.dismissError()
      }
    }
  }
}
</script>
