import Component from '@ember/component';

export default Component.extend({

  didInsertElement(){
    const slider = document.getElementById('test-slider');
    noUiSlider.create(slider, {
      start: [0, 1000],
      connect: true,
      step: 1,
      orientation: 'horizontal', // 'horizontal' or 'vertical'
      range: {
        'min': 0,
        'max': 1000
      },
    });
  }
});
