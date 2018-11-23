<template>
    <div id="DemandeForm">
        <b-form class="row">
            <b-form-group
                    id="typeAbs"
                    label="Type d'absence"
                    label-for="typeAbs" class="col-12">
                <b-form-select id="typeAbs" v-model="form.typeDemande" :selected="form.typeDemande" :options="optionsType"></b-form-select>
            </b-form-group>
            <b-form-group
                    id="dateStart"
                    label="Début absence"
                    label-for="dateStart" class="calendar-label col-12 col-lg-6">
                <datepicker v-model="form.dateBegin" :inline="true" :language="fr" :disabledDates="disabledDates" @input="refreshDisabledDate"></datepicker>
                <b-form-radio-group id="btnChoiceBegin"
                                    buttons
                                    v-model="form.choiceBegin"
                                    :options="optionsDayPart"
                                    name="radiosBtnDefault" ></b-form-radio-group>
            </b-form-group>
            <b-form-group
                    id="dateEnd"
                    label="Fin absence"
                    label-for="dateEnd" class="calendar-label col-12 col-lg-6">
                <datepicker v-model="form.dateEnd" :inline="true" :language="fr" :disabledDates="activeDisabledDate" ></datepicker>
                <b-form-radio-group id="btnChoiceEnd"
                                    buttons
                                    v-model="form.choiceEnd"
                                    :options="optionsDayPart"
                                    name="radiosBtnDefault" ></b-form-radio-group>
            </b-form-group>
            <b-form-group class="col-12">
                <b-button v-on:click="controlBeforeSaveDemande">Envoyer la demande</b-button>
            </b-form-group>
        </b-form>
    </div>
</template>

<script>
import DataService from '../services/DataService'
import Datepicker from 'vuejs-datepicker'
import { fr } from 'vuejs-datepicker/dist/locale'
import moment from 'moment'

let dataService = new DataService()

export default {
  name: 'DemandeForm',
  props: {
    userProp: Object
  },
  components: {
    Datepicker
  },
  data: function () {
    return {
      form: {
        typeDemande: '',
        dateBegin: null,
        dateEnd: null,
        choiceBegin: '',
        choiceEnd: ''
      },
      optionsType: [
        {
          text: 'Congé',
          value: 'abs_conge_await'
        },
        {
          text: 'Absence',
          value: 'abs_sans_solde_await'
        }
      ],
      optionsDayPart: [
        {
          text: 'Matin',
          value: 'matin'
        },
        {
          text: 'Après-midi',
          value: 'apres-midi'
        }
      ],
      fr: fr,
      disabledDates: {
        to: moment().add(-1, 'day').toDate()
      },
      activeDisabledDate: {},
      businessHours: {
        dow: [1, 2, 3, 4, 5]
      }
    }
  },
  created: function () {
    this.refreshDisabledDate()
  },
  methods: {
    refreshDisabledDate: function () {
      this.form.dateEnd = null
      if (this.form.dateBegin == null) {
        this.activeDisabledDate = {
          days: [0, 1, 2, 3, 4, 5, 6]
        }
      } else {
        this.activeDisabledDate = {
          to: moment(this.form.dateBegin).add(-1, 'day').add(1, 'day').toDate()
        }
      }
    },
    controlBeforeSaveDemande: function () {
      console.log(this.userProp)
      let error = false
      if (this.form.typeDemande == null || this.form.typeDemande === '') {
        this.$emit('error-demande', 'Le type de demande est obligatoire.')
        error = true
      }
      if (this.form.dateBegin == null || moment(this.form.dateBegin).toDate() < moment().startOf('day').toDate()) {
        this.$emit('error-demande', `La date de début de l'absence est obligatoire.`)
        error = true
      } else if (this.form.dateEnd == null || moment(this.form.dateEnd).toDate() < moment(this.form.dateBegin).toDate()) {
        this.$emit('error-demande', `La date de fin de l'absence est obligatoire.`)
        error = true
      }
      if (this.form.choiceBegin === '') {
        this.$emit('error-demande', `Il faut sélectionner le moment de la journée où l'absence commence.`)
        error = true
      }
      if (this.form.choiceEnd === '') {
        this.$emit('error-demande', `Il faut sélectionner le moment de la journée où l'absence se termine.`)
        error = true
      }
      if (!error && this.userProp != null) {
        dataService.getSalarieById(this.userProp.userId).then(this.saveDemande)
      }
    },
    saveDemande: function (users) {
      let user = users[0]
      let mStartDate = moment(this.form.dateBegin).startOf('day')
      if (this.form.choiceBegin === 'matin') {
        mStartDate = mStartDate.hour(8).minute(30)
      } else {
        mStartDate = mStartDate.hour(13).minute(0)
      }
      let mEndDate = moment(this.form.dateEnd).startOf('day')
      if (this.form.choiceEnd === 'matin') {
        mEndDate = mEndDate.hour(12).minute(0)
      } else {
        mEndDate = mEndDate.hour(16).minute(30)
      }
      let currDate = mStartDate.clone()

      do {
        if (this.businessHours.dow.includes(currDate.weekday())) {
          if (mStartDate.hour() < 12) {
            user.events.push(this.createNewEvent(currDate.clone().hour(8).minute(30), currDate.clone().hour(12).minute(0), this.form.typeDemande))
          }
          if (currDate.diff(mEndDate) < 0 || mEndDate.hour() > 13) {
            user.events.push(this.createNewEvent(currDate.clone().hour(13).minute(0), currDate.clone().hour(16).minute(30), this.form.typeDemande))
          }
        }
      } while (currDate.add(1, 'days').diff(mEndDate) <= 0)

      dataService.updateSalarie(user)
    },
    createNewEvent: function (startDate, endDate, type) {
      return {
        start: startDate,
        end: endDate,
        type: type
      }
    }
  }
}
</script>

<style scoped>
    .vdp-datepicker {
        margin: auto;
        width: 300px;
    }

    #DemandeForm .calendar-label {
        text-align: center;
    }
</style>
