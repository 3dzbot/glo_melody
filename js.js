$(document).ready(function () {
var counterUp = $('.counter_up');
var counterDown = $('.counter_down');
var currentFlor = 01;
const pathArr = document.querySelectorAll('.home_img path');

    $(".home_img path").on('mouseover', function(){
        currentFlor = $(this).attr("data-flor");
        changePath(currentFlor);
        $(this).css([ 'opacity', '1' ]);
        $('.counter').text(currentFlor);
    });

    function changePath(num) {
        pathArr.forEach(item => {
            item.style.opacity = 0;
            if(item.dataset.flor == num) {
                item.style.opacity = 1;
            }
        });
    }

    counterUp.on('click', function(){
        if(currentFlor < 17) {
            currentFlor++;
            currentFlor = currentFlor.toString().length >= 2 ? currentFlor : `0${currentFlor}`;
            $('.counter').text(currentFlor);
            changePath(currentFlor);
        }
    });
    counterDown.on('click', function(){
        if(currentFlor>1) {
            currentFlor--;
            // currentFlor = currentFlor.toString().length >= 2 ? currentFlor : `0${currentFlor}`;
            /* альтернативнйы метод работы с числом */
            var newCurrentFlor = currentFlor.toLocaleString("en-US", {minimumIntegerDigits: 2, useGrouping: false});
            $('.counter').text(newCurrentFlor);
            changePath(newCurrentFlor);
        }
    });
});