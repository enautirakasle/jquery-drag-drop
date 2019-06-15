// A $( document ).ready() block.
$(document).ready(function () {
    $('.item').draggable({revert: false});

    $('#caja').droppable({
        drop: function( event, ui ) {
          $( this )
            .css( "opacity", "1" );
            //carritoan 1 gehitu
            
        }
      });


});