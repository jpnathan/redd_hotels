import Route from '@ember/routing/route';

export default Route.extend({

  actions: {
    resultHotels(){
      this.transitionTo('calendar-result');
    }
  }
});
