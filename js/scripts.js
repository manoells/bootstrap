$(document).ready(function(){
  
    // progressbar

    let containerA = document.getElementById("circleA");

    let circleA = new ProgressBar.Circle(containerA, {

        color: '#65DAF9',
        strokeWidth: 8,
        duration: 1400,
        from: { color: '#AAA' },
        to: { color: '#65DAF9' },

        step: function(state, circle) {

            circle.path.setAttribute('stroke', state.color);
            
            let value = Math.round(circle.value() *70);

            circle.setText(value);
        }

    });

    let containerB = document.getElementById("circleB");

    let circleB = new ProgressBar.Circle(containerB, {

        color: '#65DAF9',
        strokeWidth: 8,
        duration: 1600,
        from: { color: '#AAA' },
        to: { color: '#65DAF9' },

        step: function(state, circle) {

            circle.path.setAttribute('stroke', state.color);
            
            let value = Math.round(circle.value() *254);

            circle.setText(value);
        }

    });

    let containerC = document.getElementById("circleC");

    let circleC = new ProgressBar.Circle(containerC, {

        color: '#65DAF9',
        strokeWidth: 8,
        duration: 1400,
        from: { color: '#AAA' },
        to: { color: '#65DAF9' },

        step: function(state, circle) {

            circle.path.setAttribute('stroke', state.color);
            
            let value = Math.round(circle.value() *55);

            circle.setText(value);
        }

    });

    let containerD = document.getElementById("circleD");

    let circleD = new ProgressBar.Circle(containerD, {

        color: '#65DAF9',
        strokeWidth: 8,
        duration: 1400,
        from: { color: '#AAA' },
        to: { color: '#65DAF9' },

        step: function(state, circle) {

            circle.path.setAttribute('stroke', state.color);
            
            let value = Math.round(circle.value() *5458);

            circle.setText(value);
        }

    });

   // iniciando o loade quando o usuario chega no elemento
   let dataAreaOffset = $('#data-area').offset();
   let stop = 0 ;
   
   $(window).scroll(function(e) {

    let scroll = $(window).scrollTop();

    if(scroll > (dataAreaOffset.top - 500) && stop == 0) {

        circleA.animate(1.0);
        circleB.animate(1.0);
        circleC.animate(1.0);
        circleD.animate(1.0);

        stop = 1;

    }

   });

    // parallax
    setTimeout(function(){

        $('#data-area').parallax({imageSrc: 'img/cidadeparallax.png'});

    }, 250);

});