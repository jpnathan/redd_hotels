import Controller from '@ember/controller';
import { computed } from "@ember/object";

export default Controller.extend({
  queryParams: ['s', 'e'],

  oneStar: false,
  twoStar: false,
  threeStar: false,
  fourStar: false,
  fiveStar: false,

  filteredHotels: computed('model', 'oneStar', 'twoStar', 'threeStar', 'fourStar', 'fiveStar', function() {
    let hotels = this.get('model');

    if (this.get('oneStar')) return hotels.filterBy('rate', 1);
    if (this.get('twoStar')) return hotels.filterBy('rate', 2);
    if (this.get('threeStar')) return hotels.filterBy('rate', 3);
    if (this.get('fourStar')) return hotels.filterBy('rate', 4);
    if (this.get('fiveStar')) return hotels.filterBy('rate', 5);

    return hotels;
  
  }),

  actions: {
    toggleOneStar(){
      this.toggleProperty('oneStar');
    },
    
    toggleTwoStar(){
      this.toggleProperty('twoStar');
    },

    toggleThreeStar(){
      this.toggleProperty('threeStar');
    },

    toggleFourStar(){
      this.toggleProperty('fourStar');
    },

    toggleFiveStar(){
      this.toggleProperty('fiveStar');
    },

  }

});
