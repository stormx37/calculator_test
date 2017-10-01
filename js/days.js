var sliderElem = document.getElementById('slider');

    var slider = new Slider({
      elem: sliderElem,
      max: 121
    });

    var day = {
      1 : 'день', 
      2 : 'дня', 
      3 : 'дня', 
      4 : 'дня', 
      5 : 'дней', 
      6 : 'дней', 
      7 : 'дней', 
      8 : 'дней', 
      9 : 'дней', 
      0 : 'дней',
      10 : 'дней',
      11 : 'дней',
      12 : 'дней',
      13 : 'дней',
      14 : 'дней'
    };
    
    sliderElem.addEventListener('slide', function(event) {
      var sufix = day[event.detail%10];
      //console.log({res: event.detail%100});
      if((event.detail%100)<15) {
        sufix = day[event.detail%100];
      }
      else { 
        sufix = day[event.detail%10];
      }
      document.getElementById('thumb').innerHTML = event.detail + ' ' + sufix;
    });

    sliderElem.addEventListener('change', function(event) {
      document.getElementById('change').innerHTML = event.detail;
    });