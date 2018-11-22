<template>
    <div id="PlanningForm" class="content-card">
        <full-calendar :events="events" :config="config"></full-calendar>
    </div>
</template>

<script>
import { FullCalendar } from 'vue-full-calendar'
import 'fullcalendar/dist/fullcalendar.css'
import 'fullcalendar/dist/locale/fr'
import moment from 'moment'

export default {
  name: 'PlanningForm',
  props: {
    salarie: Object
  },
  components: {
    FullCalendar
  },
  data: function () {
    return {
      contractId: null,
      contracts: null,
      salarieEvents: [],
      events: [],
      config: {
        locale: 'fr',
        nowIndicator: true,
        height: 550,
        businessHours: [{
          // days of week. an array of zero-based day of week integers (0=Sunday)
          dow: [1, 2, 3, 4, 5], // Monday - Thursday

          start: '8:30', // a start time (10am in this example)
          end: '12:00' // an end time (6pm in this example)
        },
        {
          // days of week. an array of zero-based day of week integers (0=Sunday)
          dow: [1, 2, 3, 4, 5], // Monday - Thursday

          start: '13:00', // a start time (10am in this example)
          end: '16:30' // an end time (6pm in this example)
        }
        ]
      }
    }
  },
  created: function () {
    this.contracts = this.salarie.contracts
    this.salarieEvents = this.salarie.events
    if (this.contracts != null && this.contracts.length > 0) {
      this.contractId = 0
      this.refreshEvents()
    }
  },
  methods: {
    refreshEvents: function () {
      this.events = []
      let activeContract = this.contracts[this.contractId]
      let startDate = activeContract.start
      let endDate = activeContract.end

      let mStartDate = moment(startDate).startOf('day')
      let mEndDate = moment(endDate).startOf('day')

      let currDate = mStartDate.clone()

      do {
        if (this.config.businessHours[0].dow.includes(currDate.weekday())) {
          if (mStartDate.hour() < 12) {
            this.createEvent(currDate.clone().hour(8).minute(30), currDate.clone().hour(12), null)
          }
          if (currDate.diff(mEndDate) < 0 || mEndDate.hour() > 13) {
            this.createEvent(currDate.clone().hour(13), currDate.clone().hour(16).minute(30), null)
          }
        }
      } while (currDate.add(1, 'days').diff(mEndDate) <= 0)

      for (let iSE in this.salarieEvents) {
        let salEvent = this.salarieEvents[iSE]
        this.createEvent(moment(salEvent.start), moment(salEvent.end), salEvent.type)
      }
    },
    createEvent: function (startDate, endDate, type) {
      let event = {
        start: startDate.toDate(),
        end: endDate.toDate()
      }

      if (type === 'abs_conge') {
        event.backgroundColor = '#ffbb3a'
        event.title = 'Congé'
      }

      this.events.push(event)
    }
  }
}
</script>

<style scoped>

</style>
