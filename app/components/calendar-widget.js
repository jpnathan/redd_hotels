import Component from '@ember/component';
import $ from "jquery";
import { computed } from "@ember/object";
import moment from "moment";

export default Component.extend({
  center: moment(),
  range: {
    start: moment(),
    end: moment()
  },

  selectedDates: computed('range', function() {
    $('.date-begin').val(moment(this.get('range.start')).format('DD/MM/YYYY'))
    $('.date-end').val(moment(this.get('range.end')).format('DD/MM/YYYY'))
  }),

  actions: {
    getHotels(){
      if ($('.date-begin').val() && $('.date-end').val()) {
        this.get('resultHotels')();
      }
    }
  }
});
