import Route from '@ember/routing/route';

export default Route.extend({

  actions: {
    resultHotels(start, end){
      this.transitionTo('calendar.calendar-result',
        {queryParams: {
            s: start,
            e: end
          }
        });
      this.refresh();
    }
  }
});
