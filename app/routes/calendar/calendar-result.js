import Route from '@ember/routing/route';
import { inject } from "@ember/service";
import moment from "moment";

export default Route.extend({
  ajax: inject(),

  model(params) {
    const totalNights = moment(params.e).format('D') - moment(params.s).format('D');
    return this.get('ajax').request('https://www.raphaelfabeni.com.br/rv/hotels.json').then(result => {
      result.hotels.params = params;
      result.hotels.forEach(hotel => {
        hotel.totalNights = totalNights;
        hotel.totalPrice = (hotel.price * totalNights).toFixed();;
      });

      return result.hotels;
    });
  }

});
